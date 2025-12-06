// pages/index.js
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout title="Home">
      <section className="hero-section">
        <div className="hero-card">
          <p className="hero-kicker">YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY</p>
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
            <a href="/debt-calculator" className="btn btn-ghost">
              See what your degree really costs
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <p className="stat-label">Avg 4-year total cost</p>
              <p className="stat-value">$100k+ with living costs</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Time in class</p>
              <p className="stat-value">4+ years</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Typical trade/cert path</p>
              <p className="stat-value">6–24 months</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Working while you train?</p>
              <p className="stat-value">Often yes (apprenticeships)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="paths-section">
        <h2 className="section-title">
          High-income paths that DON&apos;T require a degree
        </h2>

        <div className="paths-grid">
          <article className="path-card">
            <h3 className="path-title">Tech &amp; Cyber</h3>
            <p className="path-body">
              Cloud, cybersecurity, IT support, UX/UI. Remote-friendly, high demand,
              stackable certs.
            </p>
            <ul className="path-list">
              <li>Google IT Support / Cyber</li>
              <li>CompTIA A+ / Network+ / Security+</li>
              <li>Cloud certs (AWS, Azure, GCP)</li>
            </ul>
            <a href="/cheat-sheets" className="path-link">
              Tech &amp; cyber cheat sheet →
            </a>
          </article>

          <article className="path-card">
            <h3 className="path-title">Skilled Trades</h3>
            <p className="path-body">
              HVAC, electrician, welding, CDL trucking. Paid apprenticeships instead
              of paying tuition.
            </p>
            <ul className="path-list">
              <li>Union benefits, OT, and strong job security</li>
              <li>Hands-on work, recession-resistant</li>
              <li>Ability to start your own shop later</li>
            </ul>
            <a href="/trade-schools" className="path-link">
              Trade-school breakdown →
            </a>
          </article>

          <article className="path-card">
            <h3 className="path-title">No-Degree High Income</h3>
            <p className="path-body">
              Sales, real estate, notary, adjusting, and other license-based jobs
              with real earning power.
            </p>
            <ul className="path-list">
              <li>Real-estate &amp; mortgage licensing</li>
              <li>Insurance &amp; public adjusting</li>
              <li>Notary / loan-signing work</li>
            </ul>
            <a href="/civil-service" className="path-link">
              License-based career paths →
            </a>
          </article>
        </div>
      </section>

      <section className="results-section">
        <h2 className="section-title">Real people. Real results.</h2>

        <div className="results-list">
          <figure className="quote-card">
            <blockquote>
              &quot;Dropped out after year 2. Got Security+. Making $78k at 20.&quot;
            </blockquote>
            <figcaption>— Jake, Boca Raton</figcaption>
          </figure>

          <figure className="quote-card">
            <blockquote>
              &quot;HVAC instead of $80k loans. Made $95k with overtime last year.&quot;
            </blockquote>
            <figcaption>— Marco, Miami</figcaption>
          </figure>

          <figure className="quote-card">
            <blockquote>
              &quot;Cloud certs took 5 months. Now making more than my mom who went
              to college.&quot;
            </blockquote>
            <figcaption>— Rachel, Orlando</figcaption>
          </figure>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="section-title">Choose your path</h2>
        <p className="cta-body">
          You don&apos;t need a $100k campus and a dorm to make real money. Pick a
          path and start building skills that actually pay.
        </p>
        <div className="cta-buttons">
          <a href="/trade-schools" className="btn btn-outline">
            Trades path
          </a>
          <a href="/cheat-sheets" className="btn btn-outline">
            Tech &amp; certs
          </a>
          <a href="/civil-service" className="btn btn-outline">
            Civil service &amp; gov jobs
          </a>
        </div>
      </section>
    </Layout>
  );
                }
