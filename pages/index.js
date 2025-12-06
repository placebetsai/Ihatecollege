import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <section className="hero">
        <h1>
          College is <span className="highlight">optional</span>.  
          Debt isn’t.
        </h1>

        <p className="sub">
          Before you sign away $50k–$150k, compare trades, tech careers,
          apprenticeships, bootcamps, and real alternatives.
        </p>

        <div className="hero-buttons">
          <a href="/alternatives" className="btn-primary">Explore alternatives</a>
          <a href="/debt-calculator" className="btn-outline">See what your degree really costs</a>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat">
          <span>Avg 4-Year Cost</span>
          <strong>$100k+</strong>
        </div>
        <div className="stat">
          <span>Time in Class</span>
          <strong>4+ Years</strong>
        </div>
        <div className="stat">
          <span>Trade/Cert Path</span>
          <strong>6–24 Months</strong>
        </div>
        <div className="stat">
          <span>Work While Training?</span>
          <strong>Often Yes</strong>
        </div>
      </section>

      {/* Paths */}
      <section className="paths">
        <h2>High-income paths that DON’T require a degree</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Tech & Cyber</h3>
            <p>Cloud, Cybersecurity, IT Support, UX/UI</p>
            <a href="https://www.coursera.org/professional-certificates/google-it-support" target="_blank">
              Google IT Support →
            </a>
          </div>

          <div className="card">
            <h3>Skilled Trades</h3>
            <p>HVAC, Electrician, Welding, CDL</p>
            <a href="https://www.apprenticeship.gov/apprenticeship-finder" target="_blank">
              Apprenticeships →
            </a>
          </div>

          <div classname="card">
            <h3>No-Degree High Income</h3>
            <p>Sales, Real Estate, Notary, Adjusting</p>
            <a href="https://www.nmlsconsumeraccess.org/" target="_blank">
              Mortgage Licensing →
            </a>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="stories">
        <h2>Real people. Real results.</h2>

        <div className="story">
          “Dropped out after year 2. Got Security+. Making $78k at 20.”
        </div>

        <div className="story">
          “HVAC instead of $80k loans. Made $95k with overtime last year.”
        </div>

        <div className="story">
          “Cloud certs took 5 months. Now making more than my mom who went to college.”
        </div>
      </section>

      {/* Choose Path */}
      <section className="choose">
        <h2>Choose your path</h2>
        <div className="choose-grid">
          <a href="/trade-schools" className="choose-btn">Trades Path</a>
          <a href="/alternatives" className="choose-btn">Tech Path</a>
          <a href="/no-degree" className="choose-btn">No-Degree High Income</a>
        </div>
      </section>
    </Layout>
  );
        }
