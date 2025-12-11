import Layout from "../components/Layout";
import SEO from "../components/SEO";
import DecisionWizard from "../components/DecisionWizard";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <SEO 
        title="College is Optional. Debt is Not. | IHateCollege.com"
        description="The brutal truth about student debt and the high-income alternatives they don't teach you in high school."
      />

      {/* HERO SECTION - USING YOUR ORIGINAL CLASSES */}
      <section className="hero-wrapper" style={{ minHeight: "auto", paddingTop: "0.5rem" }}>
        <div className="hero">
          <p className="eyebrow">YOU DON'T HAVE TO SIGN YOUR LIFE AWAY</p>

          <h1 className="hero-title">
            College is <span className="accent">optional</span>. Debt isn&apos;t.
          </h1>

          <p className="hero-subtitle">
            Before you sign away $50k–$150k, compare trades, tech careers, 
            apprenticeships, and real alternatives. Run the numbers. 
            Hear from real people. Then decide.
          </p>

          <div className="hero-actions">
            <Link href="/alternatives" className="btn btn-primary">
              Explore alternatives
            </Link>
            <Link href="/debt-calculator" className="btn btn-outline">
              See what your degree really costs
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-label">Avg 4-year total cost</span>
              <span className="stat-value">$100k+ with living costs</span>
            </div>
            <div className="stat">
              <span className="stat-label">Time in class</span>
              <span className="stat-value">4+ years</span>
            </div>
            <div className="stat">
              <span className="stat-label">Typical trade/cert path</span>
              <span className="stat-value">6–24 months</span>
            </div>
            <div className="stat">
              <span className="stat-label">Working while you train?</span>
              <span className="stat-value">Often yes (apprenticeships)</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: DECISION WIZARD SECTION */}
      <section className="section" style={{ background: "rgba(15,23,42,0.6)", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 0" }}>
          <h2 className="section-title" style={{ textAlign: "center" }}>Should you go to college?</h2>
          <p className="section-subtitle" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Take the 30-second logic check. No email required.
          </p>
          <DecisionWizard />
        </div>
      </section>

      {/* HIGH-INCOME PATHS - YOUR ORIGINAL GRID */}
      <section className="section">
        <h2 className="section-title">
          High-income paths that DON&apos;T require a degree
        </h2>

        <div className="path-grid">
          <div className="path-card">
            <h3>Tech &amp; Cyber</h3>
            <p className="path-body">
              Cloud, cybersecurity, IT support, UX/UI. Remote-friendly, high 
              demand, stackable certs.
            </p>
            <ul className="path-list">
              <li>Google IT Support / Cyber</li>
              <li>CompTIA A+ / Network+ / Security+</li>
              <li>Cloud certs (AWS, Azure, GCP)</li>
            </ul>
            <p className="path-link">
              <Link href="/cheat-sheets">Tech &amp; cyber cheat sheet →</Link>
            </p>
          </div>

          <div className="path-card">
            <h3>Skilled Trades</h3>
            <p className="path-body">
              HVAC, electrician, welding, CDL. Paid apprenticeships, overtime, 
              and recession-resistant work.
            </p>
            <ul className="path-list">
              <li>HVAC & electrical apprenticeships</li>
              <li>Welding & fabrication programs</li>
              <li>CDL for trucking & logistics</li>
            </ul>
            <p className="path-link">
              <Link href="/trade-schools">Trade-school breakdown →</Link>
            </p>
          </div>

          <div className="path-card">
            <h3>Gov & Civil Service</h3>
            <p className="path-body">
              Federal, state, and city jobs. Many don't require degrees, just exams. 
              Pensions + Benefits.
            </p>
            <ul className="path-list">
              <li>USPS & Logistics</li>
              <li>Fire & Police</li>
              <li>TSA / Border Control</li>
            </ul>
            <p className="path-link">
              <Link href="/civil-service">Civil Service Guide →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section section-cta">
        <h2 className="section-title">Choose your path</h2>
        <p className="section-subtitle">
          You don&apos;t need a $100k campus and a dorm to make real money. Pick 
          a path and start building skills that actually pay.
        </p>

        <div className="cta-buttons">
          <Link href="/trade-schools" className="btn btn-pill">
            Trades path
          </Link>
          <Link href="/alternatives" className="btn btn-pill">
            Tech &amp; certs
          </Link>
          <Link href="/contact" className="btn btn-pill">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}