// pages/api/search-colleges.js
// Fast local college search using the pre-built colleges.json dataset (6,322 colleges from
// the College Scorecard federal API). No external API dependency.
//
// Handles common abbreviations + relevance ranking so users typing "UCLA" don't get zero
// hits, and users typing "MIT" get the real MIT (not "Mitchell Technical College").

import colleges from "../../data/colleges.json";

// Abbreviation → canonical substring that appears in the official name.
// When a user searches one of these, we also check the expanded form.
const ALIASES = {
  "ucla": "university of california-los angeles",
  "ucb": "university of california-berkeley",
  "uc berkeley": "university of california-berkeley",
  "ucsb": "university of california-santa barbara",
  "ucsd": "university of california-san diego",
  "uci": "university of california-irvine",
  "ucd": "university of california-davis",
  "ucr": "university of california-riverside",
  "ucsc": "university of california-santa cruz",
  "ucm": "university of california-merced",
  "nyu": "new york university",
  "cuny": "city university of new york",
  "suny": "state university of new york",
  "usc": "university of southern california",
  "mit": "massachusetts institute of technology",
  "caltech": "california institute of technology",
  "cmu": "carnegie mellon",
  "gtech": "georgia institute of technology",
  "georgia tech": "georgia institute of technology",
  "vt": "virginia tech",
  "vatech": "virginia tech",
  "pitt": "university of pittsburgh",
  "penn": "university of pennsylvania",
  "penn state": "pennsylvania state university",
  "psu": "pennsylvania state university",
  "tamu": "texas a&m",
  "ut austin": "university of texas at austin",
  "ut": "university of texas",
  "umich": "university of michigan",
  "uofm": "university of michigan",
  "msu": "michigan state university",
  "osu": "ohio state university",
  "fsu": "florida state university",
  "uf": "university of florida",
  "uga": "university of georgia",
  "lsu": "louisiana state university",
  "bama": "university of alabama",
  "roll tide": "university of alabama",
  "unc": "university of north carolina",
  "nc state": "north carolina state",
  "duke": "duke university",
  "byu": "brigham young",
  "wsu": "washington state",
  "uw": "university of washington",
  "uva": "university of virginia",
  "jmu": "james madison",
  "gmu": "george mason",
  "gwu": "george washington",
  "bu": "boston university",
  "bc": "boston college",
  "neu": "northeastern university",
  "uconn": "university of connecticut",
  "umass": "university of massachusetts",
  "uri": "university of rhode island",
  "umd": "university of maryland",
  "vcu": "virginia commonwealth",
  "odu": "old dominion",
  "fiu": "florida international",
  "ucf": "university of central florida",
  "usf": "university of south florida",
  "fau": "florida atlantic",
  "gt": "georgia institute of technology",
  "gsu": "georgia state",
  "ku": "university of kansas",
  "kstate": "kansas state",
  "mu": "university of missouri",
  "slu": "saint louis university",
  "iu": "indiana university",
  "purdue": "purdue university",
  "illini": "university of illinois",
  "uiuc": "university of illinois urbana",
  "depaul": "depaul university",
  "uw madison": "university of wisconsin-madison",
  "marquette": "marquette university",
  "asu": "arizona state",
  "ua": "university of arizona",
  "nau": "northern arizona",
  "wvu": "west virginia university",
  "tcu": "texas christian",
  "smu": "southern methodist",
  "baylor": "baylor university",
  "rice": "rice university",
  "uthealth": "university of texas health",
  "cornell": "cornell university",
  "fordham": "fordham university",
  "pace": "pace university",
  "hofstra": "hofstra university",
  "stanford": "stanford university",
  "jhu": "johns hopkins",
  "hopkins": "johns hopkins",
};

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

// Compute relevance score — higher is better
function score(college, q, qExpanded) {
  const name = normalize(college.name);
  const city = normalize(college.city);
  const state = normalize(college.state);
  let s = 0;
  const qs = [q, qExpanded].filter(Boolean);
  for (const term of qs) {
    if (!term) continue;
    if (name === term) s += 1000;
    else if (name.startsWith(term)) s += 500;
    else if (name.split(/\s+/).includes(term)) s += 300; // whole-word match
    else if (name.includes(term)) s += 100;
    if (city === term) s += 80;
    else if (city.includes(term)) s += 40;
    if (state === term) s += 60;
  }
  // Short well-known institutions should beat trade schools with q as a substring
  const famousPatterns = /\b(university|college|institute of technology|institute)\b/;
  if (famousPatterns.test(name)) s += 20;
  // For single-term abbreviation queries, penalize unrelated substring matches
  if (q.length <= 4 && !name.startsWith(q) && !name.split(/\s+/).includes(q)) s -= 50;
  // Earnings tiebreaker
  const earn = parseInt(String(college.earnings || "0").replace(/[^0-9]/g, "")) || 0;
  return s + Math.min(earn / 1000, 150);
}

export default function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  const q = normalize(req.query.q);
  if (q.length < 2) {
    return res.json({ results: [] });
  }
  const limit = Math.min(parseInt(req.query.limit) || 50, 100);
  const qExpanded = ALIASES[q] || null;

  const candidates = [];
  for (const c of colleges.colleges) {
    const name = normalize(c.name);
    const city = normalize(c.city);
    const state = normalize(c.state);
    const composite = `${name} ${city} ${state}`;
    const matches = name.includes(q) || city.includes(q) || state.includes(q) || composite.includes(q)
      || (qExpanded && name.includes(qExpanded));
    if (matches) candidates.push(c);
  }

  candidates.sort((a, b) => score(b, q, qExpanded) - score(a, q, qExpanded));
  res.json({ results: candidates.slice(0, limit) });
}
