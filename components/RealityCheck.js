import React, { useMemo, useState } from "react";

export default function RealityCheck() {
  const [loanTotal, setLoanTotal] = useState("");
  const [interestRate, setInterestRate] = useState("5");
  const [yearsToPay, setYearsToPay] = useState("10");
  const [startingSalary, setStartingSalary] = useState("");
  const [percentToLoans, setPercentToLoans] = useState("10");

  const result = useMemo(() => {
    const P = parseFloat(loanTotal || "0"); // principal
    const apr = parseFloat(interestRate || "0") / 100;
    const years = parseFloat(yearsToPay || "0");
    const salary = parseFloat(startingSalary || "0");
    const pct = parseFloat(percentToLoans || "0") / 100;

    if (!P || !years || !salary) return null;

    const n = years * 12;
    const r = apr / 12;
    let monthlyPayment;

    if (r === 0) {
      monthlyPayment = P / n;
    } else {
      monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    }

    const takeHomeGuess = salary * 0.75; // rough after-tax
    const suggestedMaxPayment = takeHomeGuess * pct;
    const loanToIncome = salary > 0 ? P / salary : null;

    let verdict = "Manageable if you stay disciplined.";
    let tone = "medium";

    if (loanToIncome !== null) {
      if (loanToIncome <= 0.5) {
        verdict = "Pretty reasonable compared to your income.";
        tone = "good";
      } else if (loanToIncome <= 1) {
        verdict = "Heavy but doable. You’ll feel it, but it’s not insane.";
        tone = "medium";
      } else if (loanToIncome <= 2) {
        verdict =
          "Brutal territory. You’re signing up for a serious drag on your 20s.";
        tone = "bad";
      } else {
        verdict =
          "Nuke-level. More debt than your *full* starting salary – rethink the plan hard.";
        tone = "worst";
      }
    }

    const yearsIfPaySuggested =
      suggestedMaxPayment > 0
        ? (P * (1 + apr)) / (suggestedMaxPayment * 12)
        : null;

    return {
      monthlyPayment,
      suggestedMaxPayment,
      loanToIncome,
      verdict,
      tone,
      yearsIfPaySuggested,
    };
  }, [loanTotal, interestRate, yearsToPay, startingSalary, percentToLoans]);

  const toneColor =
    result?.tone === "good"
      ? "text-emerald-300"
      : result?.tone === "medium"
      ? "text-amber-300"
      : result?.tone === "bad"
      ? "text-rose-300"
      : "text-rose-400";

  return (
    <section id="reality" className="mt-12 space-y-4">
      <div>
        <p className="section-label">
          <span className="section-label-dot" />
          Loan reality check
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
          Is this degree worth the debt hangover?
        </h2>
        <p className="mt-1 text-sm text-slate-300">
          Plug in rough numbers — no need to be perfect. This isn&apos;t
          official financial advice, just a cold shower before you sign another
          loan.
        </p>
      </div>

      <div className="card-smooth grid gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        {/* Inputs */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Total loans you&apos;ll graduate with
            </label>
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-slate-900/70 px-3 py-2 text-sm text-slate-400">
                $
              </span>
              <input
                type="number"
                min="0"
                value={loanTotal}
                onChange={(e) => setLoanTotal(e.target.value)}
                placeholder="30000"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Interest rate (APR)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <span className="rounded-xl bg-slate-900/70 px-3 py-2 text-sm text-slate-400">
                  %
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Years to pay it off
              </label>
              <input
                type="number"
                min="1"
                value={yearsToPay}
                onChange={(e) => setYearsToPay(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                % of take-home you can send to loans
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={percentToLoans}
                onChange={(e) => setPercentToLoans(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Realistic starting salary for your path
            </label>
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-slate-900/70 px-3 py-2 text-sm text-slate-400">
                $
              </span>
              <input
                type="number"
                min="0"
                value={startingSalary}
                onChange={(e) => setStartingSalary(e.target.value)}
                placeholder="45000"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>
          </div>

          <p className="text-[11px] text-slate-400">
            We&apos;re assuming ~25% is taken out for taxes to ballpark
            take-home pay. It&apos;s meant to be a gut check, not a perfect
            financial model.
          </p>
        </div>

        {/* Output */}
        <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Your stress report
          </h3>

          {!result ? (
            <p className="text-sm text-slate-400">
              Fill in the loan total, years, and salary to see how spicy this
              debt really is.
            </p>
          ) : (
            <>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Monthly payment (to finish in {yearsToPay} years)
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    ${result.monthlyPayment.toFixed(0).toLocaleString()}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-950/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    Max you said you can send to loans
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    ${result.suggestedMaxPayment.toFixed(0).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Loan-to-income ratio
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  {result.loanToIncome !== null
                    ? `${result.loanToIncome.toFixed(2)}x your starting salary`
                    : "—"}
                </p>
                {result.yearsIfPaySuggested && (
                  <p className="mt-1 text-xs text-slate-400">
                    If you actually send that % of your take-home, you&apos;d
                    pay this off in roughly{" "}
                    <span className="font-semibold text-slate-200">
                      {result.yearsIfPaySuggested.toFixed(1)} years
                    </span>
                    .
                  </p>
                )}
              </div>

              <div className="rounded-2xl bg-slate-950/80 p-3">
                <p className={`text-sm font-semibold ${toneColor}`}>
                  {result.verdict}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  If this looks ugly, that doesn&apos;t mean &quot;give up on
                  life.&quot; It means renegotiating the play: cheaper school,
                  transfer plan, trades, bootcamps, or stacking certs instead of
                  four more years of debt.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
    }
