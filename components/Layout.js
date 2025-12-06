// components/Layout.js
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  const pageTitle = title
    ? `${title} | IHateCollege.com`
    : "IHateCollege.com – Real alternatives to the 4-year trap";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Ihatecollege.com – Real talk about college, debt, trades, certs, and other paths so you don't sign your life away for a useless degree."
        />
      </Head>

      <div className="page-wrapper">
        <header className="site-header">
          <Navbar />
        </header>

        <main className="page-main">{children}</main>
      </div>
    </>
  );
}
