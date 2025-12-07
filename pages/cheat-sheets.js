import Layout from "../components/Layout";

export default function CheatSheets() {
  return (
    <Layout title="Cheat Sheets – Real Career Paths (2025)">
      {/* HERO SECTION */}
      <section className="hero">
        <p className="eyebrow">NO FLUFF. NO DEGREE. JUST REAL OPTIONS.</p>
        <h1 className="hero-title">Choose a path. Change your life in 6–18 months.</h1>
        <p className="hero-subtitle" style={{ maxWidth: "640px" }}>
          These are the careers Americans actually use to escape debt, make real income, 
          and beat the college-industrial machine. No brochures. No loans. Just reality.
        </p>
      </section>

      {/* GRID */}
      <section className="section">
        <div className="path-grid">

          {/* IT SUPPORT */}
          <div className="path-card">
            <div className="tag-row">
              <span className="tag">3–6 months</span>
              <span className="tag tag-green">Remote-friendly</span>
            </div>
            <h3>IT Support → Help Desk → Sysadmin</h3>
            <p>Fastest way into tech without a degree.</p>
            <ul>
              <li>Study path: Google IT Cert or CompTIA A+</li>
              <li>Starting pay: $45k–$65k</li>
              <li>3-year earnings: $80k–$110k+</li>
              <li>Compared to college: Start earning **3–4 years sooner**</li>
            </ul>
            <a href="https://grow.google/certificates/it-support/" target="_blank" className="path-link">
              Google IT Support Certificate →
            </a>
          </div>

          {/* CYBERSECURITY */}
          <div className="path-card">
            <div className="tag-row">
              <span className="tag">6–12 months</span>
              <span className="tag tag-blue">High demand</span>
            </div>
            <h3>Cybersecurity (Blue Team)</h3>
            <p>Most secure career in tech — literally.</p>
            <ul>
              <li>Study path: A+ → Net+ → Sec+ → CYSA+</li>
              <li>Starting pay: $70k–$95k</li>
              <li>3–5 years: $120k–$180k+</li>
              <li>Reality: Requires consistent studying, not talent</li>
            </ul>
            <a href="https://tryhackme.com" target="_blank" className="path-link">
              Start on TryHackMe →
            </a>
          </div>

          {/* CLOUD ENGINEERING */}
          <div className="path-card">
            <div className="tag-row">
              <span className="tag">6–12 months</span>
              <span className="tag tag-green">Remote</span>
            </div>
            <h3>Cloud Engineering (AWS/Azure)</h3>
            <p>Highest earning no-degree path in America.</p>
            <ul>
              <li>AWS Cert path: CCP → SAA → DevOps</li>
              <li>Starting pay: $90k–$130k</li>
              <li>3-year range: $160k–$250k+</li>
              <li>Biggest hiring wave happening 2025–2027</li>
            </ul>
            <a href="https://aws.amazon.com/training/" target="_blank" className="path-link">
              AWS Free Training →
            </a>
          </div>

          {/* HVAC */}
          <div className="path-card">
            <div className="tag-row">
              <span className="tag">6–18 months</span>
              <span className="tag tag-orange">Hands-on</span>
            </div>
            <h3>HVAC / Refrigeration</h3>
            <p>Recession-proof. Always needed. Overtime king.</p>
            <ul>
              <li>Training: Trade school or paid apprenticeship</li>
              <li>Year 1–2 income: $70k–$110k</li>
              <li>Year 5+: $130k–$200k+ (own truck = print money)</li>
              <li>Compared to college: Lower cost x Higher demand</li>
            </ul>
          </div>

          {/* CDL TRUCKING */}
          <div className="path-card">
            <div className="tag-row">
              <span className="tag">3–8 weeks</span>
              <span className="tag tag-orange">High income fast</span>
            </div>
            <h3>CDL Trucking</h3>
            <p>No-degree path with the fastest earning ramp.</p>
            <ul>
              <li>CDL school: Many companies pay for it</li>
              <li>Local routes: $70k–$100k first year</li>
              <li>OTR/Owner-op: $120k–$250k+</li>
              <li>Reality: Tough lifestyle, massive paycheck</li>
            </ul>
          </div>

          {/* SALES */}
          <div className="path-card">
            <div className="tag-row">
              <span className="tag">1–4 months</span>
              <span className="tag tag-yellow">Unlimited income</span>
            </div>
            <h3>Real Estate / Insurance / High-Ticket Sales</h3>
            <p>Low barrier. High upside. Most people quit too early.</p>
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
      <section className="section section-cta">
        <h2 className="section-title">Not sure which path fits you?</h2>
        <p style={{ maxWidth: "540px", margin: "0 auto 1.5rem", color: "#9ca3af" }}>
          Tell us your age, location, and what you actually want in life — 
          and we’ll point you toward the top 2–3 paths that fit.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">Ask us which path is best</a>
        </div>
      </section>

      <style jsx>{`
        ul {
          margin: 0.75rem 0;
          padding-left: 1.1rem;
          line-height: 1.45;
          color: #d1d5db;
          font-size: 0.95rem;
        }
        .tag-row {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }
        .tag {
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          font-size: 0.75rem;
          background: rgba(148, 163, 184, 0.28);
          color: #e5e7eb;
        }
        .tag-green {
          background: rgba(34, 197, 94, 0.25);
          color: #bbf7d0;
        }
        .tag-blue {
          background: rgba(14, 165, 233, 0.25);
          color: #bae6fd;
        }
        .tag-orange {
          background: rgba(249, 115, 22, 0.25);
          color: #fed7aa;
        }
        .tag-yellow {
          background: rgba(234, 179, 8, 0.25);
          color: #fef3c7;
        }
      `}</style>
    </Layout>
  );
            }
