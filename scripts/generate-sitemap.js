#!/usr/bin/env node
/**
 * generate-sitemap.js
 * Builds public/sitemap.xml at build time by globbing all pages.
 * Called as a prebuild step so it works on Cloudflare Pages (no SSR).
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "pages");
const BLOG_DIR = path.join(PAGES_DIR, "blog");
const OUT = path.join(ROOT, "public", "sitemap.xml");
const SITE_URL = "https://ihatecollege.com";
const COLLEGES_JSON = path.join(ROOT, "data", "colleges.json");

// Pull every college slug from data/colleges.json — this is the same
// dataset pages/college/[slug].js (edge runtime) serves at request time.
// 6000+ URLs; hardcoding a subset made Search Console discover only ~80.
function loadCollegeSlugs() {
  try {
    const raw = JSON.parse(fs.readFileSync(COLLEGES_JSON, "utf8"));
    const list = Array.isArray(raw) ? raw : raw.colleges || [];
    const slugs = list.map(c => c.slug).filter(Boolean);
    if (!slugs.length) throw new Error("no slugs");
    return slugs;
  } catch (e) {
    console.error(`WARN: could not load ${COLLEGES_JSON}: ${e.message}`);
    return [];
  }
}

const COLLEGE_SLUGS = loadCollegeSlugs();
console.log(`Loaded ${COLLEGE_SLUGS.length} college slugs from data/colleges.json`);

const HIGH_PRIORITY = new Set([
  "", "/blog", "/job-board", "/trade-schools", "/alternatives",
  "/college-rankings", "/debt-calculator", "/civil-service", "/rank-your-school",
  "/is-college-worth-it-2025", "/is-college-worth-it-2026",
  "/how-to-make-money-without-a-college-degree",
  "/trade-school-vs-college-salary-2025", "/trade-school-vs-college-salary-2026",
  "/liberal-vs-conservative",
]);

// Static top-level pages (exclude special Next.js files)
const SKIP = new Set(["_app.js", "_document.js", "404.js", "sitemap.xml.js"]);

function discoverStaticPages() {
  const paths = [""];

  // Top-level pages
  const topLevel = fs.readdirSync(PAGES_DIR);
  for (const f of topLevel) {
    if (SKIP.has(f)) continue;
    const full = path.join(PAGES_DIR, f);
    const stat = fs.statSync(full);
    if (stat.isFile() && f.endsWith(".js")) {
      const slug = f.replace(/\.js$/, "");
      if (slug === "index") continue; // already added as ""
      paths.push(`/${slug}`);
    } else if (stat.isDirectory() && f !== "api" && f !== "college") {
      // Directory pages like job-board/index.js
      const indexFile = path.join(full, "index.js");
      if (fs.existsSync(indexFile)) paths.push(`/${f}`);
      // Sub-pages
      const subs = fs.readdirSync(full).filter((s) => s.endsWith(".js") && s !== "index.js");
      for (const s of subs) {
        paths.push(`/${f}/${s.replace(/\.js$/, "")}`);
      }
    }
  }

  // Blog pages
  if (fs.existsSync(BLOG_DIR)) {
    const blogFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".js"));
    for (const f of blogFiles) {
      const slug = f.replace(/\.js$/, "");
      if (slug === "index") {
        paths.push("/blog");
      } else {
        paths.push(`/blog/${slug}`);
      }
    }
  }

  // College pages
  for (const slug of COLLEGE_SLUGS) {
    paths.push(`/college/${slug}`);
  }

  return [...new Set(paths)];
}

function buildSitemap(paths) {
  const now = new Date().toISOString();
  const urls = paths.map((p) => {
    const priority = p === "" ? "1.0"
      : HIGH_PRIORITY.has(p) ? "0.95"
      : p.startsWith("/blog/") ? "0.85"
      : p.startsWith("/college/") ? "0.70"
      : "0.80";
    const changefreq = p === "" || p === "/blog" ? "daily" : p.startsWith("/blog/") ? "weekly" : "monthly";
    return `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

const paths = discoverStaticPages();
const xml = buildSitemap(paths);
fs.writeFileSync(OUT, xml);
console.log(`Sitemap generated: ${paths.length} URLs -> public/sitemap.xml`);
