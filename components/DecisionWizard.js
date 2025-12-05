import React, { useMemo, useState } from "react";

const QUESTIONS = [
  {
    id: "debt",
    label: "If you finish on this path, your total student loans will be…",
    options: [
      { value: "low", label: "Under $15k", score: 0 },
      { value: "med", label: "$15k–$40k", score: 2 },
      { value: "high", label: "$40k–$80k", score: 4 },
      { value: "insane", label: "Over $80k", score: 6 },
    ],
  },
  {
    id: "stress",
    label: "How cooked do you feel on a typical week?",
    options: [
      { value: "ok", label: "Tired but fine", score: 0 },
      { value: "fried", label: "Stressed most weeks", score: 2 },
      { value: "burned", label: "On the edge of burnout", score: 4 },
    ],
  },
  {
    id: "grades",
    label: "Academically, where are you at?",
    options: [
      { value: "strong", label: "Mostly A/B & I can keep it up", score: 0 },
      { value: "mid", label: "Mix of B/C and dragging myself through", score: 2 },
      { value: "rough", label: "On probation / barely passing / failing", score: 4 },
    ],
  },
  {
    id: "clarity",
    label: "How clear are you on what you want after school?",
    options: [
      { value: "clear", label: "Very clear path and jobs I want", score: 0 },
      { value: "kinda", label: "Some ideas but nothing locked", score: 2 },
      { value: "lost", label: "No clue, just here because I felt I had to", score: 4 },
    ],
  },
  {
    id: "alt",
    label: "Real talk: would you be open to trades, certs, or bootcamps if the money made sense?",
    options: [
      { value: "no", label: "No, I want the classic degree", score: 0 },
      { value: "maybe", label: "Maybe, if it clearly pays", score: 1 },
      { value: "yes", label: "Yes, I’d love a faster / cheaper route", score: 2 },
    ],
  },
  {
    id: "support",
    label: "If you changed paths (transferred, paused, or left), your support system would be…",
    options: [
      { value: "strong", label: "Pretty supportive once they get it", score: 0 },
      { value: "mixed", label: "Split – some would freak, some would get it", score: 1 },
      { value: "hostile", label: "Everyone would freak and call it failure", score: 2 },
    ],
  },
];

function getOutcome(totalScore) {
  // Max score ~20. We’ll use 3 bands.
  if (totalScore <= 6) {
    return {
      label: "Stay, but fix how you’re doing it.",
      tone: "good",
      summary:
        "Your numbers aren’t screaming ‘run’. The play is tightening how you handle money, stress, and skills so this degree actually pays.",
      actions: [
        "Lock in a concrete job target & salary range for your major (not vibes – actual roles on job boards).",
        "Run the loan reality check on this site with realistic salary numbers.",
        "Cut the fluff credits and random double minors – aim for the fastest path to the finish line.",
        "Stack 1–2 certs or portfolio projects that make employers care about you beyond the diploma.",
      ],
    };
  } else if (totalScore <= 13) {
    return {
      label: "Seriously consider transferring or downsizing the cost.",
      tone: "medium",
      summary:
        "You’re in the danger zone: debt + stress + so-so clarity. Staying might still work, but not at any price and not at any campus.",
      actions: [
        "Price out 2–3 cheaper schools (including community college) where your credits would transfer.",
        "Meet with an advisor and ask only one question: ‘What’s the absolute cheapest path to graduate without wasting credits?’",
        "Audit your living costs: housing, meal plan, random fees. Where can you switch to cheaper without wrecking your sanity?",
        "Give yourself a 90-day window to research transfer options and then make a call instead of drifting.",
      ],
    };
  } else {
    return {
      label: "You need a real Plan B. Staying on autopilot is a bad bet.",
      tone: "bad",
      summary:
        "High debt, high stress, low clarity – that combo is brutal. You’re not a failure, but the current plan might be.",
      actions: [
        "Map out 2–3 non-degree routes: trades, certs, bootcamps, or work + certs. Compare cost, timeline, and realistic starting pay.",
        "Talk to one real human in each route (electrician, cloud support, UX bootcamp grad, etc.) and ask what they actually earn.",
        "If you step off campus, do it with a written 6–12 month plan, not a rage-quit. Dates, skills, and income targets.",
        "Loop in one adult who isn’t a hater (mentor, older cousin, coworker) to sanity-check the plan before you pull the trigger.",
      ],
    };
  }
}

export default function DecisionWizard() {
  const [answers, setAnswers] = useState({});

  const totalScore = useMemo(() => {
    return QUESTIONS.reduce((sum, q) => {
      const chosen = answers[q.id];
      const opt = q.options.find((o) => o.value === chosen);
      return sum + (opt?.score || 0);
    }, 0);
  }, [answers]);

  const completedCount = Object.keys(answers).length;
  const allAnswered = completedCount === QUESTIONS.length;
  const outcome = allAnswered ? getOutcome(totalScore) : null;

  const toneColor =
    outcome?.tone === "good"
      ? "text-emerald-300"
      : outcome?.tone === "medium"
      ? "text-amber-300"
      : "text-rose-300";

  return (
    <section id="wizard" className="mt-12 space-y-4">
      <div>
        <p className="section-label">
          <span className="section-label-dot" />
          5-minute decision tool
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
          Should you stay, transfer, or bounce?
        </h2>
        <p className="mt-1 text-sm text-slate-300">
          Zero judgment. Answer honestly and we&apos;ll spit out a blunt read on
          whether this path is worth riding out as-is.
        </p>
      </div>

      <div className="card-smooth grid gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        {/* Questions */}
        <div className="space-y-5">
          {QUESTIONS.map((q, idx) => (
            <div key={q.id} className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Q{idx + 1}. {q.label}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))
                      }
                      className={[
                        "rounded-xl border px-3 py-2 text-left text-xs sm:text-sm transition",
                        selected
                          ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                          : "border-white/10 bg-slate-900/60 text-slate-200 hover:border-emerald-300 hover:bg-slate-900/90",
                      ].join(" ")}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4 sm:p-5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Result
          </p>
          {!outcome ? (
            <p className="text-sm text-slate-300">
              Answer the questions on the left. Once you&apos;re done, this box
              will stop being mysterious and tell you what we&apos;d do in your
              shoes.
            </p>
          ) : (
            <>
              <p className={`text-base font-semibold ${toneColor}`}>
                {outcome.label}
              </p>
              <p className="text-sm text-slate-300">{outcome.summary}</p>
              <div className="mt-3 space-y-2 rounded-2xl bg-slate-950/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Next 90-day moves
                </p>
                <ul className="space-y-1.5 text-sm text-slate-200">
                  {outcome.actions.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="pt-1 text-[11px] text-slate-400">
                This doesn&apos;t know your entire life, but it beats a random
                TikTok telling you to either “drop out” or “grind harder”.
                Screenshot this and use it as a starting point with someone you
                trust.
              </p>
            </>
          )}

          <p className="mt-2 text-[11px] text-slate-500">
            Score used only inside your browser – nothing is saved or sent
            anywhere yet.
          </p>
        </div>
      </div>
    </section>
  );
        }
