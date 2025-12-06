// pages/index.js
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout title="College is optional. Debt isn't.">
      <section className="hero">
        <p className="eyebrow">YOU DON'T HAVE TO SIGN YOUR LIFE AWAY</p>

        <h1 className="hero-title">
          College is <span className="accent">optional</span>. Debt isn&apos;t.
        </h1>

        <p className="hero-subtitle">
          Before you sign away $50k–$150k, compare trades, tech careers,
          apprenticeships, bootcamps, and real alternatives. Run the numbers.
          Hear from real people. Then decide.
        </p>

        <div className="hero-actions">
          <a href="/alternatives" className="btn btn-primary">
            Explore alternatives
          </a>
          <a href="/debt-calculator" className="btn btn-outline">
            See what your degree really costs
          </a>
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
      </section>

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

            <p className="path-link">Tech &amp; cyber cheat sheet →</p>
          </div>

          <div className="path-card">
            <h3>Skilled Trades</h3>
            <p className="path-body">
              HVAC, electrician, welding, CDL. Paid apprenticeships, overtime,
              and recession-resistant work.
            </p>

            <ul className="path-list">
              <li>HVAC and electrical apprenticeships</li>
              <li>Welding and fabrication programs</li>
              <li>CDL for trucking &amp; logistics</li>
            </ul>

            <p className="path-link">Trade-school breakdown →</p>
          </div>

          <div className="path-card">
            <h3>No-Degree High Income</h3>
            <p className="path-body">
              Sales, real estate, notary, adjusting, and other license-based
              careers with low upfront cost.
            </p>

            <ul className="path-list">
              <li>Real-estate &amp; mortgage licensing</li>
              <li>Insurance &amp; public adjusting</li>
              <li>Notary &amp; loan-signing work</li>
            </ul>

            <p className="path-link">License-based career paths →</p>
          </div>
        </div>
      </section>
