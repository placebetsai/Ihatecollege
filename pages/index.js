import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="header">
        <a href="/" className="header-logo">IHATECOLLEGE.COM</a>

        <nav className="nav-desktop">
          <a href="/">Home</a>
          <a href="/alternatives">Alternatives</a>
          <a href="/debt-calculator">Debt Calculator</a>
          <a href="/cheat-sheets">Cheat Sheets</a>
          <a href="/rank-your-school">Rank Your School</a>
          <a href="/liberal-vs-conservative">Liberal vs Conservative</a>
          <a href="/trade-schools">Trade Schools</a>
          <a href="/civil-service">Civil Service</a>
          <a href="/contact">Contact</a>
        </nav>

        <button className="nav-toggle" id="mobileNavToggle">
          <div className="nav-toggle-circle"></div>
        </button>
      </header>

      <nav className="nav-mobile" id="mobileNavMenu">
        <a href="/">Home</a>
        <a href="/alternatives">Alternatives</a>
        <a href="/debt-calculator">Debt Calculator</a>
        <a href="/cheat-sheets">Cheat Sheets</a>
        <a href="/rank-your-school">Rank Your School</a>
        <a href="/liberal-vs-conservative">Liberal vs Conservative</a>
        <a href="/trade-schools">Trade Schools</a>
        <a href="/civil-service">Civil Service</a>
        <a href="/contact">Contact</a>
      </nav>

      <section className="hero-card">
        <p className="hero-kicker">YOU DON'T HAVE TO SIGN YOUR LIFE AWAY</p>

        <h1 className="hero-title">
          College is <span className="hero-highlight">optional.</span><br />
          Debt isn't.
        </h1>

        <p className="hero-body">
          Before you sign away $50k–$150k, compare trades, tech careers, 
          apprenticeships, bootcamps, and real alternatives. Run the numbers. 
          Hear from real people. Then decide.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary">Explore alternatives</a>
          <a className="btn btn-outline">See what your degree really costs</a>
        </div>
      </section>
    </main>
  );
    }
