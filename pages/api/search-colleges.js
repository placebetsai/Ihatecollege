// pages/api/search-colleges.js
// Fast local college search using the pre-built colleges.json dataset (6,429 colleges)
// No external API dependency — instant results

import colleges from "../../data/colleges.json";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  const q = (req.query.q || "").toLowerCase().trim();
  if (q.length < 2) {
    return res.json({ results: [] });
  }

  const limit = Math.min(parseInt(req.query.limit) || 50, 100);

  const results = [];
  for (const c of colleges.colleges) {
    if (results.length >= limit) break;
    const name = c.name.toLowerCase();
    const city = (c.city || "").toLowerCase();
    const state = (c.state || "").toLowerCase();
    if (name.includes(q) || city.includes(q) || state.includes(q) || `${name} ${city} ${state}`.includes(q)) {
      results.push(c);
    }
  }

  // Sort: exact prefix matches first, then by earnings descending
  const parseEarnings = (s) => parseInt(String(s || "0").replace(/[^0-9]/g, "")) || 0;
  results.sort((a, b) => {
    const aStart = a.name.toLowerCase().startsWith(q) ? 0 : 1;
    const bStart = b.name.toLowerCase().startsWith(q) ? 0 : 1;
    if (aStart !== bStart) return aStart - bStart;
    return parseEarnings(b.earnings) - parseEarnings(a.earnings);
  });

  res.json({ results: results.slice(0, limit) });
}
