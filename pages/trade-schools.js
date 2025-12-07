// pages/trade-schools.js
import Layout from "../components/Layout";

export default function TradeSchools() {
  return (
    <Layout title="Trade Schools 2025 – Fast. Affordable. In Demand.">
      <section className="hero">
        <p className="eyebrow">NO SUITE. NO DORM. JUST SKILLS.</p>
        <h1 className="hero-title">Trade schools that actually pay off</h1>
        <p className="hero-subtitle">
          Most programs are 3–18 months. Many are paid apprenticeships. These
          paths can hit $70k–$150k+ without a four-year degree.
        </p>
      </section>

      <section className="section">
        <div className="path-grid">
          {/* HVAC */}
          <div className="path-card">
            <h3>HVAC / Refrigeration</h3>
            <p className="path-body">
              Climate systems, refrigeration, and commercial HVAC. Always
              needed, everywhere. Big overtime potential.
            </p>
            <ul className="path-list">
              <li>6–12 month programs</li>
              <li>Residential + commercial work</li>
              <li>Can specialize in refrigeration for higher pay</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.careeronestop.org/FindTraining/Types/apprenticeships.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Find HVAC apprenticeships →
              </a>
            </p>
          </div>

          {/* Welding */}
          <div className="path-card">
            <h3>Welding &amp; fabrication</h3>
            <p className="path-body">
              Structural welding, pipe welding, and fabrication. Travel
              contracts and specialty welders can hit serious money.
            </p>
            <ul className="path-list">
              <li>3–9 month welding schools</li>
              <li>Pipeline, shipyards, heavy industry</li>
              <li>Cert-based, not degree-based</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.trade-schools.net/trades/welding"
                target="_blank"
                rel="noreferrer"
              >
                Welding trade school guide →
              </a>
            </p>
          </div>

          {/* Electrician */}
          <div className="path-card">
            <h3>Electrician (apprenticeship)</h3>
            <p className="path-body">
              Become a licensed journeyman through a paid apprenticeship. Strong
              long-term income and benefits.
            </p>
            <ul className="path-list">
              <li>4–5 year paid apprenticeship model</li>
              <li>Union + non-union options</li>
              <li>Residential, commercial, industrial work</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.apprenticeship.gov/apprenticeship-job-finder"
                target="_blank"
                rel="noreferrer"
              >
                Search electrician apprenticeships →
              </a>
            </p>
          </div>

          {/* CDL */}
          <div className="path-card">
            <h3>CDL / Truck driving</h3>
            <p className="path-body">
              Short training, quick path to full-time work. Local, regional, and
              over-the-road options.
            </p>
            <ul className="path-list">
              <li>3–8 week CDL schools</li>
              <li>Company-paid training available</li>
              <li>Local home-daily or travel heavy</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.careerschoolnow.org/truck-driving"
                target="_blank"
                rel="noreferrer"
              >
                Compare CDL schools →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL START CTA */}
      <section className="section section-cta">
        <h2 className="section-title">Find programs near you</h2>
        <p className="section-subtitle">
          Start with local technical colleges and apprenticeship programs. Many
          are designed to be finished within a year.
        </p>
        <div className="cta-buttons">
          <a
            href="https://www.careeronestop.org/FindTraining/Types/apprenticeships.aspx"
            target="_blank"
            rel="noreferrer"
            className="btn btn-pill"
          >
            Apprenticeship finder →
          </a>
          <a
            href="https://www.careerschoolnow.org/trade-schools"
            target="_blank"
            rel="noreferrer"
            className="btn btn-pill"
          >
            Trade school search →
          </a>
        </div>
      </section>
    </Layout>
  );
            }
