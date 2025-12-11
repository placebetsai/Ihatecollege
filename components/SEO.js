// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://ihatecollege.com";

export default function SEO({
  title = "IHateCollege.com | Escape Debt, Build Wealth",
  description = "Real alternatives to college: trade schools, certifications, apprenticeships, and high-income paths with no debt.",
  image = `${SITE_URL}/social-card.png`, // uses your social-card.png
}) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${
    router.asPath === "/" ? "" : router.asPath
  }`;

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Favicons */}
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IHateCollege.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
