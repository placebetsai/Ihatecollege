// pages/index.js
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <main className="home">
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">You don't have to sign your life away</p>
            <h1>
              College is <span className="highlight">optional</span>. Debt isn't.
            </h1>
            <p className="hero-sub">
              Before you sign away $50k–$150k, compare trades, tech careers,
              apprenticeships, bootcamps, and real alternatives. Run the
              numbers. Hear from students. Then decide.
            </p>

            <div className="hero-actions">
              <a href="/alternatives" className="btn primary">
                Explore alternatives
              </a>
              <a href="/debt-calculator" className="btn secondary">
                See what your degree really costs
              </a>
            </div>

            {/* QUICK STATS */}
            <div className="stats-row">
              <div className="stat-card">
                <span className="stat-label">Avg 4-year total cost</span>
                <span className="stat-value">$100k+ with living costs</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Time in class</span>
                <span className="stat-value">4+ years</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Trade/cert path</span>
                <span className="stat-value">6–24 months</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Work while training?</span>
                <span className="stat-value">Often yes</span>
              </div>
            </div>
          </div>
        </section>

        {/* PATHS */}
        <section className="section">
          <h2>High-income paths that DON’T require a degree</h2>

          <div className="path-grid">
            <div className="path-card">
              <h3>Tech &amp; Cyber</h3>
              <p>Cloud, Cybersecurity, IT Support, UX/UI Design</p>
              <p className="path-link">Google IT Support →</p>
            </div>

            <div className="path-card">
              <h3>Skilled Trades</h3>
              <p>HVAC, Electrician, Welding, CDL</p>
              <p className="path-link">Apprenticeships →</p>
            </div>

            <div className="path-card">
              <h3>No-Degree High Income</h3>
              <p>Sales, Real Estate, Notary, Adjusting, Mortgage Licensing</p>
              <p className="path-link">High-income playbook →</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <h2>Real people. Real results.</h2>

          <div className="testimonial-list">
            <div className="testimonial">
              <p>
                “Dropped out after year 2. Got Security+. Making $78k at 20.”
              </p>
              <span className="testimonial-name">— Jake, Boca Raton</span>
            </div>

            <div className="testimonial">
              <p>
                “HVAC instead of $80k loans. Made $95k with overtime last year.”
              </p>
              <span className="testimonial-name">— Marco, Miami</span>
            </div>

            <div className="testimonial">
              <p>
                “Cloud certs took 5 months. Now making more than my mom who
                went to college.”
              </p>
              <span className="testimonial-name">— Rachel, Orlando</span>
            </div>
          </div>
        </section>

        {/* CTA PATH BUTTONS */}
        <section className="section">
          <h2>Choose your path</h2>
          <div className="path-buttons">
            <a href="/trade-schools" className="btn path-btn">
              Trades Path
            </a>
            <a href="/alternatives" className="btn path-btn">
              Tech Path
            </a>
            <a href="/civil-service" className="btn path-btn wide">
              No-Degree High Income
            </a>
          </div>
        </section>

        <section className="section small">
          <p className="footnote">
            © 2025 IHateCollege.com — No brochure fluff. Just reality.
          </p>
        </section>
      </main>
    </Layout>
  );
          }
