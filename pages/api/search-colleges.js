// pages/api/search-colleges.js
// Fast local college search using the pre-built colleges.json dataset (6,429 colleges)
// No external API dependency — instant results

import colleges from "../../data/colleges.json";

export default function handler(req, res) {
  const q = (req.query.q || "").toLowerCase().trim();
  if (q.length < 2) {
    return res.json({ results: [] });
  }

  const results = [];
  for (const c of colleges.colleges) {
    if (results.length >= 15) break;
    const name = c.name.toLowerCase();
    const city = (c.city || "").toLowerCase();
    const state = (c.state || "").toLowerCase();
    if (name.includes(q) || city.includes(q) || `${name} ${city} ${state}`.includes(q)) {
      results.push(c);
    }
  }

  // Sort: exact prefix matches first, then alphabetical
  results.sort((a, b) => {
    const aStart = a.name.toLowerCase().startsWith(q) ? 0 : 1;
    const bStart = b.name.toLowerCase().startsWith(q) ? 0 : 1;
    if (aStart !== bStart) return aStart - bStart;
    return a.name.localeCompare(b.name);
  });

  res.json({ results: results.slice(0, 15) });
}
