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

      {/* HERO SECTION */}
      <section className="site-main" style={{ paddingBottom: '1rem' }}>
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
              <span className="eyebrow" style={{ marginBottom: '0.2rem' }}>Avg 4-year cost</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>$100k+</div>
            </div>
            <div className="stat">
              <span className="eyebrow" style={{ marginBottom: '0.2rem' }}>Time in class</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>4+ years</div>
            </div>
            <div className="stat">
              <span className="eyebrow" style={{ marginBottom: '0.2rem' }}>Trade/Cert Path</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#22d3ee' }}>6–24 mos</div>
            </div>
            <div className="stat">
              <span className="eyebrow" style={{ marginBottom: '0.2rem' }}>Paid Training?</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#4ade80' }}>Yes (Apprentice)</div>
            </div>
          </div>
        </div>
      </section>

      {/* DECISION WIZARD */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Should you go to college?</h2>
        <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '2rem' }}>
          Take the 30-second logic check.
        </p>
        <DecisionWizard />
      </div>

      {/* HIGH INCOME PATHS */}
      <div className="site-main" style={{ paddingTop: 0 }}>
        <h2 className="section-title">
          High-income paths (No Degree)
        </h2>

        <div className="path-grid">
          {/* Tech */}
          <div className="path-card">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>Tech &amp; Cyber</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.95rem' }}>
              Cloud, cybersecurity, IT support. Remote-friendly, high demand.
            </p>
            <Link href="/cheat-sheets" style={{ color: '#22d3ee', fontWeight: '600', fontSize: '0.9rem' }}>
              View Cheat Sheets →
            </Link>
          </div>

          {/* Trades */}
          <div className="path-card">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>Skilled Trades</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.95rem' }}>
              HVAC, electrician, welding, CDL. Paid apprenticeships, overtime.
            </p>
            <Link href="/trade-schools" style={{ color: '#facc15', fontWeight: '600', fontSize: '0.9rem' }}>
              Trade School Breakdown →
            </Link>
          </div>

          {/* Gov */}
          <div className="path-card">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>Civil Service</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.95rem' }}>
              Federal, state, and city jobs. Pensions + Benefits.
            </p>
            <Link href="/civil-service" style={{ color: '#4ade80', fontWeight: '600', fontSize: '0.9rem' }}>
              Gov Job Guide →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="section-cta" style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Choose your path</h2>
          <p className="hero-subtitle" style={{ margin: '0 auto 1.5rem' }}>
            You don't need a $100k campus and a dorm to make real money.
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
        </div>
      </div>
    </Layout>
  );
}
