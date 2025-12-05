  const btnPrimary = {
    textDecoration: 'none',
    padding: '10px 18px',
    borderRadius: '999px',
    background:
      'linear-gradient(135deg, #fbbf24, #f97316)',
    color: '#111827',
    fontWeight: 700,
    fontSize: '14px',
  };

  const btnSecondary = {
    textDecoration: 'none',
    padding: '10px 18px',
    borderRadius: '999px',
    border: '1px solid rgba(148,163,184,0.6)',
    color: '#e5e7eb',
    fontSize: '14px',
  };

  const statsGrid = {
    display: 'grid',
    gap: '10px',
    marginBottom: '26px',
  };

  const statRow = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 12px',
    borderRadius: '12px',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(31,41,55,0.9)',
    fontSize: '13px',
  };

  const statLabel = { color: '#9ca3af' };
  const statValue = { fontWeight: 600, color: '#e5e7eb' };

  const sectionTitle = {
    fontSize: '20px',
    fontWeight: 700,
    margin: '26px 0 12px',
  };

  const altGrid = {
    display: 'grid',
    gap: '12px',
    marginBottom: '22px',
  };

  const altCard = {
    borderRadius: '14px',
    padding: '12px 14px',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(31,41,55,0.85)',
    textDecoration: 'none',
    color: '#e5e7eb',
    fontSize: '14px',
  };

  const altTitle = { fontWeight: 600, marginBottom: '4px' };
  const altMeta = { fontSize: '13px', color: '#9ca3af' };

  const testimonials = {
    display: 'grid',
    gap: '12px',
    marginBottom: '24px',
  };

  const tCard = {
    borderRadius: '14px',
    padding: '12px 14px',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(31,41,55,0.85)',
    fontSize: '14px',
    color: '#e5e7eb',
  };

  const tAuthor = {
    marginTop: '6px',
    fontSize: '13px',
    color: '#9ca3af',
  };

  const pathGrid = {
    display: 'grid',
    gap: '8px',
    marginBottom: '16px',
  };

  const pathLink = {
    textDecoration: 'none',
    padding: '10px 14px',
    borderRadius: '999px',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(31,41,55,0.9)',
    fontSize: '14px',
    color: '#e5e7eb',
    textAlign: 'center',
  };

  const footer = {
    marginTop: '18px',
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center',
  };

  return (
    <div style={page}>
      <div style={shell}>
        {/* NAV */}
        <header style={navBar}>
          <div style={navBrand}>
            <span style={{ color: '#fbbf24' }}>IHATECOLLEGE</span>
            <span style={{ color: '#38bdf8' }}>.COM</span>
          </div>

          <nav style={navLinks}>
            <span style={navActive}>Home</span>
            <Link href="/Alternatives" style={navLink}>
              Alternatives
            </Link>
            <Link href="/debt-calculator" style={navLink}>
              Debt Calculator
            </Link>
            <Link href="/cheat-sheets" style={navLink}>
              Cheat Sheets
            </Link>
            <Link href="/rank-your-school" style={navLink}>
              Rank Your School
            </Link>
            <Link href="/contact" style={navLink}>
              Contact
            </Link>
          </nav>
        </header>

        {/* HERO CARD */}
        <main style={heroCard}>
          <div style={heroKicker}>YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY</div>
          <h1 style={heroTitle}>
            College is <span style={highlight}>optional.</span> Debt isn&apos;t.
          </h1>
          <p style={heroSubtitle}>
            Before you lock in $50k+ of loans, compare trades, tech certs,
            bootcamps, and real alternatives. Run the numbers. Hear from
            students. Then decide.
          </p>

          <div style={heroButtons}>
            <Link href="/Alternatives" style={btnPrimary}>
              Explore alternatives
            </Link>
            <Link href="/debt-calculator" style={btnSecondary}>
              See what your degree really costs
            </Link>
          </div>

          {/* SNAPSHOT ROWS */}
          <div style={statsGrid}>
            <div style={statRow}>
              <span style={statLabel}>Avg 4-year total cost</span>
              <span style={statValue}>$100k+ with living costs</span>
            </div>
            <div style={statRow}>
              <span style={statLabel}>Time in class</span>
              <span style={statValue}>4+ years</span>
            </div>
            <div style={statRow}>
              <span style={statLabel}>Typical trade/cert path</span>
              <span style={statValue}>6–24 months</span>
            </div>
            <div style={statRow}>
              <span style={statLabel}>Working while you train?</span>
              <span style={statValue}>Often yes (apprenticeships)</span>
            </div>
          </div>

          {/* ALTERNATIVE PREVIEW */}
          <h2 style={sectionTitle}>High-income paths that DON&apos;T require a degree</h2>
          <div style={altGrid}>
            <Link href="/Alternatives#tech" style={altCard}>
              <div style={altTitle}>Tech &amp; Cyber</div>
              <div style={altMeta}>
                Cybersecurity • Cloud • IT Support • UX/UI Bootcamps
              </div>
              <div style={altMeta}>$60k–$150k • 4–12 months</div>
            </Link>

            <Link href="/Alternatives#trades" style={altCard}>
              <div style={altTitle}>Skilled Trades</div>
              <div style={altMeta}>HVAC • Electrician • Welding • CDL</div>
              <div style={altMeta}>Paid apprenticeships • Job security</div>
            </Link>

            <Link href="/Alternatives#nodegree" style={altCard}>
              <div style={altTitle}>No-Degree High-Income</div>
              <div style={altMeta}>Real estate • Sales • Adjusting • Notary</div>
              <div style={altMeta}>Skill-based income, no campus</div>
            </Link>
          </div>

          {/* TESTIMONIALS */}
          <h2 style={sectionTitle}>Real people. Real results.</h2>
          <div style={testimonials}>
            <div style={tCard}>
              <p>
                “Dropped out of FAU after year 2. Got Security+ and A+. Making
                $78k at age 20.”
              </p>
              <div style={tAuthor}>— Jake, Boca Raton</div>
            </div>
            <div style={tCard}>
              <p>
                “Went HVAC instead of $80k loans. Cleared $95k with overtime
                last year.”
              </p>
              <div style={tAuthor}>— Marco, Miami</div>
            </div>
            <div style={tCard}>
              <p>
                “Cloud certs took 5 months. Now making more than my mom who went
                to college.”
              </p>
              <div style={tAuthor}>— Rachel, Orlando</div>
            </div>
          </div>

          {/* PATH CTA */}
          <h2 style={sectionTitle}>Choose your path</h2>
          <div style={pathGrid}>
            <Link href="/Alternatives#trades" style={pathLink}>
              Trades Path
            </Link>
            <Link href="/Alternatives#tech" style={pathLink}>
              Tech Path
            </Link>
            <Link href="/Alternatives#nodegree" style={pathLink}>
              No-Degree High Income
            </Link>
          </div>

          <div style={footer}>
            © {new Date().getFullYear()} ihatecollege.com — No brochure fluff.
          </div>
        </main>
      </div>
    </div>
  );
                         }
