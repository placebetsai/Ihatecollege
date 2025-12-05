import Head from 'next/head';
import { useState } from 'react';

export default function DebtCalculatorPage() {
  const [tuition, setTuition] = useState('');
  const [years, setYears] = useState('4');
  const [interest, setInterest] = useState('5.5');
  const [repayYears, setRepayYears] = useState('10');
  const [result, setResult] = useState(null);

  function handleCalculate(e) {
    e.preventDefault();
    const p = parseFloat(tuition || '0');
    const programYears = parseFloat(years || '0');
    const r = parseFloat(interest || '0') / 100 / 12;
    const n = parseFloat(repayYears || '0') * 12;

    if (!p || !r || !n) {
      setResult(null);
      return;
    }

    const monthly =
      (p * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalPaid = monthly * n;
    const extraInterest = totalPaid - p;

    setResult({
      monthly: monthly.toFixed(0),
      totalPaid: totalPaid.toFixed(0),
      extraInterest: extraInterest.toFixed(0),
      programYears,
    });
  }

  return (
    <>
      <Head>
        <title>Student debt reality check – ihatecollege.com</title>
        <meta
          name="description"
          content="Rough calculator to see what your degree might really cost once interest and repayment timelines hit."
        />
      </Head>

      <div className="page-header">
        <div className="page-kicker">DEBT REALITY CHECK</div>
        <h1 className="page-title">What does this degree actually cost?</h1>
        <p className="page-subtitle">
          Not perfect, not financial advice – just a rough calculator so you can see what
          your &quot;$25k a year&quot; school looks like once interest and repayment kick in.
        </p>
      </div>

      <form className="calculator-box" onSubmit={handleCalculate}>
        <div className="calculator-grid">
          <div>
            <label>
              Total tuition &amp; fees for the whole program
              <input
                type="number"
                min="0"
                placeholder="e.g. 80000"
                value={tuition}
                onChange={(e) => setTuition(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Years in school
              <input
                type="number"
                min="1"
                max="8"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Interest rate (%)
              <input
                type="number"
                min="0"
                step="0.1"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Repayment length (years)
              <input
                type="number"
                min="1"
                max="30"
                value={repayYears}
                onChange={(e) => setRepayYears(e.target.value)}
              />
            </label>
          </div>
        </div>

        <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
          See the damage
        </button>

        {result && (
          <div className="calculator-result">
            <p>
              <strong>Estimated monthly payment:</strong> ${result.monthly}
            </p>
            <p>
              <strong>Total paid over {repayYears} years:</strong> ${result.totalPaid}
            </p>
            <p>
              <strong>Interest on top of tuition:</strong> ${result.extraInterest}
            </p>
          </div>
        )}
      </form>

      <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#9ca3af' }}>
        This is a rough estimate only. Talk to a real financial advisor or your loan servicer
        before you make decisions.
      </p>
    </>
  );
                           }
