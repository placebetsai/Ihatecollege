// pages/api/news.js
// Dependency-free RSS fetch + lightweight parsing.
// Skips any feed that fails. Returns headlines if ANY feed works.

const FEEDS = [
  // Jobs + economy focused
  { url: "https://www.bls.gov/feed/empsit.rss", source: "BLS Jobs Report" },
  { url: "https://www.bls.gov/feed/jolts.rss", source: "BLS JOLTS" },
  { url: "https://www.dol.gov/rss/releases.xml", source: "U.S. Dept. of Labor" },

  // Backups (if govt feeds hiccup)
  { url: "https://www.marketwatch.com/rss/topstories", source: "MarketWatch" },
  { url: "https://www.cnbc.com/id/10001147/device/rss/rss.html", source: "CNBC" },
];

const TOTAL_ITEMS = 30;

// In-memory cache (works on warm Vercel invocations)
let CACHE = { ts: 0, items: [] };
const CACHE_TTL_MS = 10 * 60 * 1000;

function stripCdata(s = "") {
  return s.replace("<![CDATA[", "").replace("]]>", "").trim();
}

function pickFirst(matchArr) {
  return matchArr && matchArr[1] ? matchArr[1].trim() : "";
}

// ✅ Decode named + numeric HTML entities (kills &amp; forever)
function decodeEntities(s = "") {
  let t = String(s);

  t = t
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

  // decimal numeric entities
  t = t.replace(/&#(\d+);/g, (_, code) => {
    try {
      return String.fromCodePoint(parseInt(code, 10));
    } catch {
      return _;
    }
  });

  // hex numeric entities
  t = t.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
    try {
      return String.fromCodePoint(parseInt(hex, 16));
    } catch {
      return _;
    }
  });

  return t;
}

// Very lightweight RSS item extraction (good enough for headlines)
function parseRss(xmlText, source) {
  const items = [];
  const rawItems = xmlText.split(/<\/item>/i);

  for (const chunk of rawItems) {
    if (!/<item>/i.test(chunk)) continue;

    const titleRaw = pickFirst(chunk.match(/<title>([\s\S]*?)<\/title>/i));
    const linkRaw = pickFirst(chunk.match(/<link>([\s\S]*?)<\/link>/i));
    const guidRaw = pickFirst(chunk.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i));

    const title = decodeEntities(stripCdata(titleRaw));
    let link = decodeEntities(stripCdata(linkRaw));

    if (!link) link = decodeEntities(stripCdata(guidRaw));

    const pubDate =
      stripCdata(pickFirst(chunk.match(/<pubDate>([\s\S]*?)<\/pubDate>/i))) ||
      stripCdata(pickFirst(chunk.match(/<dc:date>([\s\S]*?)<\/dc:date>/i))) ||
      stripCdata(pickFirst(chunk.match(/<updated>([\s\S]*?)<\/updated>/i)));

    if (!title || !link) continue;

    items.push({
      title,
      link,
      pubDate,
      source: decodeEntities(source),
    });

    if (items.length >= 50) break;
  }

  return items;
}

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

    if (!noCache && CACHE.items.length && now - CACHE.ts < CACHE_TTL_MS) {
      res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
      return res.status(200).json({ items: CACHE.items });
    }

    const results = await Promise.allSettled(
      FEEDS.map(async (f) => {
        try {
          const r = await fetch(f.url, {
            headers: {
              "user-agent": "Mozilla/5.0 (NewsTickerBot)",
              accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
            },
          });
          if (!r.ok) return [];
          const xml = await r.text();
          return parseRss(xml, f.source);
        } catch {
          return [];
        }
      })
    );

    let all = results.flatMap((r) => (r.status === "fulfilled" ? r.value : []));
    all = dedupe(all).sort((a, b) => parseDate(b.pubDate) - parseDate(a.pubDate));

    const finalItems = all.slice(0, TOTAL_ITEMS);

    CACHE = { ts: now, items: finalItems.length ? finalItems : CACHE.items };

    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
    return res.status(200).json({
      items: finalItems.length
        ? finalItems
        : [
            {
              title: "Loading the latest jobs + economy headlines…",
              link: "#",
              source: "System",
            },
          ],
    });
  } catch {
    return res.status(200).json({
      items: [
        {
          title: "Loading the latest jobs + economy headlines…",
          link: "#",
          source: "System",
        },
      ],
    });
  }
  }
