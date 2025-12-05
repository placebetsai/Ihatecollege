import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  const fullTitle = title ? `${title} | I Hate College` : "I Hate College";

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        {children}
      </main>
    </>
  );
}
