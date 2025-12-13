import Parser from "rss-parser";

const parser = new Parser();

// -------- SETTINGS --------
const TOTAL_ITEMS = 30;
const UNION_PERCENT = 0.03; // 3%
const JOBS_PERCENT = 0.70;  // 70%

const MAX_UNION = Math.max(1, Math.round(TOTAL_ITEMS * UNION_PERCENT)); // ~1
const MAX_JOBS = Math.round(TOTAL_ITEMS * JOBS_PERCENT);               // ~21
const MAX_ECON = TOTAL_ITEMS - MAX_UNION - MAX_JOBS;                   // ~8

// -------- FEEDS --------
const FEEDS = [
  // JOBS + ECON (NON-UNION)
  { url: "https://www.bls.gov/feed/empsit.rss", source: "BLS Jobs Report", type: "jobs" },
  { url: "https://www.bls.gov/feed/jolts.rss", source: "BLS JOLTS", type: "jobs" },
  { url: "https://www.dol.gov/rss/releases.xml", source: "Dept. of Labor", type: "jobs" },

  // UNION (HARD CAPPED)
  { url: "https://www.bls.gov/feed/union2.rss", source: "BLS Union", type: "union" },
  { url: "https://www.nlrb.gov/rss/rssPressReleases.xml", source: "NLRB", type: "union" },
  { url: "https://partners.aflcio.org/node/3029/rss/0", source: "AFL-CIO", type: "union" },
];

function parseDate(d) {
  const t = Date.parse(d || "");
  return Number.isFinite(t) ? t : 0;
}

function dedupe(items) {
  const seen = new Set();
  return items.filter((i) => {
    const key = `${i.link}||${i.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function newestFirst(items) {
  return items.sort((a, b) => parseDate(b.pubDate) - parseDate(a.pubDate));
}

function roundRobinBySource(items, limit) {
  const groups = {};
  for (const it of items) {
    if (!groups[it.source]) groups[it.source] = [];
    groups[it.source].push(it);
  }

  Object.values(groups).forEach(newestFirst);

  const out = [];
  const sources = Object.keys(groups);

  while (out.length < limit) {
    let progressed = false;
    for (const s of sources) {
      if (out.length >= limit) break;
      if (groups[s].length) {
        out.push(groups[s].shift());
        progressed = true;
      }
    }
    if (!progressed) break;
  }

  return out;
}

export default async function handler(req, res) {
  try {
    const results = await Promise.allSettled(
      FEEDS.map(async (f) => {
        const feed = await parser.parseURL(f.url);
        return (feed.items || []).map((it) => ({
          title: (it.title || "").trim(),
          link: (it.link || "").trim(),
          pubDate: it.isoDate || it.pubDate || "",
          source: f.source,
          type: f.type,
        }));
      })
    );

    const all = dedupe(
      results
        .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
        .filter((i) => i.title && i.link)
    );

    const unionAll = newestFirst(all.filter((i) => i.type === "union"));
    const jobsAll = newestFirst(all.filter((i) => i.type === "jobs"));

    // Pick union (hard limited)
    const unionPicked = unionAll.slice(0, MAX_UNION);

    // Pick jobs (70%) round-robin so one source doesn’t spam
    const jobsPicked = roundRobinBySource(jobsAll, MAX_JOBS);

    // Econ/labor filler (27%) = more non-union from same jobs feeds (still BLS/DOL)
    const remainingJobs = jobsAll.filter((j) => !jobsPicked.some((p) => p.link === j.link));
    const econPicked = remainingJobs.slice(0, MAX_ECON);

    // Final order: Jobs -> Econ -> Union (union last, rare)
    const finalItems = [...jobsPicked, ...econPicked, ...unionPicked].slice(0, TOTAL_ITEMS);

    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
    res.status(200).json({ items: finalItems });
  } catch (e) {
    res.status(200).json({
      items: [
        {
          title: "News feed temporarily unavailable — check back soon.",
          link: "#",
          source: "System",
        },
      ],
    });
  }
}
