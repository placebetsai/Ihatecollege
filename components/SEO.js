// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://ihatecollege.com";

export default function SEO({
  title = "IHateCollege.com | Escape Debt, Build Wealth",
  description = "Real alternatives to college: trade schools, certifications, apprenticeships, and high-income paths that don't require $100k in loans.",
  image = `${SITE_URL}/social-card.png`, // social-card.png in /public
}) {
  const router = useRouter();
  const canonicalUrl =
    SITE_URL + (router.asPath === "/" ? "" : router.asPath);

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicon / Icon */}
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IHateCollege" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
    }
