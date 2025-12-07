// pages/civil-service.js
import Layout from "../components/Layout";

export default function CivilService() {
  return (
    <Layout title="Civil Service & Government Jobs – No Degree Paths">
      <section className="hero">
        <p className="eyebrow">BENEFITS. PENSION. REAL JOB SECURITY.</p>
        <h1 className="hero-title">Government jobs that don&apos;t require a degree</h1>
        <p className="hero-subtitle">
          Federal, state, and city jobs that hire based on tests, experience, or
          training — not a bachelor&apos;s degree.
        </p>
      </section>

      <section className="section">
        <div className="path-grid">
          {/* Federal jobs */}
          <div className="path-card">
            <h3>Federal jobs (USAJobs.gov)</h3>
            <p className="path-body">
              Entry-level federal roles in agencies like USPS, TSA, Customs,
              Homeland Security, and VA. Many list “high school diploma or
              equivalent” as the education requirement.
            </p>
            <ul className="path-list">
              <li>Clerical &amp; admin staff</li>
              <li>Border &amp; transportation security</li>
              <li>Veterans support, call centers, tech support</li>
            </ul>
            <p className="path-link">
              <a
                href="https://www.usajobs.gov"
                target="_blank"
                rel="noreferrer"
              >
                Search USAJobs (no degree filter) →
              </a>
            </p>
          </div>

          {/* Postal worker */}
          <div className="path-card">
            <h3>USPS &amp; delivery</h3>
            <p className="path-body">
              Mail carriers, clerks, and processing roles with strong benefits,
              OT, and internal promotion paths.
            </p>
            <ul className="path-list">
              <li>Starting hourly pay + OT</li>
              <li>Health, retirement, and union protection</li>
              <li>Clear promotion ladders</li>
            </ul>
            <p className="path-link">
              <a
                href="https://about.usps.com/careers/"
                target="_blank"
                rel="noreferrer"
              >
                USPS careers →
              </a>
            </p>
          </div>

          {/* City & state */}
          <div className="path-card">
            <h3>City &amp; county jobs</h3>
            <p className="path-body">
              Firefighting, police, 911 dispatch, sanitation, transit, public
              works, parks, and more. Often test-based instead of degree-based.
            </p>
            <ul className="path-list">
              <li>Firefighter and EMT</li>
              <li>Police and corrections</li>
              <li>Transit operators &amp; maintenance</li>
            </ul>
            <p className="path-link">
              Search: <strong>&quot;[your city] civil service jobs&quot;</strong>{" "}
              on Google to find your local listing.
            </p>
          </div>

          {/* Why this path */}
          <div className="path-card">
            <h3>Why this path hits different</h3>
            <ul className="path-list">
              <li>Benefits from day one</li>
              <li>Pension or retirement plan</li>
              <li>Overtime + union protection</li>
              <li>Transfer options across locations</li>
            </ul>
            <p className="path-link">
              <a href="/debt-calculator">Compare gov job pay vs student loans →</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
