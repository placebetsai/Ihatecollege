// pages/cheat-sheets.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function CheatSheets() {
  return (
    <Layout>
      <SEO
        title="Cheat Sheets – Fast Career Paths (2025)"
        description="Your no-BS breakdowns of the fastest career paths in tech, trades, and sales. 6–18 month transformations."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">NO FLUFF. NO DEBT. JUST REAL OPTIONS.</p>

        <h1 className="hero-title">
          Choose a path. Change your life in{" "}
          <span className="text-yellow-300">6–18 months.</span>
        </h1>

        <p className="hero-subtitle max-w-2xl mx-auto">
          These are the career paths Americans actually use to escape debt,
          build income, and avoid the $80k+ college trap.
        </p>
      </section>

      {/* GRID */}
      <section className="page-section">
        <div className="path-grid">
          {/* IT SUPPORT */}
          <div className="glow-card">
            <div className="flex gap-2 mb-2">
              <span className="tag">3–6 months</span>
              <span className="tag bg-green-900/40 text-green-300">Remote</span>
            </div>

            <h3 className="text-xl font-bold mb-2">IT Support → Sysadmin</h3>
            <p className="text-slate-300 mb-4">
              Fastest way into tech without a degree.
            </p>

            <ul className="list-disc ml-5 space-y-1 text-slate-300 text-sm mb-4">
              <li>Google IT Cert or CompTIA A+</li>
              <li>Start $45k–$65k</li>
              <li>3-year: $80k–$110k+</li>
            </ul>

            <a
              href="https://grow.google/certificates/it-support/"
              target="_blank"
              className="text-cyan-300 font-semibold hover:underline"
            >
              Google IT Support →
            </a>
          </div>

          {/* CYBERSECURITY */}
          <div className="glow-card">
            <div className="flex gap-2 mb-2">
              <span className="tag">6–12 months</span>
              <span className="tag bg-blue-900/40 text-blue-300">
                High Demand
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
            <p className="text-slate-300 mb-4">
              Most secure field in tech — literally.
            </p>

            <ul className="list-disc ml-5 space-y-1 text-slate-300 text-sm mb-4">
              <li>A+ → Net+ → Sec+ → CYSA+</li>
              <li>Start $70k–$95k</li>
              <li>5-year: $120k–$180k+</li>
            </ul>

            <a
              href="https://tryhackme.com"
              target="_blank"
              className="text-cyan-300 font-semibold hover:underline"
            >
              Start on TryHackMe →
            </a>
          </div>

          {/* CLOUD ENGINEERING */}
          <div className="glow-card">
            <div className="flex gap-2 mb-2">
              <span className="tag">6–12 months</span>
              <span className="tag bg-green-900/40 text-green-300">Remote</span>
            </div>

            <h3 className="text-xl font-bold mb-2">Cloud Engineering</h3>
            <p className="text-slate-300 mb-4">
              The highest-paying no-degree path.
            </p>

            <ul className="list-disc ml-5 space-y-1 text-slate-300 text-sm mb-4">
              <li>AWS CCP → SAA → DevOps</li>
              <li>Start $90k–$130k</li>
              <li>3-year: $160k–$250k+</li>
            </ul>

            <a
              href="https://aws.amazon.com/training/"
              target="_blank"
              className="text-cyan-300 font-semibold hover:underline"
            >
              AWS Free Training →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-4">
          Not sure which path fits you?
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto mb-6">
          Tell us your goals and background — we’ll recommend the top 2–3 paths
          that match you best.
        </p>

        <a
          href="/contact"
          className="px-6 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          Ask us which path is best →
        </a>
      </section>
    </Layout>
  );
}
