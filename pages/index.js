import React from 'react';
import Link from 'next/link';
import '../styles/HomePage.css';

function Home() {
  return (
    <div className="home-wrapper">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-kicker">YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY</div>
        <h1 className="hero-title">
          College is <span className="highlight">optional.</span> Debt isn&apos;t.
        </h1>
        <p className="hero-subtitle">
          Before you lock in $50k+ of loans, compare trades, tech certs, bootcamps, and real
          alternatives. Run the numbers. Hear from students. Then decide.
        </p>

        <div className="hero-buttons">
          <Link href="/Alternatives" className="btn-primary">
            Explore alternatives
          </Link>
          <Link href="/debt-calculator" className="btn-secondary">
            Run debt calculator
          </Link>
        </div>
      </section>

      {/* SNAPSHOT / STATS */}
      <section className="stats-section">
        <h2 className="section-title">Snapshot: 4-year vs. trade / cert</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">$100k+</div>
            <div className="stat-label">Total 4-year cost with living</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4+ years</div>
            <div className="stat-label">Time stuck in class</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6–24 months</div>
            <div className="stat-label">Typical trade / cert timeline</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Often yes</div>
            <div className="stat-label">Get paid while you train</div>
          </div>
        </div>
      </section>

      {/* PATH PREVIEW */}
      <section>
        <h2 className="section-title">High-income paths that DON&apos;T require a degree</h2>
        <div className="preview-grid">
          <Link href="/Alternatives#tech" className="preview-card">
            <h3>Tech &amp; Cyber</h3>
            <p>Cybersecurity, cloud, IT support, UX / UI bootcamps.</p>
            <p>$60k–$150k • 4–12 months of training.</p>
          </Link>
          <Link href="/Alternatives#trades" className="preview-card">
            <h3>Skilled Trades</h3>
            <p>HVAC, electrician, plumbing, welding, CDL and logistics.</p>
            <p>Paid apprenticeships, real work experience.</p>
          </Link>
          <Link href="/Alternatives#nodegree" className="preview-card">
            <h3>No-Degree High Income</h3>
            <p>Sales, insurance adjusting, notary signing, real estate.</p>
            <p>Real money, real skills, no cap and gown.</p>
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <h2 className="section-title">Real people. Real results.</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Dropped out of FAU after year 2. Got Security+ and A+. Making $78k at age 20.”
            </p>
            <div className="testimonial-author">— Jake, Boca Raton</div>
          </div>
          <div className="testimonial-card">
            <p>
              “Went HVAC instead of $80k loans. Cleared $95k with overtime last year.”
            </p>
            <div className="testimonial-author">— Marco, Miami</div>
          </div>
          <div className="testimonial-card">
            <p>
              “Cloud certs took 5 months. Now making more than my mom who went to college.”
            </p>
            <div className="testimonial-author">— Rachel, Orlando</div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH CTA */}
      <section>
        <h2 className="section-title">Choose your path</h2>
        <div className="cta-grid">
          <Link href="/Alternatives#trades" className="cta-card trades">
            <div>Trades Path</div>
            <p>HVAC, electrician, welding, CDL &amp; logistics. Hands-on and in demand.</p>
          </Link>
          <Link href="/Alternatives#tech" className="cta-card tech">
            <div>Tech Path</div>
            <p>Cybersecurity, cloud, IT support, bootcamps. Remote-friendly income.</p>
          </Link>
          <Link href="/Alternatives#nodegree" className="cta-card skills">
            <div>No-Degree High-Income</div>
            <p>Sales, real estate, adjusting, notary signing. Skills that pay stupid well.</p>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} ihatecollege.com — No brochure fluff. Just reality.
      </footer>
    </div>
  );
}

export default Home;
