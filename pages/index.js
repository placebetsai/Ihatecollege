// pages/index.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import DecisionWizard from "../components/DecisionWizard";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="College is Optional. Debt is Not. | IHateCollege.com"
        description="Skip the debt trap. Compare trades, tech certs, apprenticeships, and high-income paths that actually pay."
      />

      {/* HERO */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="inline-block mb-6 px-4 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-300 text-xs md:text-sm font-bold tracking-wide uppercase">
            You don't have to sign your life away
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            College is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Optional.
            </span>
            <br />
            Debt is <span className="text-red-500">Not.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Before you borrow $50k–$150k, run the numbers. Compare trades, tech
            careers, apprenticeships, and real alternatives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/alternatives"
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              Explore Alternatives
            </Link>
            <Link
              href="/debt-calculator"
              className="px-8 py-4 border border-slate-600 text-white font-bold rounded-full hover:bg-slate-800 transition-colors"
            >
              See the Real Cost
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-slate-800 pt-8">
            <div><div className="text-2xl font-bold text-white">$37k+</div><div className="text-xs text-slate-500 uppercase">Avg Student Debt</div></div>
            <div><div className="text-2xl font-bold text-white">4 Years</div><div className="text-xs text-slate-500 uppercase">Time in Class</div></div>
            <div><div className="text-2xl font-bold text-cyan-400">6–12 Mos</div><div className="text-xs text-slate-500 uppercase">Typical Cert Path</div></div>
            <div><div className="text-2xl font-bold text-green-400">Paid</div><div className="text-xs text-slate-500 uppercase">Apprenticeships</div></div>
          </div>
        </div>
      </section>

      {/* WIZARD */}
      <section className="py-16 bg-slate-950/70 border-y border-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Should you go to college?</h2>
            <p className="text-slate-400 mt-2">Take the 30-second logic check. No email required.</p>
          </div>
          <DecisionWizard />
        </div>
      </section>

      {/* GLOW CARDS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            High-Income Paths (No Degree)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech */}
            <div className="glow-card p-8">
              <h3 className="text-xl font-bold text-white mb-3">Tech & Cyber</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Cloud, cybersecurity, IT support. Remote-friendly, high demand. Stack certs instead of debt.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ Google IT / Cyber</li>
                <li>✓ CompTIA A+ / Security+</li>
                <li>✓ AWS / Azure Cloud</li>
              </ul>
              <Link href="/cheat-sheets" className="text-cyan-300 font-bold text-sm hover:underline">
                View Tech Cheat Sheet →
              </Link>
            </div>

            {/* Trades */}
            <div className="glow-card p-8">
              <h3 className="text-xl font-bold text-white mb-3">Skilled Trades</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                HVAC, electrician, welding, CDL. Paid apprenticeships mean you earn while you learn.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ Paid Apprenticeships</li>
                <li>✓ Union Protection</li>
                <li>✓ Overtime Potential</li>
              </ul>
              <Link href="/trade-schools" className="text-orange-300 font-bold text-sm hover:underline">
                Trade School Breakdown →
              </Link>
            </div>

            {/* Civil Service */}
            <div className="glow-card p-8">
              <h3 className="text-xl font-bold text-white mb-3">Gov & Civil Service</h3>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                Federal, state, and city jobs. Many don’t require degrees, just exams. Pensions + benefits.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ USPS & Logistics</li>
                <li>✓ Fire & Police</li>
                <li>✓ TSA / Border Control</li>
              </ul>
              <Link href="/civil-service" className="text-green-300 font-bold text-sm hover:underline">
                Civil Service Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
            }
