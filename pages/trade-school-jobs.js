import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";

const trades = [
  ["Electrician Salary", "/blog/electrician-salary-2026"],
  ["HVAC Technician Salary", "/blog/hvac-technician-salary-2026"],
  ["Plumber Apprenticeship", "/blog/plumber-apprenticeship-how-to-start"],
  ["Welder Without College", "/blog/how-to-become-a-welder-without-college"],
  ["CDL Truck Driver Salary", "/blog/cdl-truck-driver-salary-2026"],
  ["Highest Paying Trades", "/blog/highest-paying-trade-jobs-2026"],
];

export default function TradeSchoolJobsPage() {
  return (
    <Layout>
      <SEO
        title="Trade School Jobs: Salaries, Apprenticeships & No-Degree Careers"
        description="Trade school jobs hub covering electrician, HVAC, plumbing, welding, CDL, lineman, apprenticeships, and skilled trades careers without college debt."
      />
      <main className="max-w-5xl mx-auto px-4 py-14">
        <p className="text-emerald-400 text-xs font-black tracking-[0.22em] uppercase mb-4">Skilled Trades</p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Trade School Jobs</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-8">
          A dedicated landing page for trade school jobs, skilled trade salaries, apprenticeships,
          and career paths that compete with or beat many four-year degrees.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {trades.map(([title, href]) => (
            <Link key={href} href={href} className="block rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-emerald-400 transition">
              <h2 className="text-white font-black text-lg mb-2">{title}</h2>
              <p className="text-slate-500 text-sm">Salary and path guide.</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
