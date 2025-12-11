import Layout from "../components/Layout";

export default function TradeSchoolsPage() {
  return (
    <Layout title="Trade Schools – Programs That Actually Pay Off">
      
      {/* HERO */}
      <section className="hero">
        <p className="eyebrow">NO SUITE. NO DORM. JUST SKILLS.</p>
        <h1 className="hero-title">Trade schools that actually pay off</h1>
        <p className="hero-subtitle">
          Most programs take 3–18 months. Many are paid apprenticeships. These
          paths can hit $70k–$150k+ without a four-year degree.
        </p>
      </section>

      {/* GLOW CARD GRID */}
      <section className="section">
        <div className="path-grid">

          {/* HVAC */}
          <div className="glow-card">
            <h3>HVAC / Refrigeration</h3>
            <p>
              Climate systems, refrigeration, and commercial HVAC. Always needed,
              everywhere. Big overtime potential.
            </p>
            <ul>
              <li>6–12 month programs</li>
              <li>Residential + commercial work</li>
              <li>Can specialize in refrigeration for higher pay</li>
            </ul>
            <a
              className="path-link"
              href="https://www.apprenticeship.gov/apprenticeship-job-finder"
              target="_blank"
              rel="noreferrer"
            >
              Find HVAC apprenticeships →
            </a>
          </div>

          {/* WELDING */}
          <div className="glow-card">
            <h3>Welding & Fabrication</h3>
            <p>
              Structural welding, pipe welding, and fabrication. Travel contracts
              and specialty welders can hit serious money.
            </p>
            <ul>
              <li>3–9 month welding schools</li>
              <li>Pipeline, shipyards, heavy industry</li>
              <li>Cert-based, not degree-based</li>
            </ul>
            <a
              className="path-link"
              href="https://www.weldingschool.com/"
              target="_blank"
              rel="noreferrer"
            >
              Welding trade school guide →
            </a>
          </div>

          {/* ELECTRICIAN */}
          <div className="glow-card">
            <h3>Electrician (apprenticeship)</h3>
            <p>
              Become a licensed journeyman through a paid apprenticeship. Strong
              long-term income and benefits.
            </p>
            <ul>
              <li>4–5 year paid apprenticeship model</li>
              <li>Union + non-union options</li>
              <li>National demand is exploding 2025–2030</li>
            </ul>
            <a
              className="path-link"
              href="https://www.electricianschooledu.org/"
              target="_blank"
              rel="noreferrer"
            >
              Electrician schools →
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <h2 className="section-title">Not sure which program fits your life?</h2>
        <p className="section-subtitle">
          Choose what matters most — income, lifestyle, timeline — and we’ll
          show the smartest path.
        </p>
        <a href="/contact" className="btn btn-primary">Ask which trade is best</a>
      </section>

    </Layout>
  );
}
