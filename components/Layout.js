import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  const pageTitle = title
    ? `${title} | IHateCollege.com`
    : "IHateCollege.com — Real alternatives to college";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Skip the debt. Explore high-income careers, trades, tech certifications, apprenticeships, government jobs, and real alternatives to college." />
      </Head>

      <Navbar />

      <main className="page-container">{children}</main>

      <Footer />
    </>
  );
}
