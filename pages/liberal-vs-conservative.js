// pages/liberal-vs-conservative.js
import Layout from "../components/Layout";

export default function LiberalVsConservative() {
  return (
    <Layout title="Liberal vs Conservative Colleges – Campus Vibes">
      <section className="hero">
        <p className="eyebrow">PICK YOUR CAMPUS VIBE</p>
        <h1 className="hero-title">Liberal vs. conservative colleges</h1>
        <p className="hero-subtitle">
          Based on student reviews and public rankings of campus politics and
          culture — not who the president of the school voted for.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Most liberal-leaning campuses (examples)</h2>
        <p className="section-subtitle">
          These schools regularly show up near the top of &quot;Most Liberal
          Colleges&quot; lists and student reviews of campus politics.
        </p>

        <div className="path-grid">
          <div className="path-card">
            <ul className="path-list">
              <li>American University (DC)</li>
              <li>University of Vermont</li>
              <li>Oberlin College</li>
              <li>UC Berkeley</li>
              <li>Wesleyan University</li>
              <li>Sarah Lawrence College</li>
              <li>Brown University</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.niche.com/colleges/search/most-liberal-colleges/"
                target="_blank"
                rel="noreferrer"
              >
                See full &quot;Most Liberal Colleges&quot; list →
              </a>
            </p>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: "2.5rem" }}>
          Most conservative-leaning campuses (examples)
        </h2>
        <p className="section-subtitle">
          Often religious or traditional schools where campus culture and rules
          lean right or emphasize conservative values.
        </p>

        <div className="path-grid">
          <div className="path-card">
            <ul className="path-list">
              <li>Liberty University</li>
              <li>Brigham Young University (BYU)</li>
              <li>Grove City College</li>
              <li>Bob Jones University</li>
              <li>Cedarville University</li>
              <li>Colorado Christian University</li>
              <li>Hillsdale College</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.niche.com/colleges/search/most-conservative-colleges/"
                target="_blank"
                rel="noreferrer"
              >
                See full &quot;Most Conservative Colleges&quot; list →
              </a>
            </p>
          </div>
        </div>

        <section className="section-cta" style={{ marginTop: "3rem" }}>
          <h2 className="section-title">Why it matters</h2>
          <p className="section-subtitle">
            Campus politics affect classroom culture, what gets said out loud,
            dating, social life, and how comfortable you feel if you disagree
            with the majority.
          </p>
          <div className="cta-buttons">
            <a href="/rank-your-school" className="btn btn-pill">
              Rank your school&apos;s vibe
            </a>
            <a href="/alternatives" className="btn btn-pill">
              See non-college options
            </a>
          </div>
        </section>
      </section>
    </Layout>
  );
}
