// pages/trade-schools.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function TradeSchools() {
  return (
    <Layout>
      <SEO
        title="Trade Schools Near You | IHateCollege.com"
        description="HVAC, electrical, welding, CDL, plumbing, and more. These careers pay $70k–$150k+ without a degree."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">BUILD A SKILL. BUILD A LIFE.</p>
        <h1 className="hero-title">
          Trade Schools & Apprenticeships{" "}
          <span className="text-orange-400">That Pay Off Fast</span>
        </h1>
        <p className="hero-subtitle max-w-2xl mx-auto">
          Real hands-on jobs that pay insanely well — and don’t require 4 years
          of debt and dorm rooms.
        </p>
      </section>

      {/* GRID */}
      <section className="page-section max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* HVAC */}
          <div className="glow-card p-8">
            <h3 className="text-xl font-bold mb-3">HVAC / Refrigeration</h3>
            <p className="text-slate-300 text-sm mb-6">
              Recession-proof, overtime-heavy, elite job security.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>✓ $70k–$200k+</li>
              <li>✓ Paid apprenticeships</li>
              <li>✓ Install, repair, maintain systems</li>
            </ul>
            <a
              href="https://www.apprenticeship.gov/"
              target="_blank"
              className="text-orange-300 text-sm font-bold hover:underline"
            >
              Find HVAC Apprenticeships →
            </a>
          </div>

          {/* ELECTRICIAN */}
          <div className="glow-card p-8">
            <h3 className="text-xl font-bold mb-3">Electrician</h3>
            <p className="text-slate-300 text-sm mb-6">
              Union protection + high-income early in your career.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>✓ $60k–$140k+</li>
              <li>✓ Strong union benefits</li>
              <li>✓ Upgrade to Master Electrician</li>
            </ul>
            <a
              href="https://www.ibew.org/"
              target="_blank"
              className="text-orange-300 text-sm font-bold hover:underline"
            >
              Electrician Training →
            </a>
          </div>

          {/* WELDING */}
          <div className="glow-card p-8">
            <h3 className="text-xl font-bold mb-3">Welding & Fabrication</h3>
            <p className="text-slate-300 text-sm mb-6">
              High skill = high pay. Endless industry demand.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>✓ $70k–$180k+</li>
              <li>✓ MIG, TIG, Pipe welding</li>
              <li>✓ Travel welders earn top dollar</li>
            </ul>
            <a
              href="https://www.aws.org/certification"
              target="_blank"
              className="text-orange-300 text-sm font-bold hover:underline"
            >
              Welding Certification →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-3">
          Want help choosing the right trade?
        </h2>
        <a
          href="/contact"
          className="px-6 py-3 bg-orange-400 text-black rounded-full font-bold hover:bg-orange-300 transition"
        >
          Ask for guidance →
        </a>
      </section>
    </Layout>
  );
}
