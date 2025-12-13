import Parser from "rss-parser";

const parser = new Parser({
  timeout: 8000,
});

// HARD NO UNION — JOBS + ECONOMY ONLY
const FEEDS = [
  // JOBS / ECON DATA (PRIMARY)
  { url: "https://www.bls.gov/feed/empsit.rss", source: "BLS Jobs Report", weight: 3 },
  { url: "https://www.bls.gov/feed/jolts.rss", source: "BLS JOLTS", weight: 2 },
  { url: "https://www.dol.gov/rss/releases.xml", source: "U.S. Dept. of Labor", weight: 2 },

  // BACKUP ECON / LABOR MARKET NEWS
  { url: "https://www.cnbc.com/id/10001147/device/rss/rss.html", source: "CNBC Economy", weight: 1 },
  { url: "https://www.marketwatch.com/rss/topstories", source: "MarketWatch", weight: 1 },
  { url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml", source: "WSJ Markets", weight: 1 },
];

const TOTAL_ITEMS = 30;
const CACHE_TTL = 10 * 60 * 1000; // 10 min
let CACHE = { ts: 0, items: [] };

function parseDate(d) {
  const t = Date.parse(d || "");
  return Number.isFinite(t) ? t : 0;
}

function dedupe(items) {
  const seen = new Set();
  return items.filter((i) => {
    const k = `${i.title}||${i.link}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

export default async function handler(req, res) {
  try {
    const now = Date.now();
    const noCache = req.query?.nocache === "1";

    if (!noCache && CACHE.items.length && now - CACHE.ts < CACHE_TTL) {
      res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
      return res.status(200).json({ items: CACHE.items });
    }

    const results = await Promise.allSettled(
      FEEDS.map(async (f) => {
        try {
          const feed = await parser.parseURL(f.url);
          return (feed.items || []).map((it) => ({
            title: (it.title || "").trim(),
            link: (it.link || "").trim(),
            pubDate: it.isoDate || it.pubDate || "",
            source: f.source,
            weight: f.weight,
          }));
        } catch {
          return []; // 🔥 silently skip broken feed
        }
      })
    );

    let items = results
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .filter((i) => i.title && i.link);

    if (!items.length) {
      return res.status(200).json({
        items: [
          {
            title: "Latest jobs and economic updates loading…",
            link: "#",
            source: "System",
          },
        ],
      });
    }

    items = dedupe(items).sort(
      (a, b) =>
        b.weight - a.weight || parseDate(b.pubDate) - parseDate(a.pubDate)
    );

    const finalItems = items.slice(0, TOTAL_ITEMS);

    CACHE = { ts: now, items: finalItems };

    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
    return res.status(200).json({ items: finalItems });
  } catch {
    // Absolute last-resort fallback (should be rare)
    return res.status(200).json({
      items: [
        {
          title: "Jobs & economy headlines updating…",
          link: "#",
          source: "System",
        },
      ],
    });
  }
}
