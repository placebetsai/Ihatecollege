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

const COLLEGE_SLUGS = [
  "harvard-university","mit","stanford-university","yale-university",
  "princeton-university","columbia-university","university-of-pennsylvania",
  "dartmouth-college","brown-university","cornell-university",
  "duke-university","northwestern-university","vanderbilt-university",
  "georgetown-university","carnegie-mellon-university","washington-univ-in-st-louis",
  "rice-university","notre-dame-university","emory-university","tufts-university",
  "university-of-southern-california","boston-university","northeastern-university",
  "new-york-university","wake-forest-university","tulane-university",
  "lehigh-university","rensselaer-polytechnic-institute","uc-berkeley","ucla",
  "university-of-michigan","unc-chapel-hill","university-of-virginia","georgia-tech",
  "uc-san-diego","uc-santa-barbara","uc-davis","university-of-illinois-urbana",
  "university-of-wisconsin-madison","purdue-university","university-of-washington",
  "ohio-state-university","penn-state-university","michigan-state-university",
  "university-of-florida","florida-state-university","university-of-texas-at-austin",
  "texas-a-m-university","university-of-maryland","rutgers-university",
  "university-of-minnesota","indiana-university","university-of-colorado-boulder",
  "arizona-state-university","university-of-arizona","university-of-oregon",
  "virginia-tech","nc-state-university","clemson-university","auburn-university",
  "university-of-alabama","louisiana-state-university","university-of-tennessee",
  "university-of-iowa","university-of-pittsburgh","suny-buffalo",
  "stony-brook-university","university-of-nebraska","university-of-kansas",
  "university-of-missouri","west-virginia-university","mississippi-state-university",
  "devry-university","full-sail-university","strayer-university",
  "grand-canyon-university","santa-monica-college","miami-dade-college",
  "valencia-college","broward-college","houston-community-college",
  "ivy-tech-community-college",
];

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
