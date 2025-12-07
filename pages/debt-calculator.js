// pages/debt-calculator.js
import { useState } from "react";
import Layout from "../components/Layout";

export default function DebtCalculator() {
  const [tuition, setTuition] = useState(25000);
  const [years, setYears] = useState(4);
  const [living, setLiving] = useState(18000);
  const [interest, setInterest] = useState(6.5);
  const [repayYears, setRepayYears] = useState(10);

  const totalBorrowed = tuition * years + living * years;
  const monthlyRate = interest / 100 / 12;
  const numPayments = repayYears * 12;
  const monthlyPayment =
    totalBorrowed && monthlyRate
      ? (totalBorrowed * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numPayments))
      : 0;
  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - totalBorrowed;

  return (
    <Layout title="College Debt Calculator – The Real Cost">
      <section className="hero">
        <p className="eyebrow">BEFORE YOU SIGN ANYTHING</p>
        <h1 className="hero-title">See what your loans really cost</h1>
        <p className="hero-subtitle">
          Tuition, housing, and food add up fast. Slide the numbers and see your
          real monthly payment and how much interest the bank actually makes off
          you.
        </p>

        <div className="path-grid" style={{ margin: "2rem 0" }}>
          <div className="path-card">
            <h3>Yearly tuition</h3>
            <input
              type="range"
              min="8000"
              max="70000"
              step="1000"
              value={tuition}
              onChange={(e) => setTuition(Number(e.target.value))}
            />
            <p className="stat-value" style={{ marginTop: "0.5rem" }}>
              ${tuition.toLocaleString()}/year
            </p>
          </div>

          <div className="path-card">
            <h3>Living costs (housing + food)</h3>
            <input
              type="range"
              min="0"
              max="35000"
              step="1000"
              value={living}
              onChange={(e) => setLiving(Number(e.target.value))}
            />
            <p className="stat-value" style={{ marginTop: "0.5rem" }}>
              ${living.toLocaleString()}/year
            </p>
          </div>

          <div className="path-card">
            <h3>Years in school</h3>
            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
            <p className="stat-value" style={{ marginTop: "0.5rem" }}>
              {years} years
            </p>
          </div>

          <div className="path-card">
            <h3>Interest &amp; repayment</h3>
            <label className="stat-label">
              Interest rate: {interest.toFixed(1)}%
            </label>
            <input
              type="range"
              min="3"
              max="10"
              step="0.1"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
            <label className="stat-label" style={{ marginTop: "0.6rem" }}>
              Repayment years: {repayYears}
            </label>
            <input
              type="range"
              min="5"
              max="25"
              step="1"
              value={repayYears}
              onChange={(e) => setRepayYears(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-label">Total borrowed</span>
            <span className="stat-value">
              ${totalBorrowed.toLocaleString()}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Monthly payment</span>
            <span className="stat-value">
              ${monthlyPayment.toFixed(0)}/month
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Total repaid</span>
            <span className="stat-value">
              ${totalPaid.toLocaleString()}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Interest paid to lender</span>
            <span className="stat-value">
              ${totalInterest.toLocaleString()}
            </span>
          </div>
        </div>

        <section className="section-cta" style={{ marginTop: "2rem" }}>
          <h2 className="section-title">
            Now compare that monthly bill to a trade or cert.
          </h2>
          <div className="cta-buttons">
            <a href="/trade-schools" className="btn btn-pill">
              See trade school options
            </a>
            <a href="/alternatives" className="btn btn-pill">
              Explore non-degree paths
            </a>
          </div>
        </section>
      </section>
    </Layout>
  );
                }
