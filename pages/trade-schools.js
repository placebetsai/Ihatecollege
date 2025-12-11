// pages/trade-schools.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function TradeSchools() {
  return (
    <Layout>
      <SEO
        title="Trade Schools & Apprenticeships | IHateCollege.com"
        description="Electrician, HVAC, welding, lineman, and CDL — real career paths with paid apprenticeships and no debt."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">EARN WHILE YOU LEARN</p>

        <h1 className="hero-title">
          Trade Schools & <span className="text-orange-300">Paid Apprenticeships</span>
        </h1>

        <p className="hero-subtitle max-w-2xl mx-auto">
          Trades will never die. They pay well, hire fast, and don’t require $80k
          loans. You learn a skill — they pay you for it.
        </p>
      </section>

      {/* GRID */}
      <section className="page-section">
        <div className="path-grid">
          {/* HVAC */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">HVAC / Refrigeration</h3>
            <p className="text-slate-300 mb-4">
              Year-round demand. Overtime king.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-4">
              <li>$70k–$110k by year 2</li>
              <li>Paid apprenticeships available</li>
              <li>Commercial HVAC = big money</li>
            </ul>
          </div>

          {/* ELECTRICIAN */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">Electrician</h3>
            <p className="text-slate-300 mb-4">
              One of the highest-paying blue-collar fields.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-4">
              <li>Union + non-union options</li>
              <li>$80k–$140k with OT</li>
              <li>Low schooling cost</li>
            </ul>
          </div>

          {/* WELDING */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">Welding / Fabrication</h3>
            <p className="text-slate-300 mb-4">
              The pay depends on your specialty — underwater = crazy money.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-4">
              <li>Structural / pipeline</li>
              <li>$50k–$120k depending on region</li>
              <li>Short training timeline</li>
            </ul>
          </div>

          {/* CDL */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">CDL Trucking</h3>
            <p className="text-slate-300 mb-4">
              Fastest path to high income with no degree.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-4">
              <li>Many schools cost $0 (company-paid)</li>
              <li>$70k–$100k first year</li>
              <li>Owner-operator: $150k–$250k+</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-3">
          Want personalized recommendations?
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-6">
          Tell us your age, city, and goals — we’ll match you to real schools or
          apprenticeships you can start now.
        </p>

        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-orange-400 text-black font-bold hover:bg-orange-300"
        >
          Find Your Best Path →
        </a>
      </section>
    </Layout>
  );
        }
