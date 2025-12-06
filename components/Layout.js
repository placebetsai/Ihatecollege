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
          content="IHateCollege.com shows real alternatives to debt-heavy college paths."
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
