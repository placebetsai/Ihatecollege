// pages/alternatives.js
import Layout from "../components/Layout";

export default function AlternativesPage() {
  return (
    <Layout title="Alternatives to the 4-year degree">
      {/* Intro */}
      <section className="section">
        <h1 className="section-title">
          Real alternatives to the 4-year degree
        </h1>
        <p className="section-subtitle">
          You don&apos;t have to live on campus, take random electives, and
          borrow $80k to get a solid career. Here are paths people actually use
          to make real money without a traditional degree.
        </p>
      </section>

      {/* Paths grid – reuse same card styles as homepage */}
      <section className="section">
        <h2 className="section-title">Pick a lane that fits your life</h2>

        <div className="path-grid">
          <div className="path-card">
            <h3>Tech &amp; Cyber</h3>
            <p className="path-body">
              For people who like computers, problem-solving, and remote work.
            </p>
            <ul className="path-list">
              <li>Google IT Support / Cyber certs</li>
              <li>CompTIA A+, Network+, Security+</li>
              <li>Cloud certs (AWS, Azure, GCP)</li>
              <li>Helpdesk → sysadmin → cloud engineer</li>
            </ul>
            <p className="path-link">
              Use cheap online courses + lab time instead of tuition.
            </p>
          </div>

          <div className="path-card">
            <h3>Skilled Trades</h3>
            <p className="path-body">
              For people who like building, fixing, and seeing the result of
              their work every day.
            </p>
            <ul className="path-list">
              <li>HVAC, electrician, welding, plumbing</li>
              <li>Paid apprenticeships instead of paying tuition</li>
              <li>Union benefits, OT, and strong job security</li>
              <li>Ability to start your own shop later</li>
            </ul>
            <p className="path-link">
              Check local unions &amp; trade schools before signing any loans.
            </p>
          </div>

          <div className="path-card">
            <h3>No-Degree High Income</h3>
            <p className="path-body">
              For people who like talking to people, selling, or running their
              own thing.
            </p>
            <ul className="path-list">
              <li>Real-estate agent or loan officer</li>
              <li>Insurance &amp; public adjusting</li>
              <li>Notary &amp; loan-signing work</li>
              <li>Sales roles with commission &amp; bonuses</li>
            </ul>
            <p className="path-link">
              License + hustle &gt; tuition + dorm &amp; dining plan.
            </p>
          </div>
        </div>
      </section>

      {/* Simple 3–step guide */}
      <section className="section">
        <h2 className="section-title">How to pick a path in 3 steps</h2>
        <ol className="steps-list">
          <li>
            <strong>Reality check your numbers.</strong> Use the Debt Calculator
            page to see what your &quot;dream&quot; degree actually costs
            monthly.
          </li>
          <li>
            <strong>Match your lifestyle.</strong> Need money fast? Look at
            trades or sales. Want remote work? Lean to tech &amp; cyber.
          </li>
          <li>
            <strong>Commit to a 6–12 month sprint.</strong> Treat your cert,
            license, or apprenticeship like a full-time mission. No half-assing.
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="section section-cta">
        <h2 className="section-title">Next move: pick one thing to explore</h2>
        <p className="section-subtitle">
          Don&apos;t doom-scroll degree rankings. Click into a path and find one
          cert, license, or apprenticeship you could actually start this month.
        </p>
        <div className="cta-buttons">
          <a href="/trade-schools" className="btn btn-pill">
            Explore trade schools
          </a>
          <a href="/cheat-sheets" className="btn btn-pill">
            See cheat sheets
          </a>
          <a href="/debt-calculator" className="btn btn-pill">
            Run the debt calculator
          </a>
        </div>
      </section>
    </Layout>
  );
              }
