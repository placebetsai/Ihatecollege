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
        description="The brutal truth about student debt and the high-income alternatives they don't teach you in high school. Trade schools, tech certs, and sales careers."
      />

      {/* HERO SECTION */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="inline-block mb-6 px-4 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs md:text-sm font-bold tracking-wide uppercase">
            You don&apos;t have to sign your life away
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            College is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Optional.
            </span>
            <br />
            Debt is <span className="text-red-500">Not.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Before you sign for $50k–$150k in loans, run the numbers. Compare
            trades, tech careers, apprenticeships, and real alternatives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/alternatives"
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
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

          {/* HERO STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-slate-800 pt-8">
            <div className="p-4">
              <div className="text-2xl font-bold text-white">$37k+</div>
              <div className="text-xs text-slate-500 uppercase">
                Avg Student Debt
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-white">4 Years</div>
              <div className="text-xs text-slate-500 uppercase">
                Time in Class
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-cyan-400">6 Mos</div>
              <div className="text-xs text-slate-500 uppercase">
                Typical Cert Path
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-green-400">Paid</div>
              <div className="text-xs text-slate-500 uppercase">
                Apprenticeships
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIZARD SECTION */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Should you go to college?
            </h2>
            <p className="text-slate-400 mt-2">
              Take the 30-second logic check. No email required.
            </p>
          </div>
          <DecisionWizard />
        </div>
      </section>

      {/* HIGH INCOME PATHS */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            High-Income Paths (No Degree)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech */}
            <div className="card-glow group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-24 h-24 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H9v-2h6v2zm-3-7l-2.5-2.5L12 6l2.5 2.5L12 11z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Tech &amp; Cyber
              </h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Cloud, cybersecurity, IT support. Remote-friendly, high demand.
                You can stack certs instead of debt.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ Google IT Support / Cyber</li>
                <li>✓ CompTIA A+ / Security+</li>
                <li>✓ AWS / Azure Cloud</li>
              </ul>
              <Link
                href="/cheat-sheets"
                className="text-cyan-400 font-bold text-sm hover:underline"
              >
                View Tech Cheat Sheet →
              </Link>
            </div>

            {/* Trades */}
            <div className="card-glow group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-24 h-24 text-orange-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Skilled Trades
              </h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                HVAC, electrician, welding, CDL. Paid apprenticeships means you
                earn while you learn. Recession resistant.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ Paid Apprenticeships</li>
                <li>✓ Union Protection</li>
                <li>✓ Overtime Potential</li>
              </ul>
              <Link
                href="/trade-schools"
                className="text-orange-400 font-bold text-sm hover:underline"
              >
                Trade School Breakdown →
              </Link>
            </div>

            {/* Civil Service */}
            <div className="card-glow group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-green-500/50 transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg
                  className="w-24 h-24 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Gov &amp; Civil Service
              </h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                Federal, state, and city jobs. Many don&apos;t require degrees,
                just exams. Pensions + benefits.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ USPS &amp; Logistics</li>
                <li>✓ Fire &amp; Police</li>
                <li>✓ TSA / Border Control</li>
              </ul>
              <Link
                href="/civil-service"
                className="text-green-400 font-bold text-sm hover:underline"
              >
                Civil Service Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose your path
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            You don&apos;t need a $100k campus and a dorm to make real money.
            Pick a path and start building skills that actually pay.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/trade-schools"
              className="border border-slate-600 px-6 py-2 rounded-full hover:bg-slate-800"
            >
              Trades path
            </Link>
            <Link
              href="/alternatives"
              className="border border-slate-600 px-6 py-2 rounded-full hover:bg-slate-800"
            >
              Tech &amp; certs
            </Link>
            <Link
              href="/contact"
              className="border border-slate-600 px-6 py-2 rounded-full hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
                }
