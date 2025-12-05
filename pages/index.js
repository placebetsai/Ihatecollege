import React from 'react';
import Link from 'next/link';
import '../styles/HomePage.css';

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-kicker">YOU DON’T HAVE TO SIGN YOUR LIFE AWAY</div>
        <h1 className="hero-title">
          College is <span className="highlight">optional.</span> Debt isn’t.
        </h1>

        <p className="hero-subtitle">
          Before you lock in $50k+ of loans, compare trades, tech certs, bootcamps,
          and real alternatives. Run the numbers. Hear from students. Then decide.
        </p>

        <div className="hero-buttons">
          <Link href="/Alternatives" className="btn-primary">Explore alternatives</Link>
          <Link href="/debt-calculator" className="btn-secondary">Run debt calculator</Link>
        </div>
      </section>


      {/* SNAPSHOT */}
      <section className="stats-section">
        <h2 className="section-title">Snapshot: 4-year vs. trade/cert</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">$100k+</div>
            <div className="stat-label">Avg 4-year cost w/ living</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4+ years</div>
            <div className="stat-label">Time in class</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6–24 months</div>
            <div className="stat-label">Typical trade/cert path</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Often yes</div>
            <div className="stat-label">Paid while you train</div>
          </div>
        </div>
      </section>


      {/* PREVIEW GRID */}
      <section>
        <h2 className="section-title">High-income paths that DON’T require a degree</h2>

        <div className="preview-grid">
          <Link href="/Alternatives#tech" className="preview-card">
            <h3>Tech + Cyber</h3>
            <p>Cybersecurity, cloud, IT support, UX/UI bootcamps.</p>
            <p>$60k–$150k careers • 4–12 months training</p>
          </Link>

          <Link href="/Alternatives#trades" className="preview-card">
            <h3>Trades</h3>
            <p>HVAC, Electrician, Welding, CDL.</p>
            <p>Paid apprenticeships • Job security</p>
          </Link>

          <Link href="/Alternatives#nodegree" className="preview-card">
            <h3>No-Degree High-Income</h3>
            <p>Sales, real estate, adjusting, notary signing.</p>
            <p>Skills that pay stupid well</p>
          </Link>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section>
        <h2 className="section-title">Real people. Real results.</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Dropped out of FAU after year 2. Got Security+ and A+. Making $78k at age 20.”</p>
            <div className="testimonial-author">— Jake, Boca Raton</div>
          </div>

          <div className="testimonial-card">
            <p>“Went HVAC instead of $80k loans. Cleared $95k with overtime last year.”</p>
            <div className="testimonial-author">— Marco, Miami</div>
          </div>

          <div className="testimonial-card">
            <p>“Cloud certs took 5 months. Now making more than my mom who went to college.”</p>
            <div className="testimonial-author">— Rachel, Orlando</div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section>
        <h2 className="section-title">Choose your path</h2>

        <div className="cta-grid">
          <Link href="/Alternatives#trades" className="cta-card">
            Trades Path
          </Link>

          <Link href="/Alternatives#tech" className="cta-card">
            Tech Path
          </Link>

          <Link href="/Alternatives#nodegree" className="cta-card">
            No-Degree High Income
          </Link>
        </div>
      </section>


      <footer className="footer">
        © {new Date().getFullYear()} ihatecollege.com — No brochure fluff.
      </footer>
    </div>
  );
        }
