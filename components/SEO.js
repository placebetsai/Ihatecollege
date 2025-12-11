// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://ihatecollege.com";

export default function SEO({
  title = "IHateCollege.com | Escape Debt, Build Wealth",
  description = "Real alternatives to college: trades, tech, apprenticeships, and real high-income paths with no debt.",
  image = `${SITE_URL}/social-card.png`,
}) {
  const router = useRouter();
  const canonical = `${SITE_URL}${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      {/* OG / Twitter */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
