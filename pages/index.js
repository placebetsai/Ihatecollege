import Link from 'next/link';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ihatecollege.com – Real talk about college, debt, and alternatives</title>
        <meta
          name="description"
          content="College is optional. Debt isn't. See real alternatives, run a debt calculator, and get cheat sheets for surviving school without getting buried."
        />
      </Head>

      <section className="hero-section">
        <div className="hero-kicker">YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY</div>
        <h1 className="hero-title">
          College is <span className="highlight">optional</span>. Debt isn&apos;t.
        </h1>
        <p className="hero-subtitle">
          Before you lock in $50k+ of loans, compare trades, tech certs, bootcamps,
          and real alternatives. Run the numbers. Hear from students. Then decide.
        </p>

        <div className="hero-buttons">
          <Link href="/alternatives" className="btn-primary">
            Explore alternatives
          </Link>
          <Link href="/debt-calculator" className="btn-secondary">
            Run debt calculator
          </Link>
        </div>

        <div className="card-grid">
          <div className="info-card">
            <h3>Debt calculator</h3>
            <p>Plug in tuition, loans, and interest. See how many years your degree actually costs you.</p>
          </div>
          <div className="info-card">
            <h3>Trades &amp; tech paths</h3>
            <p>HVAC, electrician, cybersecurity, cloud, UX, data. Real paths with shorter timelines.</p>
          </div>
          <div className="info-card">
            <h3>Cheat sheet vault</h3>
            <p>Exam templates, “I need an extension” emails, loan call scripts, and more coming online.</p>
          </div>
        </div>
      </section>
    </>
  );
}
