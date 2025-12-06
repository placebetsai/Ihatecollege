// pages/index.js
import React from "react";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout title="College is optional. Debt isn't.">
      <main className="home-page">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-card">
            <p className="hero-kicker">
              YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY
            </p>

            <h1 className="hero-title">
              College is <span className="hero-highlight">optional</span>. Debt
              isn&apos;t.
            </h1>

            <p className="hero-body">
              Before you sign away $50k–$150k, compare trades, tech careers,
              apprenticeships, bootcamps, and real alternatives. Run the
              numbers. Hear from real people. Then decide.
            </p>

            <div className="hero-buttons">
              <a href="/alternatives" className="btn btn-primary">
                Explore alternatives
              </a>
              <a href="/debt-calculator" className="btn btn-outline">
                See what your degree really costs
              </a>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-label">Avg 4-year total cost</div>
                <div className="metric-value">$100k+ with living costs</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Time in class</div>
                <div className="metric-value">4+ years</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Typical trade/cert path</div>
                <div className="metric-value">6–24 months</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Working while you train?</div>
                <div className="metric-value">Often yes (apprenticeships)</div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGH-INCOME PATHS */}
        <section className="paths-section">
          <h2 className="section-title">
            High-income paths that DON&apos;T require a degree
          </h2>

          <div className="paths-grid">
            <article className="path-card">
              <h3>Tech &amp; Cyber</h3>
              <p className="path-subtitle">
                Cloud, cybersecurity, IT support, UX/UI.
              </p>
              <ul className="path-list">
                <li>Remote-friendly, high demand, stackable certs.</li>
                <li>CompTIA A+ / Network+ / Security+</li>
                <li>Cloud certs (AWS, Azure, GCP)</li>
              </ul>
              <p className="path-link">Tech &amp; cyber cheat sheet →</p>
            </article>

            <article className="path-card">
              <h3>Skilled Trades</h3>
              <p className="path-subtitle">
                HVAC, electrician, welding, CDL trucking.
              </p>
              <ul className="path-list">
                <li>Paid apprenticeships instead of paying tuition.</li>
                <li>Union benefits, OT, and strong job security.</li>
                <li>Ability to start your own shop later.</li>
              </ul>
              <p className="path-link">Trade-school breakdown →</p>
            </article>

            <article className="path-card">
              <h3>No-Degree High Income</h3>
              <p className="path-subtitle">
                Sales, real estate, notary, adjusting, etc.
              </p>
              <ul className="path-list">
                <li>Skill-based income, not campus-based.</li>
                <li>Real-estate &amp; mortgage licensing.</li>
                <li>Insurance &amp; public adjusting, notary work.</li>
              </ul>
              <p className="path-link">License-based career paths →</p>
            </article>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="results-section">
          <h2 className="section-title">Real people. Real results.</h2>

          <div className="quote-list">
            <figure className="quote-card">
              <blockquote>
                “Dropped out after year 2. Got Security+. Making $78k at 20.”
              </blockquote>
              <figcaption>— Jake, Boca Raton</figcaption>
            </figure>

            <figure className="quote-card">
              <blockquote>
                “HVAC instead of $80k loans. Made $95k with overtime last
                year.”
              </blockquote>
              <figcaption>— Marco, Miami</figcaption>
            </figure>

            <figure className="quote-card">
              <blockquote>
                “Cloud certs took 5 months. Now making more than my mom who
                went to college.”
              </blockquote>
              <figcaption>— Rachel, Orlando</figcaption>
            </figure>
          </div>
        </section>

        {/* CHOOSE PATH CTA */}
        <section className="choose-section">
          <h2 className="section-title">Choose your path</h2>
          <p className="section-body">
            You don&apos;t need a $100k campus and a dorm to make real money.
            Pick a path and start building skills that actually pay.
          </p>

          <div className="choose-buttons">
            <a href="/trade-schools" className="btn btn-pill">
              Trades path
            </a>
            <a href="/alternatives" className="btn btn-pill">
              Tech &amp; certs
            </a>
            <a href="/civil-service" className="btn btn-pill">
              Civil service &amp; gov jobs
            </a>
          </div>
        </section>
      </main>

      {/* 🔥 MOBILE GAP FIX — ONLY AFFECTS SPACING, NOT DESIGN */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .home-page {
            padding-top: 4.5rem;
          }

          /* pull hero up so there isn't a giant black gap */
          .hero-section {
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
    </Layout>
  );
          }
