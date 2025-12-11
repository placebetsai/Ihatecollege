
// components/Layout.js
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
        <meta
          name="description"
          content="IHateCollege.com shows the real math on student debt, and real paths like trades, tech certs, apprenticeships, and civil service so you don't sign your life away for a useless degree."
        />
      </Head>

      <div className="site-root">
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
