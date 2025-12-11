export async function getServerSideProps({ res }) {
  const siteUrl = "https://ihatecollege.com";

  // These are your Money Pages.
  // If you add a blog later, you can add those links here.
  const urls = [
    "",
    "/alternatives",
    "/trade-schools",
    "/cheat-sheets",
    "/debt-calculator",
    "/rank-your-school",
    "/civil-service",
    "/liberal-vs-conservative",
    "/contact"
  ];

  const xmlUrls = urls
    .map((path) => {
      return `
    <url>
      <loc>${siteUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${path === "" ? "daily" : "weekly"}</changefreq>
      <priority>${path === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`.trim();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}