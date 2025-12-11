// pages/civil-service.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function CivilService() {
  return (
    <Layout>
      <SEO
        title="Gov Jobs & Civil Service Careers | IHateCollege.com"
        description="Federal, state, and city jobs that don't require college degrees. USPS, TSA, Fire, Police, Border Patrol, and more."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">BENEFITS. PENSIONS. SECURITY.</p>

        <h1 className="hero-title">
          Government & Civil Service <span className="text-green-300">Career Paths</span>
        </h1>

        <p className="hero-subtitle max-w-2xl mx-auto">
          These jobs don’t require degrees, pay well, provide benefits, and offer
          insane long-term security. Perfect for stability seekers.
        </p>
      </section>

      {/* GRID */}
      <section className="page-section">
        <div className="path-grid">
          {/* USPS */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">USPS: United States Postal Service</h3>
            <p className="text-slate-300 mb-4">
              Excellent benefits + simple entry process.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1">
              <li>$45k–$75k starting</li>
              <li>Pension + overtime</li>
              <li>No degree required</li>
            </ul>
          </div>

          {/* TSA */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">TSA / Homeland Security</h3>
            <p className="text-slate-300 mb-4">
              Federal benefits + promotion potential.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1">
              <li>$40k–$68k starting</li>
              <li>Strong hiring demand</li>
              <li>Airport-based stability</li>
            </ul>
          </div>

          {/* FIRE */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">Fire & Rescue</h3>
            <p className="text-slate-300 mb-4">
              Physical, meaningful, and VERY well compensated.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1">
              <li>$55k–$95k depending on city</li>
              <li>Massive overtime potential</li>
              <li>Pension + union protection</li>
            </ul>
          </div>

          {/* POLICE */}
          <div className="glow-card p-6">
            <h3 className="text-xl font-bold mb-2">Police & Sheriff Departments</h3>
            <p className="text-slate-300 mb-4">
              High pay + structured promotions.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1">
              <li>$55k–$120k depending on region</li>
              <li>Retirement after 20–25 years</li>
              <li>No college required in most states</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-4">How to apply?</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-6">
          Tell us where you live — we’ll point you to the exact hiring portals
          for your city/state.
        </p>

        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-green-400 text-black font-bold hover:bg-green-300"
        >
          Find Local Openings →
        </a>
      </section>
    </Layout>
  );
}
