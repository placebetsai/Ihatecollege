// components/Layout.js
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({
  title,
  description,
  children,
}) {
  const pageTitle = title
    ? `${title} | IHateCollege.com`
    : "IHateCollege.com – No-BS college reality check";

  const pageDescription =
    description ||
    "Skip the $200k degree trap. Real alternatives, debt calculators, trade paths, and student stories so you actually get a life, not just loans.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <Navbar />

        <main className="page-main">
          <div className="page-content">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="site-footer-inner">
            <span>© {new Date().getFullYear()} IHateCollege.com</span>
            <span className="footer-tagline">
              No brochure fluff. Just reality.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
