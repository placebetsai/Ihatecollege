import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ihatecollege.com – College is overpriced bullshit. Here are your REAL options.</title>
        <meta
          name="description"
          content="Skip the debt trap. See trades, tech careers, certs, bootcamps and other paths that don’t require $200k in tuition."
        />
      </Head>

      <section className="hero-section">
        <div className="hero-kicker">
          YOU DON&apos;T HAVE TO SIGN YOUR LIFE AWAY
        </div>

        <h1 className="hero-title">
          College is overpriced bullshit.
          <br />
          Here are your <span className="highlight">REAL</span> options.
        </h1>

        <p className="hero-subtitle">
          Skip the debt trap. Get the truth about trades, tech careers, certifications,
          alternative education, and jobs that don&apos;t require $200k in tuition.
        </p>

        <div className="hero-buttons">
          <Link href="/Alternatives" className="btn-primary">
            Alternatives
          </Link>
          <Link href="/debt-calculator" className="btn-secondary">
            Cost Calculator
          </Link>
        </div>

        <div className="card-grid">
          <article className="info-card">
            <h3>Alternatives</h3>
            <p>
              Trades, tech certs, bootcamps, and real high-income paths you can start
              faster than a 4-year.
            </p>
          </article>

          <article className="info-card">
            <h3>Cheat Sheets</h3>
            <p>
              Study guides, job scripts, “email the professor” templates, and exam tips.
            </p>
          </article>

          <article className="info-card">
            <h3>Cost Calculator</h3>
            <p>
              See what your degree REALLY costs once interest and repayment hit.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
