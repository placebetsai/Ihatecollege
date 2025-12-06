// pages/index.js
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <main className="home-page">
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-card">
            <p className="hero-kicker">You don&apos;t have to sign your life away</p>
            <h1 className="hero-title">
              College is <span className="hero-highlight">optional</span>. Debt isn&apos;t.
            </h1>
            <p className="hero-body">
              Before you sign away $50k–$150k, compare trades, tech careers,
              apprenticeships, bootcamps, and real alternatives. Run the numbers.
              Hear from real people. Then decide.
            </p>

            <div className="hero-actions">
              <a href="/alternatives" className="btn btn-primary">
                Explore alternatives
              </a>
              <a href="/debt-calculator" className="btn btn-secondary">
                See what your degree really costs
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <p className="metric-label">Avg 4-year total cost</p>
                <p className="metric-value">$100k+ with living costs</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Time in class</p>
                <p className="metric-value">4+ years</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Typical trade/cert path</p>
                <p className="metric-value">6–24 months</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Working while you train?</p>
                <p className="metric-value">Often yes (apprenticeships)</p>
              </div>
            </div>
          </div>
        </section>

        {/* HIGH-INCOME PATHS */}
        <section className="paths-section">
          <h2 className="section-title">
            High-income paths that DON&apos;T require a degree
          </h2>

          <div className="path-grid">
            <article className="path-card">
              <h3 className="path-title">Tech &amp; Cyber</h3>
              <p className="path-subtitle">
                Cloud, cybersecurity, IT support, UX/UI.
              </p>
              <ul className="path-list">
                <li>Remote-friendly, high demand, stackable certs.</li>
                <li>CompTIA A+ / Network+ / Security+</li>
                <li>Cloud certs (AWS, Azure, GCP)</li>
              </ul>
              <a href="/cheat-sheets" className="path-link">
                Tech &amp; cyber cheat sheet →
              </a>
            </article>

            <article className="path-card">
              <h3 className="path-title">Skilled Trades</h3>
              <p className="path-subtitle">
                HVAC, electrician, welding, CDL.
              </p>
              <ul className="path-list">
                <li>Paid apprenticeships + overtime.</li>
                <li>Hands-on work, recession-resistant.</li>
                <li>Welding, electrical, CDL programs.</li>
              </ul>
              <a href="/trade-schools" className="path-link">
                Trade-school breakdown →
              </a>
            </article>

            <article className="path-card">
              <h3 className="path-title">No-Degree High Income</h3>
              <p className="path-subtitle">
                Sales, real estate, notary, adjusting.
              </p>
              <ul className="path-list">
                <li>Skill-based income, not campus-based.</li>
                <li>Real-estate &amp; mortgage licensing</li>
                <li>Insurance &amp; public adjusting</li>
              </ul>
              <a href="/civil-service" className="path-link">
                License-based career paths →
              </a>
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
                “HVAC instead of $80k loans. Made $95k with overtime last year.”
              </blockquote>
              <figcaption>— Marco, Miami</figcaption>
            </figure>
            <figure className="quote-card">
              <blockquote>
                “Cloud certs took 5 months. Now making more than my mom who went to college.”
              </blockquote>
              <figcaption>— Rachel, Orlando</figcaption>
            </figure>
          </div>
        </section>

        {/* CTA PATH BUTTONS */}
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
            <a href="/cheat-sheets" className="btn btn-pill">
              Tech &amp; certs
            </a>
            <a href="/civil-service" className="btn btn-pill">
              Civil service &amp; gov jobs
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
          }
