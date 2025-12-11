// pages/cheat-sheets.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";

export default function CheatSheets() {
  return (
    <Layout>
      <SEO
        title="Cheat Sheets – Real Career Paths (2025) | IHateCollege.com"
        description="Step-by-step cheat sheets for IT, cyber, cloud, trades, CDL, and sales paths that actually pay in 6–18 months without a degree."
      />

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* HERO */}
        <section className="mt-8 md:mt-12 mb-10">
          <div className="glow-card text-center md:text-left">
            <p className="eyebrow">
              NO FLUFF. NO DEGREE. JUST REAL OPTIONS.
            </p>
            <h1 className="hero-title text-3xl md:text-4xl lg:text-[2.5rem] mb-3">
              Choose a path. Change your life in 6–18 months.
            </h1>
            <p className="hero-subtitle">
              These are the careers people actually use to escape debt, make
              real income, and beat the college-industrial machine. No
              brochures. No loans. Just reality.
            </p>
          </div>
        </section>

        {/* GRID OF PATHS */}
        <section className="section">
          <div className="path-grid">
            {/* IT SUPPORT */}
            <div className="path-card">
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-slate-800/70 border border-slate-600">
                  3–6 months
                </span>
                <span className="px-2 py-1 rounded-full bg-emerald-900/40 border border-emerald-400/60 text-emerald-200">
                  Remote-friendly
                </span>
              </div>
              <h3>IT Support → Help Desk → Sysadmin</h3>
              <p className="mt-1 text-slate-300 text-sm">
                Fastest way into tech without a degree.
              </p>
              <ul>
                <li>Study path: Google IT Cert or CompTIA A+</li>
                <li>Starting pay: $45k–$65k</li>
                <li>3-year earnings: $80k–$110k+</li>
                <li>Compared to college: start earning 3–4 years sooner</li>
              </ul>
              <Link
                href="https://grow.google/certificates/it-support/"
                target="_blank"
                rel="noreferrer"
                className="path-link text-sm"
              >
                Google IT Support Certificate →
              </Link>
            </div>

            {/* CYBERSECURITY */}
            <div className="path-card">
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-slate-800/70 border border-slate-600">
                  6–12 months
                </span>
                <span className="px-2 py-1 rounded-full bg-sky-900/40 border border-sky-400/60 text-sky-200">
                  High demand
                </span>
              </div>
              <h3>Cybersecurity (Blue Team)</h3>
              <p className="mt-1 text-slate-300 text-sm">
                One of the most secure careers in tech — literally.
              </p>
              <ul>
                <li>Study path: A+ → Net+ → Sec+ → CYSA+</li>
                <li>Starting pay: $70k–$95k</li>
                <li>3–5 years: $120k–$180k+</li>
                <li>Reality: requires consistent studying, not “genius”</li>
              </ul>
              <Link
                href="https://tryhackme.com"
                target="_blank"
                rel="noreferrer"
                className="path-link text-sm"
              >
                Start on TryHackMe →
              </Link>
            </div>

            {/* CLOUD ENGINEERING */}
            <div className="path-card">
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-slate-800/70 border border-slate-600">
                  6–12 months
                </span>
                <span className="px-2 py-1 rounded-full bg-emerald-900/40 border border-emerald-400/60 text-emerald-200">
                  Remote
                </span>
              </div>
              <h3>Cloud Engineering (AWS / Azure)</h3>
              <p className="mt-1 text-slate-300 text-sm">
                One of the highest-earning no-degree paths in the US.
              </p>
              <ul>
                <li>AWS cert path: CCP → SAA → DevOps</li>
                <li>Starting pay: $90k–$130k</li>
                <li>3-year range: $160k–$250k+</li>
                <li>Biggest hiring wave happening 2025–2027</li>
              </ul>
              <Link
                href="https://aws.amazon.com/training/"
                target="_blank"
                rel="noreferrer"
                className="path-link text-sm"
              >
                AWS Free Training →
              </Link>
            </div>

            {/* HVAC */}
            <div className="path-card">
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-slate-800/70 border border-slate-600">
                  6–18 months
                </span>
                <span className="px-2 py-1 rounded-full bg-orange-900/40 border border-orange-400/60 text-orange-100">
                  Hands-on
                </span>
              </div>
              <h3>HVAC / Refrigeration</h3>
              <p className="mt-1 text-slate-300 text-sm">
                Recession-proof. Always needed. Overtime king.
              </p>
              <ul>
                <li>Training: trade school or paid apprenticeship</li>
                <li>Year 1–2 income: $70k–$110k</li>
                <li>Year 5+: $130k–$200k+ (own truck = print money)</li>
                <li>Compared to college: lower cost × higher demand</li>
              </ul>
            </div>

            {/* CDL TRUCKING */}
            <div className="path-card">
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-slate-800/70 border border-slate-600">
                  3–8 weeks
                </span>
                <span className="px-2 py-1 rounded-full bg-orange-900/40 border border-orange-400/60 text-orange-100">
                  High income fast
                </span>
              </div>
              <h3>CDL Trucking</h3>
              <p className="mt-1 text-slate-300 text-sm">
                No-degree path with one of the fastest earning ramps.
              </p>
              <ul>
                <li>CDL school: many companies pay for it</li>
                <li>Local routes: $70k–$100k first year</li>
                <li>OTR / owner-op: $120k–$250k+</li>
                <li>Reality: tough lifestyle, massive paycheck</li>
              </ul>
            </div>

            {/* SALES */}
            <div className="path-card">
              <div className="flex flex-wrap gap-2 mb-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-slate-800/70 border border-slate-600">
                  1–4 months
                </span>
                <span className="px-2 py-1 rounded-full bg-yellow-900/40 border border-yellow-400/60 text-yellow-100">
                  Unlimited income
                </span>
              </div>
              <h3>Real Estate / Insurance / High-Ticket Sales</h3>
              <p className="mt-1 text-slate-300 text-sm">
                Low barrier. High upside. Most people quit way too early.
              </p>
              <ul>
                <li>Licensing: 1–8 weeks depending on state</li>
                <li>Year 1: $50k–$150k (huge range)</li>
                <li>Year 3+: $200k–$500k+</li>
                <li>Reality: 90% quit in 18 months; top 10% run the market</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section text-center">
          <h2 className="section-title">
            Not sure which path fits you?
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-slate-400 mb-4">
            Tell us your age, location, and what you actually want in life — and
            we’ll point you toward the top 2–3 paths that fit.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full border border-cyan-400/70 bg-slate-900/70 text-sm font-semibold hover:bg-slate-800"
            >
              Ask us which path is best
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
              }
