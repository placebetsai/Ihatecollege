// pages/index.js

import Head from "next/head";
import { useState, useMemo } from "react";

const CAMPUS_VIBES = [
  { name: "American University", state: "DC", type: "Private", score: 82, vibe: "More liberal" },
  { name: "University of Vermont", state: "VT", type: "Public", score: 80, vibe: "More liberal" },
  { name: "Oberlin College", state: "OH", type: "Private", score: 88, vibe: "More liberal" },
  { name: "UC Berkeley", state: "CA", type: "Public", score: 85, vibe: "More liberal" },
  { name: "New York University", state: "NY", type: "Private", score: 78, vibe: "More liberal" },
  { name: "Liberty University", state: "VA", type: "Private", score: 25, vibe: "More conservative" },
  { name: "Grove City College", state: "PA", type: "Private", score: 28, vibe: "More conservative" },
  { name: "Brigham Young University (Provo)", state: "UT", type: "Private", score: 30, vibe: "More conservative" },
];

const ALTERNATIVE_CARDS = [
  {
    title: "Tech career certificates",
    caption: "3–12 months · job-focused · remote-friendly",
    bullets: [
      "IT support, cybersecurity, UX, data, project management.",
      "Cheaper than a full degree; stackable as you go.",
      "Pairs well with remote work or side hustles.",
    ],
    tag: "Tech certs",
  },
  {
    title: "Trades & apprenticeships",
    caption: "Paid training · hands-on · huge shortages",
    bullets: [
      "Electrician, HVAC, welding, plumbing, elevator tech, medical tech.",
      "Earn while you learn instead of taking on debt.",
      "Transferable skills if you move states.",
    ],
    tag: "Hands-on work",
  },
  {
    title: "Bootcamps & sprints",
    caption: "3–6 months · intense · portfolio-driven",
    bullets: [
      "Coding, cloud, cybersecurity, data, UX.",
      "Best if you treat it like a full-time job.",
      "Often includes interview prep + career services.",
    ],
    tag: "Short & intense",
  },
  {
    title: "AI & creator hustles",
    caption: "Low upfront cost · laptop-based",
    bullets: [
      "Short-form content, automation services, templates.",
      "AI helps with scripting, editing, posting.",
      "Not instant money, but not gate-kept either.",
    ],
    tag: "Online income",
  },
];

const CHEAT_SHEETS = [
  {
    title: "Numbers & formulas",
    bullets: [
      "Algebra / calc one-pagers.",
      "Stats: z-scores, p-values, “which test when?”.",
      "Finance basics: loans, interest, payoff timelines.",
    ],
    tags: ["Math & stats", "Money basics"],
  },
  {
    title: "Essays & emails",
    bullets: [
      "Essay skeletons: intro / body / conclusion patterns.",
      "\"I missed class\" and \"I need an extension\" email templates.",
      "Discussion post patterns for when you didn’t read everything.",
    ],
    tags: ["Communication", "Templates"],
  },
  {
    title: "Survival dashboards",
    bullets: [
      "One view for assignments, work, and bills.",
      "Weekly reset checklist.",
      "Simple \"am I actually passing\" grade tracker.",
    ],
    tags: ["Organization", "Weekly reset"],
  },
];

export default function Home() {
  const [campusSearch, setCampusSearch] = useState("");

  // rank form
  const [rankForm, setRankForm] = useState({
    college: "",
    score: "",
    politics: "",
    hateThings: "",
    goodThing: "",
  });
  const [rankSaved, setRankSaved] = useState(false);

  // contact
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  // cost calculator
  const [costInputs, setCostInputs] = useState({
    totalDebt: "",
    interestRate: "",
    monthlyPayment: "",
  });
  const [costResult, setCostResult] = useState(null);
  const [costError, setCostError] = useState("");

  const filteredCampuses = useMemo(() => {
    const term = campusSearch.trim().toLowerCase();
    if (!term) return CAMPUS_VIBES;
    return CAMPUS_VIBES.filter((c) =>
      (c.name + c.state + c.type + c.vibe).toLowerCase().includes(term)
    );
  }, [campusSearch]);

  function handleRankChange(e) {
    const { name, value } = e.target;
    setRankForm((prev) => ({ ...prev, [name]: value }));
    setRankSaved(false);
  }

  function handleRankSubmit(e) {
    e.preventDefault();
    setRankSaved(true);
  }

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    setContactSent(false);
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    setContactSent(true);
  }

  function handleCostChange(e) {
    const { name, value } = e.target;
    setCostInputs((prev) => ({ ...prev, [name]: value }));
    setCostResult(null);
    setCostError("");
  }

  function handleCostCalculate(e) {
    e.preventDefault();
    const P = parseFloat(costInputs.totalDebt);
    const annualRate = parseFloat(costInputs.interestRate);
    const M = parseFloat(costInputs.monthlyPayment);

    if (!P || !annualRate || !M) {
      setCostError("Fill in all three fields with real numbers.");
      setCostResult(null);
      return;
    }

    const r = annualRate / 100 / 12;

    if (M <= P * r) {
      setCostError(
        "That monthly payment is too low. You won’t ever touch principal – bump it up."
      );
      setCostResult(null);
      return;
    }

    const n = -Math.log(1 - (r * P) / M) / Math.log(1 + r);

    const months = Math.round(n);
    const years = months / 12;
    const totalPaid = M * months;
    const interestPaid = totalPaid - P;

    setCostError("");
    setCostResult({
      months,
      years,
      totalPaid,
      interestPaid,
    });
  }

  function formatMoney(x) {
    if (!isFinite(x)) return "-";
    return x.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  return (
    <>
      <Head>
        <title>I Hate College – No brochure fluff. Just reality.</title>
        <meta
          name="description"
          content="ihatecollege.com is the reality dashboard: campus vibes, cost pressure, and escape routes so you don’t end up buried in loans and burnout."
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-50">
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
          {/* HERO */}
          <section className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              No brochure fluff. Just what it really feels like.
            </span>

            <div className="space-y-3">
              <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                I Hate College.
                <span className="block text-slate-300">
                  But I still don&apos;t want to be broke.
                </span>
              </h1>
              <p className="max-w-2xl text-sm text-slate-300">
                College is stupid expensive, insanely political, and way more stress than the
                brochures admit. ihatecollege.com is the dashboard for reality: campus vibes, cost
                pressure, and actual escape routes so you don&apos;t end up buried in loans and
                burnout.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#campus-vibes"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/25"
              >
                ● Check campus vibes
              </a>
              <a
                href="#alternatives"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300"
              >
                See real alternatives
              </a>
            </div>
          </section>

          {/* CAMPUS VIBES */}
          <section id="campus-vibes" className="mt-10 space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold tracking-tight">
                  Campus vibes: liberal, conservative, or just chaos?
                </h2>
                <p className="text-xs text-slate-400">
                  Quick snapshot so you don&apos;t walk in shocked. Based on public rankings +
                  student chatter. Not official – just a starting point.
                </p>
              </div>
              <div className="w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search college or state…"
                  value={campusSearch}
                  onChange={(e) => setCampusSearch(e.target.value)}
                  className="w-full rounded-full border border-white/15 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/70">
              <table className="min-w-full text-left text-xs">
                <thead className="border-b border-white/10 bg-slate-900/90 text-[11px] uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-4 py-3">College</th>
                    <th className="px-4 py-3">State</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Vibe score</th>
                    <th className="px-4 py-3">Vibe</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCampuses.map((c) => (
                    <tr key={c.name} className="border-t border-white/5 odd:bg-slate-900/40">
                      <td className="px-4 py-2.5 text-slate-100">{c.name}</td>
                      <td className="px-4 py-2.5 text-slate-300">{c.state}</td>
                      <td className="px-4 py-2.5 text-slate-300">{c.type}</td>
                      <td className="px-4 py-2.5 text-slate-100">{c.score}</td>
                      <td className="px-4 py-2.5">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] ${
                            c.vibe.includes("liberal")
                              ? "bg-emerald-500/15 text-emerald-300"
                              : "bg-sky-500/15 text-sky-300"
                          }`}
                        >
                          {c.vibe}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredCampuses.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-4 text-center text-slate-400">
                        Nothing found. Try a different name or state.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* COST / DEBT CALCULATOR */}
          <section id="cost" className="mt-12 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <h2 className="text-lg font-semibold tracking-tight">
                Debt reality check – how long are you stuck?
              </h2>
              <p className="text-xs text-slate-400">
                Punch in your total loans, average interest rate, and what you can pay each month.
                This is the &quot;how many years of my life is this?&quot; calculator.
              </p>

              <form onSubmit={handleCostCalculate} className="mt-2 space-y-3 text-sm">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">Total student debt ($)</label>
                  <input
                    type="number"
                    name="totalDebt"
                    value={costInputs.totalDebt}
                    onChange={handleCostChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    Average interest rate (% per year)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="interestRate"
                    value={costInputs.interestRate}
                    onChange={handleCostChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    What you can realistically pay per month ($)
                  </label>
                  <input
                    type="number"
                    name="monthlyPayment"
                    value={costInputs.monthlyPayment}
                    onChange={handleCostChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/25"
                >
                  Run the numbers
                </button>

                {costError && (
                  <p className="mt-2 text-xs font-medium text-rose-300">{costError}</p>
                )}
              </form>
            </div>

            <div className="space-y-3 rounded-3xl border border-dashed border-white/15 bg-slate-950/40 p-4 text-xs text-slate-300">
              <h3 className="text-sm font-semibold text-slate-50">Result snapshot</h3>
              {!costResult && !costError && (
                <p className="text-slate-400">
                  Put numbers in on the left and this box will tell you:
                  <br />
                  • How many months / years you&apos;re paying
                  <br />
                  • Total you&apos;ll hand over
                  <br />
                  • How much of that is just interest
                </p>
              )}

              {costResult && (
                <div className="space-y-2">
                  <p>
                    <span className="text-slate-400">Time to pay off:</span>{" "}
                    <span className="font-semibold text-emerald-300">
                      {costResult.months} months (~{costResult.years.toFixed(1)} years)
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Total paid over time:</span>{" "}
                    <span className="font-semibold">
                      ${formatMoney(costResult.totalPaid)}
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Of which is pure interest:</span>{" "}
                    <span className="font-semibold text-amber-300">
                      ${formatMoney(costResult.interestPaid)}
                    </span>
                  </p>
                  <p className="mt-2 text-slate-400">
                    Homework: Compare that timeline with doing a cheaper cert, trade, or transfer
                    and using the income jump to nuke this faster.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* ALTERNATIVES */}
          <section id="alternatives" className="mt-12 space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                Real alternatives to the 4-year trap
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {ALTERNATIVE_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {card.tag}
                        </p>
                        <h3 className="text-sm font-semibold text-slate-50">
                          {card.title}
                        </h3>
                      </div>
                      <p className="max-w-[8rem] text-[11px] text-right text-slate-300">
                        {card.caption}
                      </p>
                    </div>
                    <ul className="space-y-1 text-slate-200">
                      {card.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CHEAT SHEETS */}
          <section id="cheat-sheets" className="mt-12 space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                Cheat sheet vault (legal kind)
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {CHEAT_SHEETS.map((sheet) => (
                <article
                  key={sheet.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm"
                >
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {sheet.title}
                    </h3>
                    <ul className="space-y-1 text-slate-200">
                      {sheet.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {sheet.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-800/70 px-2 py-0.5 text-[11px] text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RANK YOUR SCHOOL */}
          <section
            id="rank"
            className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          >
            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight">
                Rank your college like it&apos;s a restaurant
              </h2>

              <form className="space-y-3 text-sm" onSubmit={handleRankSubmit}>
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">College name</label>
                  <input
                    type="text"
                    name="college"
                    value={rankForm.college}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    &quot;I Hate This Place&quot; score (1–10)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    name="score"
                    value={rankForm.score}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">Campus politics vibe</label>
                  <select
                    name="politics"
                    value={rankForm.politics}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  >
                    <option value="">Select one</option>
                    <option value="More liberal">More liberal</option>
                    <option value="More conservative">More conservative</option>
                    <option value="Mixed / chaos">Mixed / chaos</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">Top 3 things you hate</label>
                  <textarea
                    name="hateThings"
                    rows={3}
                    value={rankForm.hateThings}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">One thing they actually do well</label>
                  <textarea
                    name="goodThing"
                    rows={2}
                    value={rankForm.goodThing}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/25"
                >
                  Submit my rating
                </button>

                {rankSaved && (
                  <p className="mt-1 text-xs text-emerald-300">
                    Saved in this browser. Future version will push this into global rankings.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-3 rounded-2xl border border-dashed border-white/15 bg-slate-950/40 p-4 text-xs text-slate-300">
              <h3 className="text-sm font-semibold text-slate-50">Why this matters</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Real &quot;I hate this place&quot; scores tell you where people are actually
                    miserable, not just what the brochure says.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Paired with cost + debt numbers, this becomes a stay / transfer / bail
                    decision tool.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mt-12 space-y-3">
            <h2 className="text-lg font-semibold tracking-tight">
              Contact (quietly)
            </h2>
            <p className="text-xs text-slate-400">
              Got a story, idea, or collab pitch? Right now this just confirms on-screen – future
              version can wire it to an actual inbox.
            </p>

            <form
              className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm"
              onSubmit={handleContactSubmit}
            >
              <div className="space-y-1">
                <label className="text-xs text-slate-300">Name (optional)</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25"
              >
                Send message
              </button>

              {contactSent && (
                <p className="mt-1 text-xs text-emerald-300">
                  Got it. In a real version this would send straight to email instead of just
                  showing this.
                </p>
              )}
            </form>
          </section>

          {/* FOOTER */}
          <footer className="mt-10 border-t border-white/10 pt-4 text-[11px] text-slate-500">
            <p>
              This is not financial advice, legal advice, or therapy. It&apos;s the reality check
              nobody put on the brochure.
            </p>
            <p className="mt-1">© {new Date().getFullYear()} ihatecollege.com</p>
          </footer>
        </main>
      </div>
    </>
  );
      }
