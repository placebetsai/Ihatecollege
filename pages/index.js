// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>I Hate College – Real Alternatives, Debt Calculator, Trades & Bootcamps</title>
        <meta
          name="description"
          content="Before you take on student debt, compare real alternatives: trades, bootcamps, tech certs, creator paths, and a brutal debt calculator."
        />
        <meta property="og:title" content="I Hate College – Real Alternatives" />
        <meta
          property="og:description"
          content="See real options beyond the 4-year degree: trades, tech certs, bootcamps, and more."
        />
      </Head>

      <div className="home-root">
        <Navbar />

        <main className="home-main">
          {/* HERO */}
          <section className="hero">
            <div className="hero-text">
              <p className="hero-kicker">YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY</p>
              <h1 className="hero-title">
                College is <span className="hero-title-highlight">optional</span>. Debt isn&apos;t.
              </h1>
              <p className="hero-subtitle">
                Before you lock in $50k+ of loans, compare trades, tech certs, bootcamps, and real
                alternatives. Run the numbers. Hear from students. Then decide.
              </p>

              <div className="hero-actions">
                <Link href="/alternatives" className="hero-btn hero-btn-primary">
                  Explore alternatives
                </Link>
                <Link href="/cost" className="hero-btn hero-btn-secondary">
                  Run debt calculator
                </Link>
              </div>

              <p className="hero-footnote">
                No &quot;drop out and manifest&quot; bullshit. Just options nobody told you about.
              </p>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-header">
                <span className="hero-chip">Snapshot</span>
                <span className="hero-panel-title">4-Year vs Trade vs Cert</span>
              </div>
              <ul className="hero-stats">
                <li>
                  <span>Avg 4-year total cost</span>
                  <strong>$100k+ with living costs</strong>
                </li>
                <li>
                  <span>Time in class</span>
                  <strong>4+ years</strong>
                </li>
                <li>
                  <span>Typical trade / cert path</span>
                  <strong>6–24 months</strong>
                </li>
                <li>
                  <span>Working while you train?</span>
                  <strong>Often yes (apprenticeships)</strong>
                </li>
              </ul>
              <Link href="/cost" className="hero-panel-link">
                See what your debt really costs →
              </Link>
            </div>
          </section>

          {/* FEATURE GRID */}
          <section className="features">
            <article className="feature-card">
              <h2>💸 Debt Calculator</h2>
              <p>
                Plug in total loans, interest, and a real monthly payment. See how many years of
                your life that degree actually costs you.
              </p>
              <Link href="/cost" className="feature-link">
                Run the numbers →
              </Link>
            </article>

            <article className="feature-card">
              <h2>🛠 Trades & Tech Paths</h2>
              <p>
                HVAC, electrician, cybersecurity, cloud, medical tech. Real paths with shorter
                training and decent pay – without 4 years in a lecture hall.
              </p>
              <Link href="/alternatives" className="feature-link">
                See real career options →
              </Link>
            </article>

            <article className="feature-card">
              <h2>🔥 Rank Your School</h2>
              <p>
                Forget glossy brochures. Students anonymously rate their schools on cost, stress,
                politics, and &quot;I hate this place&quot; score.
              </p>
              <Link href="/rank" className="feature-link">
                Roast or praise your school →
              </Link>
            </article>
          </section>

          {/* CHEAT SHEETS TEASER */}
          <section className="strip">
            <div className="strip-inner">
              <div>
                <h2>Cheat Sheet Vault (coming alive)</h2>
                <p>
                  Email templates, exam planning, loan call scripts, &quot;I&apos;m drowning&quot;
                  checklists – the stuff everyone ends up writing from scratch at 2 a.m.
                </p>
              </div>
              <Link href="/cheatsheets" className="strip-link">
                Peek the vault →
              </Link>
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        .home-root {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1f2937 0, #020617 55%);
          color: #f9fafb;
        }
        .home-main {
          max-width: 1120px;
          margin: 0 auto;
          padding: 2rem 1.5rem 3rem;
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
          gap: 2rem;
          align-items: center;
          margin-top: 1rem;
        }
        @media (max-width: 860px) {
          .hero {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        .hero-text {
          max-width: 36rem;
        }
        .hero-kicker {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 0.75rem;
        }
        .hero-title {
          font-size: 2.7rem;
          line-height: 1.05;
          font-weight: 800;
          margin-bottom: 0.75rem;
        }
        @media (min-width: 900px) {
          .hero-title {
            font-size: 3.1rem;
          }
        }
        .hero-title-highlight {
          background: linear-gradient(to right, #fbbf24, #f97316);
          -webkit-background-clip: text;
          color: transparent;
        }
        .hero-subtitle {
          font-size: 0.95rem;
          color: #e5e7eb;
          margin-bottom: 1.3rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.6rem;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1.5rem;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }
        .hero-btn-primary {
          background: #fbbf24;
          color: #020617;
        }
        .hero-btn-secondary {
          border: 1px solid #38bdf8;
          color: #e0f2fe;
          background: rgba(15, 23, 42, 0.9);
        }
        .hero-footnote {
          font-size: 0.8rem;
          color: #9ca3af;
        }

        .hero-panel {
          border-radius: 1.5rem;
          border: 1px solid rgba(148, 163, 184, 0.7);
          background: radial-gradient(circle at top left, #0f172a 0, #020617 70%);
          padding: 1.1rem 1.1rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.7);
        }
        .hero-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hero-panel-title {
          font-size: 0.85rem;
          color: #e5e7eb;
          font-weight: 600;
        }
        .hero-chip {
          font-size: 0.7rem;
          border-radius: 999px;
          padding: 0.2rem 0.55rem;
          background: rgba(56, 189, 248, 0.2);
          color: #7dd3fc;
        }
        .hero-stats {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.78rem;
          border-radius: 0.9rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.4);
          overflow: hidden;
        }
        .hero-stats li {
          display: flex;
          justify-content: space-between;
          padding: 0.55rem 0.75rem;
        }
        .hero-stats li:nth-child(odd) {
          background: rgba(15, 23, 42, 0.9);
        }
        .hero-stats li:nth-child(even) {
          background: rgba(15, 23, 42, 0.7);
        }
        .hero-stats span {
          color: #9ca3af;
        }
        .hero-stats strong {
          color: #e5e7eb;
          font-weight: 600;
        }
        .hero-panel-link {
          font-size: 0.8rem;
          color: #fbbf24;
          font-weight: 600;
          text-decoration: none;
        }

        .features {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 900px) {
          .features {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        .feature-card {
          background: rgba(15, 23, 42, 0.95);
          border-radius: 1.25rem;
          padding: 1.2rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.5);
          font-size: 0.9rem;
        }
        .feature-card h2 {
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
        }
        .feature-card p {
          font-size: 0.85rem;
          color: #d1d5db;
          margin-bottom: 0.6rem;
        }
        .feature-link {
          font-size: 0.83rem;
          font-weight: 600;
          color: #fbbf24;
          text-decoration: none;
        }

        .strip {
          margin-top: 3rem;
        }
        .strip-inner {
          border-radius: 1.3rem;
          border: 1px solid rgba(56, 189, 248, 0.6);
          background: linear-gradient(
            to right,
            rgba(8, 47, 73, 0.95),
            rgba(15, 23, 42, 0.98)
          );
          padding: 1.2rem 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          font-size: 0.9rem;
        }
        .strip-inner h2 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .strip-inner p {
          font-size: 0.8rem;
          color: #e5e7eb;
          max-width: 28rem;
        }
        .strip-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: #fbbf24;
          text-decoration: none;
          white-space: nowrap;
        }
        @media (max-width: 720px) {
          .strip-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
                  }
