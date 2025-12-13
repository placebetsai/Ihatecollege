import Parser from "rss-parser";

const parser = new Parser();

const FEEDS = [
  { url: "https://www.bls.gov/feed/empsit.rss", source: "BLS Jobs Report" },
  { url: "https://www.bls.gov/feed/jolts.rss", source: "BLS JOLTS" },
  { url: "https://www.bls.gov/feed/union2.rss", source: "BLS Union" },
  { url: "https://www.dol.gov/rss/releases.xml", source: "U.S. Dept. of Labor" },
  { url: "https://www.nlrb.gov/rss/rssPressReleases.xml", source: "NLRB" },
  { url: "https://partners.aflcio.org/node/3029/rss/0", source: "AFL-CIO" },
];

function dedupe(items) {
  const seen = new Set();
  return items.filter((i) => {
    const key = `${i.link}||${i.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
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
        }));
      })
    );

    const merged = results
      .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
      .filter((i) => i.title && i.link);

    const sorted = dedupe(merged).sort((a, b) => {
      const ad = a.pubDate ? Date.parse(a.pubDate) : 0;
      const bd = b.pubDate ? Date.parse(b.pubDate) : 0;
      return bd - ad;
    });

    const top = sorted.slice(0, 20);

    // Cache on Vercel edge so it doesn’t hammer RSS sources
    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
    res.status(200).json({ items: top });
  } catch (e) {
    res.status(200).json({
      items: [
        {
          title: "News feed temporarily unavailable — refresh soon.",
          link: "#",
          source: "System",
        },
      ],
    });
  }
}
