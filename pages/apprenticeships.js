import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";

const links = [
  ["Apprenticeship Programs Near Me", "/blog/apprenticeship-programs-near-me-2026"],
  ["Electrician Apprenticeship", "/blog/how-to-become-an-electrician-without-college"],
  ["Plumber Apprenticeship", "/blog/plumber-apprenticeship-how-to-start"],
  ["IBEW Apprenticeship", "/blog/ibew-apprenticeship-how-to-join"],
  ["Ironworker Apprenticeship", "/blog/ironworker-apprenticeship"],
  ["Sprinkler Fitter Apprenticeship", "/blog/sprinkler-fitter-apprenticeship"],
];

export default function ApprenticeshipsPage() {
  return (
    <Layout>
      <SEO
        title="Apprenticeships: Paid Training Without College Debt | IHateCollege.com"
        description="Apprenticeships hub for paid training, union trades, electrician apprenticeships, plumbing apprenticeships, IBEW, ironworker paths, and jobs without college."
      />
      <main className="max-w-5xl mx-auto px-4 py-14">
        <p className="text-emerald-400 text-xs font-black tracking-[0.22em] uppercase mb-4">Paid Training</p>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Apprenticeships</h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-8">
          Apprenticeships are one of the cleanest alternatives to college: paid training, real work,
          credentials, and a path into trades without taking on four-year degree debt.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {links.map(([title, href]) => (
            <Link key={href} href={href} className="block rounded-xl border border-slate-800 bg-slate-950 p-5 hover:border-emerald-400 transition">
              <h2 className="text-white font-black text-lg mb-2">{title}</h2>
              <p className="text-slate-500 text-sm">Open the focused apprenticeship guide.</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
