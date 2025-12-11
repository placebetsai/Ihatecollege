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

      {/* HERO CARD SECTION */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          {/* Left: main hero card */}
          <div className="bg-slate-950/90 border border-slate-800/80 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] tracking-[0.25em] uppercase text-slate-400 mb-4">
              YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              College is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                optional.
              </span>{" "}
              Debt isn&apos;t.
            </h1>

            <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6 leading-relaxed">
              Before you sign away $50k–$150k, compare trades, tech careers,
              apprenticeships, and real alternatives. Run the numbers. Hear
              from real people. Then decide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/alternatives"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-semibold text-sm shadow-lg shadow-orange-500/30 hover:brightness-110 transition"
              >
                Explore alternatives
              </Link>
              <Link
                href="/debt-calculator"
                className="inline-flex justify-center items-center px-6 py-3 rounded-full border border-slate-600 text-slate-100 text-sm font-semibold hover:bg-slate-900/70 transition"
              >
                See what your degree really costs
              </Link>
            </div>

            {/* quick bullets */}
            <div className="space-y-1.5 text-xs md:text-sm text-slate-400">
              <p>
                <span className="font-semibold text-slate-200">
                  Avg 4-year total cost:
                </span>{" "}
                $100k+ with living costs
              </p>
              <p>
                <span className="font-semibold text-slate-200">
                  Time in class:
                </span>{" "}
                4+ years
              </p>
              <p>
                <span className="font-semibold text-slate-200">
                  Typical trade/cert path:
                </span>{" "}
                6–24 months
              </p>
              <p>
                <span className="font-semibold text-slate-200">
                  Working while you train?
                </span>{" "}
                Often yes (apprenticeships).
              </p>
            </div>
          </div>

          {/* Right: small stat cards on desktop, stacked on mobile */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-2">
                What they don&apos;t tell you
              </p>
              <p className="text-sm text-slate-300">
                Tuition is up{" "}
                <span className="font-semibold text-yellow-400">180%</span> in 20
                years. Wages? Basically flat.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-lg font-bold text-white">$37k+</div>
                <div className="text-[11px] uppercase text-slate-500 mt-1">
                  Avg student debt
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-lg font-bold text-cyan-400">6–24 mo</div>
                <div className="text-[11px] uppercase text-slate-500 mt-1">
                  Typical cert / trade path
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-xs text-slate-400 mb-1 uppercase tracking-[0.2em]">
                Real options
              </p>
              <p className="text-sm text-slate-300">
                Tech, trades, sales, civil service. Paths people actually use to
                make real money without a traditional degree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WIZARD SECTION */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Should you go to college?
            </h2>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Take the 30-second logic check. No email required.
            </p>
          </div>
          <DecisionWizard />
        </div>
      </section>

      {/* HIGH INCOME PATHS */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            High-income paths that DON&apos;T require a degree
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tech */}
            <div className="group relative p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-white mb-2">Tech &amp; Cyber</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                Cloud, cybersecurity, IT support. Remote-friendly, high demand.
                Stack certs instead of debt.
              </p>
              <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                <li>• Google IT / Cyber Career Certificates</li>
                <li>• CompTIA A+, Network+, Security+</li>
                <li>• AWS / Azure cloud certs</li>
              </ul>
              <Link
                href="/cheat-sheets"
                className="text-cyan-400 text-xs font-semibold hover:underline"
              >
                View tech cheat sheet →
              </Link>
            </div>

            {/* Trades */}
            <div className="group relative p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-orange-500/60 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-white mb-2">Skilled trades</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                HVAC, electrician, welding, CDL. Paid apprenticeships mean you
                earn while you learn.
              </p>
              <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                <li>• Paid apprenticeships &amp; unions</li>
                <li>• Overtime &amp; recession-resistant</li>
                <li>• Real income in 1–2 years</li>
              </ul>
              <Link
                href="/trade-schools"
                className="text-orange-400 text-xs font-semibold hover:underline"
              >
                Trade school breakdown →
              </Link>
            </div>

            {/* Civil Service */}
            <div className="group relative p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-green-500/60 transition-all hover:-translate-y-1">
              <h3 className="text-lg font-bold text-white mb-2">
                Gov &amp; civil service
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                Federal, state, and city jobs. Many don&apos;t require degrees—just
                exams and persistence.
              </p>
              <ul className="space-y-1.5 mb-4 text-xs text-slate-300">
                <li>• USPS, logistics, corrections</li>
                <li>• Fire, police, EMS</li>
                <li>• TSA, CBP, other agencies</li>
              </ul>
              <Link
                href="/civil-service"
                className="text-green-400 text-xs font-semibold hover:underline"
              >
                Civil service guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Choose your path instead of your debt
          </h2>
          <p className="text-slate-400 mb-6 text-sm md:text-base">
            You don&apos;t need a $100k dorm and random electives to make real money.
            Pick a path and start building skills that actually pay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/trade-schools"
              className="border border-slate-600 px-6 py-2 rounded-full hover:bg-slate-900 text-sm"
            >
              Trades path
            </Link>
            <Link
              href="/alternatives"
              className="border border-slate-600 px-6 py-2 rounded-full hover:bg-slate-900 text-sm"
            >
              Tech &amp; certs
            </Link>
            <Link
              href="/contact"
              className="border border-slate-600 px-6 py-2 rounded-full hover:bg-slate-900 text-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
              }
