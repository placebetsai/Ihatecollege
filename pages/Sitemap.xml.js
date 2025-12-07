export async function getServerSideProps({ res }) {
  const baseUrl = "https://ihatecollege.com";

  const pages = [
    "",
    "/alternatives",
    "/trade-schools",
    "/civil-service",
    "/cheat-sheets",
    "/debt-calculator",
    "/rank-your-school",
    "/liberal-vs-conservative",
    "/contact"
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `.trim();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
