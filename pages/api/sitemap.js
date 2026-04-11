// pages/api/sitemap.js
// Serves the pre-generated sitemap.xml from public/
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  try {
    const xml = fs.readFileSync(sitemapPath, "utf8");
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    res.status(200).send(xml);
  } catch (e) {
    res.status(404).send("Sitemap not found");
  }
}
