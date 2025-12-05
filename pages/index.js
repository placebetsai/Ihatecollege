// pages/index.js

import Head from "next/head";
import Link from "next/link";
import { useState, useMemo } from "react";

const CAMPUS_VIBES = [
  {
    name: "American University",
    state: "DC",
    type: "Private",
    score: 82,
    vibe: "More liberal",
  },
  {
    name: "University of Vermont",
    state: "VT",
    type: "Public",
    score: 80,
    vibe: "More liberal",
  },
  {
    name: "Oberlin College",
    state: "OH",
    type: "Private",
    score: 88,
    vibe: "More liberal",
  },
  {
    name: "UC Berkeley",
    state: "CA",
    type: "Public",
    score: 85,
    vibe: "More liberal",
  },
  {
    name: "New York University",
    state: "NY",
    type: "Private",
    score: 78,
    vibe: "More liberal",
  },
  {
    name: "Liberty University",
    state: "VA",
    type: "Private",
    score: 25,
    vibe: "More conservative",
  },
  {
    name: "Grove City College",
    state: "PA",
    type: "Private",
    score: 28,
    vibe: "More conservative",
  },
  {
    name: "Brigham Young University (Provo)",
    state: "UT",
    type: "Private",
    score: 30,
    vibe: "More conservative",
  },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusSearch, setCampusSearch] = useState("");
  const [rankForm, setRankForm] = useState({
    college: "",
    score: "",
    politics: "",
    hateThings: "",
    goodThing: "",
  });
  const [rankSaved, setRankSaved] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactSent, setContactSent] = useState(false);

  const filteredCampuses = useMemo(() => {
    const term = campusSearch.trim().toLowerCase();
    if (!term) return CAMPUS_VIBES;
    return CAMPUS_VIBES.filter((c) =>
      (c.name + c.state + c.type + c.vibe)
        .toLowerCase()
        .includes(term)
    );
  }, [campusSearch]);

  function handleRankChange(e) {
    const { name, value } = e.target;
    setRankForm((prev) => ({ ...prev, [name]: value }));
    setRankSaved(false);
  }

  function handleRankSubmit(e) {
    e.preventDefault();
    // Local-only for now. No backend. Just confirmation.
    setRankSaved(true);
  }

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
    setContactSent(false);
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    // No backend wired yet. Just show a confirmation.
    setContactSent(true);
  }

  return (
    <>
      <Head>
        <title>I Hate College – No brochure fluff. Just reality.</title>
        <meta
          name="description"
          content="ihatecollege.com is the dashboard for reality: campus vibes, cost pressure, escape routes, and cheat sheets so you don’t end up buried in loans and burnout."
        />
      </Head>

      <div className="min-h-screen bg-slate-950 text-slate-50">
        {/* Top nav */}
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                IH
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight">
                  ihatecollege.com
                </span>
                <span className="text-[11px] text-slate-400">
                  No brochure fluff. Just reality.
                </span>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 text-xs font-medium text-slate-200 md:flex">
              <a href="#campus-vibes" className="hover:text-amber-300">
                Campus vibes
              </a>
              <a href="#alternatives" className="hover:text-amber-300">
                Alternatives
              </a>
              <a href="#cheat-sheets" className="hover:text-amber-300">
                Cheat sheets
              </a>
              <a href="#rank" className="hover:text-amber-300">
                Rank your school
              </a>
              <a href="#contact" className="hover:text-amber-300">
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="space-y-1">
                <span className="block h-0.5 w-4 bg-slate-100" />
                <span className="block h-0.5 w-4 bg-slate-100" />
              </div>
            </button>
          </div>

          {/* Mobile nav panel */}
          {mobileOpen && (
            <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-3 pt-2 text-sm md:hidden">
              <div className="flex flex-col gap-2">
                <a
                  href="#campus-vibes"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 text-slate-200 hover:text-amber-300"
                >
                  Campus vibes
                </a>
                <a
                  href="#alternatives"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 text-slate-200 hover:text-amber-300"
                >
                  Alternatives
                </a>
                <a
                  href="#cheat-sheets"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 text-slate-200 hover:text-amber-300"
                >
                  Cheat sheets
                </a>
                <a
                  href="#rank"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 text-slate-200 hover:text-amber-300"
                >
                  Rank your school
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="py-1 text-slate-200 hover:text-amber-300"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </header>

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
                College is stupid expensive, insanely political, and way more
                stress than the brochures admit. ihatecollege.com is the
                dashboard for reality: campus vibes, cost pressure, and actual
                escape routes so you don&apos;t end up buried in loans and
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
                  Quick snapshot so you don&apos;t walk in shocked. Based on
                  public rankings + student chatter. Not official – just a
                  starting point.
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
                    <tr
                      key={c.name}
                      className="border-t border-white/5 odd:bg-slate-900/40"
                    >
                      <td className="px-4 py-2.5 text-slate-100">
                        {c.name}
                      </td>
                      <td className="px-4 py-2.5 text-slate-300">
                        {c.state}
                      </td>
                      <td className="px-4 py-2.5 text-slate-300">
                        {c.type}
                      </td>
                      <td className="px-4 py-2.5 text-slate-100">
                        {c.score}
                      </td>
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
                      <td
                        colSpan={5}
                        className="px-4 py-4 text-center text-slate-400"
                      >
                        Nothing found. Try a different name or state.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* ALTERNATIVES */}
          <section id="alternatives" className="mt-12 space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                Real alternatives to the 4-year trap
              </h2>
              <p className="text-xs text-slate-400">
                It&apos;s not &quot;go to a 4-year or be a failure.&quot; These
                are paths people are actually using right now. Not fantasy
                YouTube careers – stuff that can pay real bills.
              </p>
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
                      <p className="max-w-[8rem] text-[11px] text-slate-300 text-right">
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
                  <p className="mt-3 text-[11px] text-slate-400">
                    Homework: pick one lane and compare 3 programs on cost,
                    time, and starting pay vs. your current degree plan.
                  </p>
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
              <p className="text-xs text-slate-400">
                Not leaked exams – fast reference so your brain isn&apos;t
                cooked by week three. Future version: real downloadable PDFs.
              </p>
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
              <p className="text-xs text-slate-400">
                Be blunt. Right now it only saves in your browser (no public
                posting yet). Later this can power anonymous rankings and
                heatmaps.
              </p>

              <form
                className="space-y-3 text-sm"
                onSubmit={handleRankSubmit}
              >
                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    College name
                  </label>
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
                  <label className="text-xs text-slate-300">
                    Campus politics vibe
                  </label>
                  <select
                    name="politics"
                    value={rankForm.politics}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  >
                    <option value="">Select one</option>
                    <option value="More liberal">More liberal</option>
                    <option value="More conservative">
                      More conservative
                    </option>
                    <option value="Mixed / chaos">Mixed / chaos</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    Top 3 things you hate
                  </label>
                  <textarea
                    name="hateThings"
                    rows={3}
                    value={rankForm.hateThings}
                    onChange={handleRankChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300">
                    One thing they actually do well
                  </label>
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
                  <p className="text-xs text-emerald-300">
                    Saved in this browser. Future version will let you push this
                    to global rankings.
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-3 rounded-2xl border border-dashed border-white/15 bg-slate-950/40 p-4 text-xs text-slate-300">
              <h3 className="text-sm font-semibold text-slate-50">
                What this will become
              </h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Anonymous heatmaps of &quot;I hate this place&quot; vs
                    actual debt + mental load.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Side-by-side comparisons: stay, transfer, trade, or cert –
                    with real numbers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>
                    Stories from people who actually bailed and didn&apos;t
                    end up ruined.
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
              Got a story, idea, or collab pitch? This doesn&apos;t post
              anywhere public – it&apos;s just a simple message form for now.
            </p>

            <form
              className="space-y-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm"
              onSubmit={handleContactSubmit}
            >
              <div className="space-y-1">
                <label className="text-xs text-slate-300">
                  Name (optional)
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300">
                  Email (so we can reply)
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300">
                  Message
                </label>
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
                <p className="text-xs text-emerald-300">
                  Got it. In a real version this would send straight to an inbox
                  instead of just confirming here.
                </p>
              )}
            </form>
          </section>

          {/* FOOTER */}
          <footer className="mt-10 border-t border-white/10 pt-4 text-[11px] text-slate-500">
            <p>
              This is not financial advice, legal advice, or therapy. It&apos;s
              the reality check nobody bothered to put on the brochure.
            </p>
            <p className="mt-1">© {new Date().getFullYear()} ihatecollege.com</p>
          </footer>
        </main>
      </div>
    </>
  );
      }
