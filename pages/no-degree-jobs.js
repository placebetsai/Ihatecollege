import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";

const links = [
  ["Highest Paying Jobs No Degree", "/blog/highest-paying-jobs-no-degree-required-2026"],
  ["Remote Jobs No Degree", "/blog/remote-jobs-no-degree-2026"],
  ["Six Figure Jobs Without College", "/blog/six-figure-jobs-without-college-degree"],
  ["Entry Level Jobs That Pay Well", "/blog/entry-level-jobs-that-pay-well-2026"],
  ["Civil Service Jobs No Degree", "/blog/civil-service-jobs-no-degree-required"],
  ["Federal Jobs No Degree", "/blog/federal-government-jobs-no-degree-required"],
  ["Trade School Alternatives", "/alternatives"],
  ["No-Degree Job Board", "/job-board"],
];

export default function NoDegreeJobsPage() {
  return (
    <Layout>
      <SEO
        title="No Degree Jobs: High-Paying Careers Without College | IHateCollege.com"
        description="No degree jobs hub for high-paying careers, trades, remote jobs, civil service paths, certifications, and apprenticeships that do not require college."
      />
      <main className="max-w-5xl mx-auto px-4 py-14">
        <p className="text-red-500 text-xs font-black tracking-[0.22em] uppercase mb-4">Career Hub</p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-5">No Degree Jobs</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-8">
          A crawlable hub for people searching for jobs without college: trades, certifications,
          remote jobs, civil service work, apprenticeships, and six-figure no-degree paths.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map(([title, href]) => (
            <Link key={href} href={href} className="block rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-red-500 transition">
              <h2 className="text-white font-black text-lg mb-2">{title}</h2>
              <p className="text-slate-500 text-sm">Open the focused IHateCollege.com guide.</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
