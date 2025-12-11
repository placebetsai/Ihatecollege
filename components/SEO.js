// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://ihatecollege.com";
const SOCIAL_IMAGE = `${SITE_URL}/social-card.png`;

export default function SEO({
  title = "IHateCollege.com | Escape Debt, Build Wealth",
  description = "Real alternatives to college: trade schools, certifications, apprenticeships, and high-income paths with no debt.",
  image = SOCIAL_IMAGE,
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
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon / Icon */}
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      {/* Open Graph (Facebook/LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IHateCollege" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
    }
