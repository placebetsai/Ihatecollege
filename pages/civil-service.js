// pages/civil-service.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function CivilService() {
  return (
    <Layout>
      <SEO
        title="Government & Civil Service Jobs (No Degree Needed)"
        description="Federal, state, and city careers that pay well, offer pensions, and often require no degree."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">PENSION. BENEFITS. STABILITY.</p>
        <h1 className="hero-title">
          Government & Civil Service Jobs{" "}
          <span className="text-green-400">You Can Get Without a Degree</span>
        </h1>
        <p className="hero-subtitle max-w-2xl mx-auto">
          These paths offer stability, upward mobility, and benefits colleges
          never mention — with ZERO student debt.
        </p>
      </section>

      {/* GRID */}
      <section className="page-section">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

          {/* USPS */}
          <div className="glow-card p-8">
            <h3 className="text-xl font-bold mb-3">USPS Mail Carrier / Clerk</h3>
            <p className="text-slate-300 text-sm mb-4">
              Federal benefits, overtime potential, and internal promotions.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>✓ Pay: $55k–$80k</li>
              <li>✓ No degree required</li>
              <li>✓ Pension + job security</li>
            </ul>
            <a
              href="https://about.usps.com/careers/"
              target="_blank"
              className="text-green-300 font-bold hover:underline text-sm"
            >
              Apply at USPS →
            </a>
          </div>

          {/* TSA */}
          <div className="glow-card p-8">
            <h3 className="text-xl font-bold mb-3">TSA Officer</h3>
            <p className="text-slate-300 text-sm mb-4">
              Airport security roles with federal benefits and promotions.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>✓ Pay: $45k–$85k+</li>
              <li>✓ No degree required</li>
              <li>✓ Strong career ladder</li>
            </ul>
            <a
              href="https://jobs.tsa.gov/"
              target="_blank"
              className="text-green-300 font-bold hover:underline text-sm"
            >
              TSA Careers →
            </a>
          </div>

          {/* FIREFIGHTER */}
          <div className="glow-card p-8">
            <h3 className="text-xl font-bold mb-3">Firefighter</h3>
            <p className="text-slate-300 text-sm mb-4">
              High pay, strong community, and unmatched schedule flexibility.
            </p>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>✓ Pay: $60k–$140k</li>
              <li>✓ Pension (20–25 years)</li>
              <li>✓ Paid academy training</li>
            </ul>
            <a
              href="https://www.usfa.fema.gov/"
              target="_blank"
              className="text-green-300 font-bold hover:underline text-sm"
            >
              Fire Service Careers →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-3">Want federal job guidance?</h2>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-green-400 text-black font-bold hover:bg-green-300 transition"
        >
          Ask us which job fits you →
        </a>
      </section>
    </Layout>
  );
                }
