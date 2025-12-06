// pages/index.js
import React from "react";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout
      title="College is optional. Debt isn't."
      description="See what your degree really costs, compare real alternatives, and hear from students who bailed on the 4-year trap."
    >
      <section className="hero">
        <div className="hero-main-card">
          <p className="eyebrow">YOU DON'T HAVE TO SIGN YOUR LIFE AWAY</p>
          <h1 className="hero-title">
            College is <span className="accent">optional</span>. Debt isn&apos;t.
          </h1>
          <p className="hero-subtitle">
            Before you lock in $50k+ of loans, compare trades, tech certs,
            bootcamps, and real alternatives. Run the numbers. Hear from
            students. Then decide.
          </p>

          <div className="hero-actions">
            <a href="/alternatives" className="btn btn-primary">
              Explore alternatives
            </a>
            <a href="/debt-calculator" className="btn btn-ghost">
              See what your degree really costs
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-label">Avg 4-year total cost</span>
              <span className="metric-value">$100k+ with living costs</span>
            </div>
            <div className="metric">
              <span className="metric-label">Time in class</span>
              <span className="metric-value">4+ years</span>
            </div>
            <div className="metric">
              <span className="metric-label">Typical trade/cert path</span>
              <span className="metric-value">6–24 months</span>
            </div>
            <div className="metric">
              <span className="metric-label">Working while you train?</span>
              <span className="metric-value">Often yes (apprenticeships)</span>
            </div>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-side-card">
            <h2 className="hero-side-title">Reality check in 3 paths</h2>
            <p className="hero-side-text">
              Compare what happens if you go full college, go alt-path, or go
              straight to work.
            </p>

            <div className="pill-grid">
              <a href="/trade-schools" className="pill">
                <span className="pill-title">Trades & apprenticeships</span>
                <span className="pill-sub">Hands-on, paid training</span>
              </a>
              <a href="/alternatives" className="pill">
                <span className="pill-title">Tech & bootcamps</span>
                <span className="pill-sub">Certs, cloud, cyber, UX</span>
              </a>
              <a href="/civil-service" className="pill">
                <span className="pill-title">Gov & civil service</span>
                <span className="pill-sub">Pensions, stability, benefits</span>
              </a>
            </div>

            <div className="hero-mini-links">
              <a href="/cheat-sheets" className="mini-link">
                Cheat sheets for picking a path →
              </a>
              <a href="/rank-your-school" className="mini-link">
                Rank your school&apos;s real value →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Real people. Real results.</h2>
          <p>Not brochure quotes — actual students who dodged the debt trap.</p>
        </header>

        <div className="card-grid">
          <article className="card">
            <p className="card-quote">
              “Dropped out after year 2. Got Security+ and A+. Making $78k at 20.”
            </p>
            <p className="card-meta">– Jake, Boca Raton</p>
            <div className="card-tag-row">
              <span className="badge">Tech certs</span>
              <span className="badge badge-soft">No degree</span>
            </div>
          </article>

          <article className="card">
            <p className="card-quote">
              “Went HVAC instead of $80k loans. Cleared $95k with overtime last year.”
            </p>
            <p className="card-meta">– Marco, Miami</p>
            <div className="card-tag-row">
              <span className="badge">Skilled trades</span>
              <span className="badge badge-soft">Paid training</span>
            </div>
          </article>

          <article className="card">
            <p className="card-quote">
              “Cloud certs took 5 months. Now making more than my mom who went to college.”
            </p>
            <p className="card-meta">– Rachel, Orlando</p>
            <div className="card-tag-row">
              <span className="badge">Cloud & cyber</span>
              <span className="badge badge-soft">Fast track</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-split">
        <div className="section-block">
          <h2>Tools that slap you with the truth</h2>
          <p>
            Run your major, school, and loan amounts through the calculators
            before you sign. See how long you&apos;ll be paying, and what your
            other options could earn.
          </p>

          <div className="link-card-grid">
            <a href="/debt-calculator" className="link-card">
              <h3>Debt calculator</h3>
              <p>Monthly payment, total interest, and years of your life.</p>
              <span className="mini-link">Open calculator →</span>
            </a>
            <a href="/rank-your-school" className="link-card">
              <h3>Rank your school</h3>
              <p>Compare cost, outcomes, debt, and politics vs other schools.</p>
              <span className="mini-link">Rate my campus →</span>
            </a>
          </div>
        </div>

        <div className="section-block">
          <h2>Signal vs noise</h2>
          <p>
            College isn&apos;t “good” or “bad.” It&apos;s math. For some majors
            it&apos;s worth it. For others it&apos;s a 6-figure donation with no
            refund. We help you separate flexing on Instagram from actual ROI.
          </p>

          <ul className="checklist">
            <li>What you actually keep after rent, taxes, and loans</li>
            <li>Which majors are basically debt traps</li>
            <li>How trades, tech certs, and gov jobs stack up</li>
          </ul>
        </div>
      </section>

      <section className="section section-cta">
        <div className="section-cta-inner">
          <h2>Before you sign the loans… run the numbers.</h2>
          <p>
            Take 10 minutes now so you&apos;re not stuck 10 years from now
            paying for a campus you don&apos;t even live on anymore.
          </p>
          <div className="hero-actions hero-actions-center">
            <a href="/alternatives" className="btn btn-primary">
              Show me real alternatives
            </a>
            <a href="/contact" className="btn btn-ghost">
              Got a story? Send it in →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
                }
