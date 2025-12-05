// components/Layout.js
import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ title, description, children }) {
  const pageTitle = title
    ? `${title} | I Hate College`
    : 'I Hate College | No brochure fluff. Just reality.';

  const metaDescription =
    description ||
    'Real talk about college, debt, alternatives, trades, certs, and how not to drown in loans.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
        <NavBar />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-6 md:pt-10">
          {children}
        </main>
        <footer className="border-t border-slate-800 bg-slate-950/90">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6">
            <span>© {new Date().getFullYear()} ihatecollege.com</span>
            <span className="text-[11px]">
              Not financial advice. Just options nobody told you about.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
