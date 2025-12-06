import { useState } from "react";
import Layout from "../components/Layout";

export default function DebtCalculator() {
  const [tuition, setTuition] = useState("");
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(10);

  const calculate = () => {
    const P = Number(tuition);
    const r = Number(rate) / 100 / 12;
    const n = years * 12;

    const payment = (P * r) / (1 - Math.pow(1 + r, -n));
    return payment ? payment.toFixed(2) : "0.00";
  };

  return (
    <Layout title="Debt Calculator">
      <h1>College Debt Calculator</h1>

      <p style={{ opacity: 0.85 }}>
        See what your loans REALLY cost before signing your life away.
      </p>

      <div className="card">
        <label>Tuition Amount</label>
        <input
          className="input"
          type="number"
          value={tuition}
          onChange={(e) => setTuition(e.target.value)}
        />

        <label>Interest Rate (%)</label>
        <input
          className="input"
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <label>Repayment Years</label>
        <input
          className="input"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />

        <div className="btn" onClick={calculate}>
          Calculate Monthly Payment
        </div>

        <h2>${calculate()}/month</h2>
      </div>
    </Layout>
  );
}
