#!/usr/bin/env node
/**
 * generate-sitemap.js
 * Builds a sitemap INDEX + 3 sub-sitemaps at build time:
 *   public/sitemap.xml            - index
 *   public/sitemap-static.xml     - top-level static pages (~30 URLs)
 *   public/sitemap-blog.xml       - blog posts (~172 URLs)
 *   public/sitemap-colleges.xml   - /college/[slug] pages (~6,211 URLs)
 *
 * Per-URL <lastmod> is sourced from real content (blog frontmatter
 * "// date:" / "dateModified"; colleges.json mtime; page file mtime)
 * so Google can tell which pages actually changed.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "pages");
const BLOG_DIR = path.join(PAGES_DIR, "blog");
const PUBLIC_DIR = path.join(ROOT, "public");
const SITE_URL = "https://ihatecollege.com";
const COLLEGES_JSON = path.join(ROOT, "data", "colleges.json");

const OUT_INDEX = path.join(PUBLIC_DIR, "sitemap.xml");
const OUT_STATIC = path.join(PUBLIC_DIR, "sitemap-static.xml");
const OUT_BLOG = path.join(PUBLIC_DIR, "sitemap-blog.xml");
const OUT_COLLEGES = path.join(PUBLIC_DIR, "sitemap-colleges.xml");

const HIGH_PRIORITY = new Set([
  "", "/blog", "/job-board", "/trade-schools", "/alternatives",
  "/college-rankings", "/debt-calculator", "/civil-service", "/rank-your-school",
  "/is-college-worth-it-2025", "/is-college-worth-it-2026",
  "/how-to-make-money-without-a-college-degree",
  "/no-degree-jobs", "/trade-school-jobs",
  "/trade-school-vs-college-salary-2025", "/trade-school-vs-college-salary-2026",
  "/liberal-vs-conservative",
]);

// Static top-level pages (exclude special Next.js files)
const SKIP = new Set(["_app.js", "_document.js", "404.js", "sitemap.xml.js"]);

function isoFromMtime(filePath) {
  try {
    return new Date(fs.statSync(filePath).mtime).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function extractBlogDate(filePath) {
  try {
    const src = fs.readFileSync(filePath, "utf8");
    // Prefer dateModified in the JSON-LD schema block
    const mod = src.match(/"dateModified":"(\d{4}-\d{2}-\d{2})"/);
    if (mod) return new Date(`${mod[1]}T00:00:00Z`).toISOString();
    // Fallback: "// date: YYYY-MM-DD" header comment
    const head = src.match(/^\/\/\s*date:\s*(\d{4}-\d{2}-\d{2})/m);
    if (head) return new Date(`${head[1]}T00:00:00Z`).toISOString();
  } catch {}
  return isoFromMtime(filePath);
}

function loadCollegeSlugs() {
  try {
    const raw = JSON.parse(fs.readFileSync(COLLEGES_JSON, "utf8"));
    const list = Array.isArray(raw) ? raw : raw.colleges || [];
    const slugs = list.map((c) => c.slug).filter(Boolean);
    if (!slugs.length) throw new Error("no slugs");
    return [...new Set(slugs)];
  } catch (e) {
    console.error(`WARN: could not load ${COLLEGES_JSON}: ${e.message}`);
    return [];
  }
}

function priorityFor(p) {
  if (p === "") return "1.0";
  if (HIGH_PRIORITY.has(p)) return "0.95";
  if (p.startsWith("/blog/")) return "0.85";
  if (p.startsWith("/college/")) return "0.70";
  return "0.80";
}

function changefreqFor(p) {
  if (p === "" || p === "/blog") return "daily";
  if (p.startsWith("/blog/")) return "weekly";
  return "monthly";
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function wrapUrlset(body) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function wrapIndex(entries) {
  const body = entries
    .map(
      (e) =>
        `  <sitemap>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </sitemap>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

// ---------- static pages ----------
function buildStaticEntries() {
  // Each entry: { path, file }
  const entries = [];
  const seen = new Set();

  const push = (p, file) => {
    if (seen.has(p)) return;
    seen.add(p);
    entries.push({ path: p, file });
  };

  // Home
  push("", path.join(PAGES_DIR, "index.js"));

  const topLevel = fs.readdirSync(PAGES_DIR);
  for (const f of topLevel) {
    if (SKIP.has(f)) continue;
    const full = path.join(PAGES_DIR, f);
    const stat = fs.statSync(full);
    if (stat.isFile() && f.endsWith(".js")) {
      const slug = f.replace(/\.js$/, "");
      if (slug === "index") continue;
      push(`/${slug}`, full);
    } else if (stat.isDirectory() && f !== "api" && f !== "college" && f !== "blog") {
      const indexFile = path.join(full, "index.js");
      if (fs.existsSync(indexFile)) push(`/${f}`, indexFile);
      const subs = fs
        .readdirSync(full)
        .filter((s) => s.endsWith(".js") && s !== "index.js");
      for (const s of subs) {
        push(`/${f}/${s.replace(/\.js$/, "")}`, path.join(full, s));
      }
    }
  }

  return entries.map(({ path: p, file }) => ({
    loc: `${SITE_URL}${p}`,
    lastmod: isoFromMtime(file),
    changefreq: changefreqFor(p),
    priority: priorityFor(p),
  }));
}

// ---------- blog ----------
function buildBlogEntries() {
  const entries = [];
  if (!fs.existsSync(BLOG_DIR)) return entries;

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".js"));
  for (const f of files) {
    const slug = f.replace(/\.js$/, "");
    const full = path.join(BLOG_DIR, f);
    if (slug === "index") {
      entries.push({
        loc: `${SITE_URL}/blog`,
        lastmod: isoFromMtime(full),
        changefreq: changefreqFor("/blog"),
        priority: priorityFor("/blog"),
      });
    } else {
      const p = `/blog/${slug}`;
      entries.push({
        loc: `${SITE_URL}${p}`,
        lastmod: extractBlogDate(full),
        changefreq: changefreqFor(p),
        priority: priorityFor(p),
      });
    }
  }
  return entries;
}

// ---------- colleges ----------
function buildCollegeEntries() {
  const slugs = loadCollegeSlugs();
  const lastmod = isoFromMtime(COLLEGES_JSON);
  return slugs.map((slug) => {
    const p = `/college/${slug}`;
    return {
      loc: `${SITE_URL}${p}`,
      lastmod,
      changefreq: changefreqFor(p),
      priority: priorityFor(p),
    };
  });
}

// ---------- main ----------
const staticEntries = buildStaticEntries();
const blogEntries = buildBlogEntries();
const collegeEntries = buildCollegeEntries();

const staticXml = wrapUrlset(staticEntries.map(urlEntry).join("\n"));
const blogXml = wrapUrlset(blogEntries.map(urlEntry).join("\n"));
const collegeXml = wrapUrlset(collegeEntries.map(urlEntry).join("\n"));

fs.writeFileSync(OUT_STATIC, staticXml);
fs.writeFileSync(OUT_BLOG, blogXml);
fs.writeFileSync(OUT_COLLEGES, collegeXml);

// Index lastmod = newest lastmod in each sub-sitemap
function newestLastmod(entries) {
  return entries
    .map((e) => e.lastmod)
    .sort()
    .slice(-1)[0] || new Date().toISOString();
}

const indexXml = wrapIndex([
  { loc: `${SITE_URL}/sitemap-static.xml`, lastmod: newestLastmod(staticEntries) },
  { loc: `${SITE_URL}/sitemap-blog.xml`, lastmod: newestLastmod(blogEntries) },
  { loc: `${SITE_URL}/sitemap-colleges.xml`, lastmod: newestLastmod(collegeEntries) },
]);
fs.writeFileSync(OUT_INDEX, indexXml);

console.log(
  `Sitemap index written. static=${staticEntries.length}, blog=${blogEntries.length}, colleges=${collegeEntries.length}, total=${staticEntries.length + blogEntries.length + collegeEntries.length}`
);
