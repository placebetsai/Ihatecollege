// components/Layout.js
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  const pageTitle = title
    ? `${title} | IHateCollege.com`
    : "IHateCollege.com – No-BS college reality check";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="IHateCollege.com – Real talk on college, debt, trade paths, tech certs, bootcamps, and high-income alternatives so you don’t sign your life away."
        />
      </Head>

      <div className="page-wrapper">
        <Navbar />
        <main className="page-main">{children}</main>

        <footer className="site-footer">
          <p>© 2025 IHateCollege.com — No brochure fluff. Just reality.</p>
        </footer>
      </div>
    </>
  );
}
