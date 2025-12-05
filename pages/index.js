import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>I HATE COLLEGE — The No-BS Guide to Avoiding $200k Debt</title>
      </Head>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-kicker">
          YOU DON'T HAVE TO SIGN YOUR LIFE AWAY
        </div>

        <h1 className="hero-title">
          College is <span className="highlight">optional</span>.  
          Debt isn't.
        </h1>

        <p className="hero-subtitle">
          Before you lock in $50k+ loans, compare trades, tech certs, bootcamps, and real alternatives.
        </p>

        <div className="hero-buttons">
          <Link href="/Alternatives" className="btn-primary">Explore alternatives</Link>
          <Link href="/debt-calculator" className="btn-secondary">Run debt calculator</Link>
        </div>
      </section>


      {/* WHY COLLEGE SUCKS - DATA SECTION */}
      <section className="stats-section">
        <h2 className="section-title">The truth colleges won't tell you</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">$104,480+</div>
            <div className="stat-label">Avg 4-year cost w/ living</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">41%</div>
            <div className="stat-label">Work in jobs not requiring degree</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">$37,338</div>
            <div className="stat-label">Avg student loan debt</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">10–20 yrs</div>
            <div className="stat-label">Time to pay off loans</div>
          </div>
        </div>
      </section>


      {/* PREVIEW OF ALTERNATIVES */}
      <section className="preview-section">
        <h2 className="section-title">High-income paths that DON'T require a degree</h2>

        <div className="preview-grid">
          <Link href="/Alternatives" className="preview-card">
            <h3>Cybersecurity</h3>
            <p>$60k–$120k • 6–12 months</p>
          </Link>

          <Link href="/Alternatives" className="preview-card">
            <h3>Cloud Engineering</h3>
            <p>$85k–$150k • 4–8 months</p>
          </Link>

          <Link href="/Alternatives" className="preview-card">
            <h3>Electrician Apprentice</h3>
            <p>$45k–$90k • Paid training</p>
          </Link>

          <Link href="/Alternatives" className="preview-card">
            <h3>Plumbing</h3>
            <p>$50k–$100k • Paid training</p>
          </Link>

          <Link href="/Alternatives" className="preview-card">
            <h3>UX / UI Bootcamp</h3>
            <p>$70k–$120k • 3–6 months</p>
          </Link>

          <Link href="/Alternatives" className="preview-card">
            <h3>CDL + Logistics</h3>
            <p>$65k–$120k • 1–2 months</p>
          </Link>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <h2 className="section-title">Real people. Real results.</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>“Dropped out of FAU after year 2. Got Security+ and A+. Making $78k at age 20.”</p>
            <span className="testimonial-author">— Jake, Boca Raton</span>
          </div>

          <div className="testimonial-card">
            <p>“Went HVAC instead of $80k loans. Cleared $95k with overtime last year.”</p>
            <span className="testimonial-author">— Marco, Miami</span>
          </div>

          <div className="testimonial-card">
            <p>“Cloud certs took 5 months. Now making more than my mom who went to college.”</p>
            <span className="testimonial-author">— Rachel, Orlando</span>
          </div>
        </div>
      </section>


      {/* CHOOSE YOUR PATH */}
      <section className="cta-section">
        <h2 className="section-title">Choose your path</h2>

        <div className="cta-grid">
          <Link href="/Alternatives" className="cta-card trades">
            <h3>Trades Path</h3>
            <p>HVAC • Electrician • Welding • CDL</p>
          </Link>

          <Link href="/Alternatives" className="cta-card tech">
            <h3>Tech Path</h3>
            <p>Cybersecurity • Cloud • IT Support • Bootcamps</p>
          </Link>
