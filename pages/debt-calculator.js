// pages/debt-calculator.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useState } from "react";

export default function DebtCalculator() {
  const [tuition, setTuition] = useState("");
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(10);
  const [payment, setPayment] = useState(null);

  const calculatePayment = () => {
    const P = parseFloat(tuition);
    const r = rate / 100 / 12;
    const n = years * 12;

    if (!P || P <= 0) return;

    const monthly = (P * r) / (1 - Math.pow(1 + r, -n));
    setPayment(monthly.toFixed(2));
  };

  return (
    <Layout>
      <SEO
        title="Student Debt Calculator | IHateCollege.com"
        description="See the REAL monthly cost of student loans before you borrow. Compare debt vs trade schools and cert paths."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">SEE THE REAL NUMBERS</p>

        <h1 className="hero-title">
          Student Loan Debt <span className="text-red-400">Reality Check</span>
        </h1>

        <p className="hero-subtitle max-w-xl mx-auto">
          Colleges hide the real cost. We don’t.  
          Enter your numbers — see what life actually looks like after graduation.
        </p>
      </section>

      {/* CALCULATOR */}
      <section className="page-section max-w-xl mx-auto">
        <div className="glow-card p-8 space-y-6">
          {/* Tuition */}
          <div>
            <label className="text-sm text-slate-400">Total Borrowed ($)</label>
            <input
              type="number"
              value={tuition}
              onChange={(e) => setTuition(e.target.value)}
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white"
              placeholder="e.g., 45000"
            />
          </div>

          {/* Rate */}
          <div>
            <label className="text-sm text-slate-400">Interest Rate (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white"
              step="0.1"
            />
          </div>

          {/* Years */}
          <div>
            <label className="text-sm text-slate-400">Repayment Term (Years)</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white"
            />
          </div>

          {/* Button */}
          <button
            onClick={calculatePayment}
            className="w-full py-3 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-300 transition"
          >
            Calculate Monthly Payment
          </button>

          {/* Result */}
          {payment && (
            <div className="text-center mt-6">
              <p className="text-cyan-300 text-xl font-bold">
                ${payment} / month
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Every month. For {years} years.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-3">There are cheaper paths.</h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-6">
          Compare this to 6–18 month career paths that cost under $500–$3000.
        </p>

        <a
          href="/cheat-sheets"
          className="px-6 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          See No-Debt Career Paths →
        </a>
      </section>
    </Layout>
  );
                }
