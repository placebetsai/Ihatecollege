import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";

const links = [
  ["No Degree Jobs", "/no-degree-jobs"],
  ["Highest Paying Jobs No Degree", "/blog/highest-paying-jobs-no-degree-required-2026"],
  ["Six Figure Jobs Without College", "/blog/six-figure-jobs-without-college-degree"],
  ["Remote Jobs No Degree", "/blog/remote-jobs-no-degree-2026"],
  ["Trade School Jobs", "/trade-school-jobs"],
  ["Apprenticeships", "/apprenticeships"],
];

export default function JobsWithoutCollegePage() {
  return (
    <Layout>
      <SEO
        title="Jobs Without College: No-Degree Careers That Pay | IHateCollege.com"
        description="Jobs without college hub covering no-degree careers, trade jobs, apprenticeships, remote jobs, civil service jobs, and alternatives to college debt."
      />
      <main className="max-w-5xl mx-auto px-4 py-14">
        <p className="text-red-500 text-xs font-black tracking-[0.22em] uppercase mb-4">No-Degree Careers</p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Jobs Without College</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-8">
          A direct landing page for people searching for jobs without college: trades,
          apprenticeships, certifications, remote work, civil service, and high-paying no-degree roles.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map(([title, href]) => (
            <Link key={href} href={href} className="block rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-red-500 transition">
              <h2 className="text-white font-black text-lg mb-2">{title}</h2>
              <p className="text-slate-500 text-sm">Open the focused IHateCollege guide.</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
