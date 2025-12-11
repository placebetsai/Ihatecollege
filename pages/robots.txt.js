export async function getServerSideProps({ res }) {
  const siteUrl = "https://ihatecollege.com"; // Make sure this matches your domain

  const robots = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
  `.trim();

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}