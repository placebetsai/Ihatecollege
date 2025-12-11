// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://ihatecollege.com";

export default function SEO({
  title = "IHateCollege.com | Escape Debt, Build Wealth",
  description = "The no-BS guide to skipping the degree trap. Compare trade schools, certifications, and high-income paths that don't require $100k in loans.",
  // SOCIAL CARD = The one with "IHATECOLLEGE" text (...5374.jpg)
  image = `${SITE_URL}/1765407955374.jpg`, 
}) {
  const router = useRouter();
  const path = router.asPath === "/" ? "" : router.asPath;
  const canonicalUrl = `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IHateCollege",
    url: SITE_URL,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ICON = The one with the Hat (...4747.jpg) */}
      <link rel="icon" href="/1765407974747.jpg" />
      <link rel="apple-touch-icon" href="/1765407974747.jpg" />

      {/* Social Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IHateCollege" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}