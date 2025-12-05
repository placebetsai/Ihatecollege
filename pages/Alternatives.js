// pages/alternatives.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const ALTERNATIVES = [
  {
    id: "google-it",
    name: "Google IT Support Professional Certificate",
    type: "Tech cert",
    time: "3–6 months",
    timeFilter: "under-6",
    cost: "Low",
    costFilter: "low",
    remote: true,
    salary: "$45k–$60k+",
    tags: ["Tech", "Remote-friendly", "No degree needed"],
    summary:
      "Entry-level IT support. Good if you like troubleshooting, systems, and helping people fix tech.",
  },
  {
    id: "google-data",
    name: "Google Data Analytics Certificate",
    type: "Tech cert",
    time: "6–9 months",
    timeFilter: "6-12",
    cost: "Low",
    costFilter: "low",
    remote: true,
    salary: "$55k–$75k+",
    tags: ["Data", "Excel / SQL", "Remote-friendly"],
    summary:
      "Data cleaning, dashboards, and analysis. Great if you like numbers more than people.",
  },
  {
    id: "comptia-a-plus",
    name: "CompTIA A+ + Helpdesk",
    type: "Tech cert",
    time: "3–9 months",
    timeFilter: "6-12",
    cost: "Low",
    costFilter: "low",
    remote: false,
    salary: "$40k–$55k",
    tags: ["Hardware", "Hands-on", "Tech support"],
    summary:
      "Classic entry ticket into IT – especially if you like hardware and troubleshooting.",
  },
  {
    id: "electrician-apprentice",
    name: "Electrician apprenticeship",
    type: "Trade",
    time: "3–4 years (paid)",
    timeFilter: "2-plus",
    cost: "Paid while you learn",
    costFilter: "paid",
    remote: false,
    salary: "$55k–$90k+",
    tags: ["Hands-on", "Union options", "Strong demand"],
    summary:
      "You work under a journeyman, earn while learning, and end up with a license that travels with you.",
  },
  {
    id: "hvac-apprentice",
    name: "HVAC tech (apprenticeship or trade school)",
    type: "Trade",
    time: "1–3 years",
    timeFilter: "1-2",
    cost: "Medium",
    costFilter: "med",
    remote: false,
    salary: "$50k–$80k+",
    tags: ["Hands-on", "Always needed", "Good overtime"],
    summary:
      "Heating / cooling systems. Not glamorous, but people always need AC and heat – especially in huge cities.",
  },
  {
    id: "coding-bootcamp",
    name: "Full-stack coding bootcamp",
    type: "Bootcamp",
    time: "3–6 months (intense)",
    timeFilter: "under-6",
    cost: "High",
    costFilter: "high",
    remote: true,
    salary: "$65k–$100k+ (if placed well)",
    tags: ["Software dev", "Portfolio-based", "Very intense"],
    summary:
      "High risk, high reward. Only makes sense if you can grind 40–60 hrs/week and build legit portfolio projects.",
  },
  {
    id: "ux-ui-bootcamp",
    name: "UX / UI design bootcamp",
    type: "Bootcamp",
    time: "3–9 months",
    timeFilter: "6-12",
    cost: "High",
    costFilter: "high",
    remote: true,
    salary: "$60k–$90k+",
    tags: ["Design", "Figma", "Portfolio-first"],
    summary:
      "Good for visual / empathy people who like apps and websites more than raw code.",
  },
  {
    id: "medical-assistant",
    name: "Medical assistant / phlebotomy program",
    type: "Short healthcare",
    time: "6–12 months",
    timeFilter: "6-12",
    cost: "Medium",
    costFilter: "med",
    remote: false,
    salary: "$40k–$55k+",
    tags: ["Healthcare", "Hands-on", "People-facing"],
    summary:
      "Get into healthcare without 8+ years of school. Often leads to other roles (nursing, tech, etc.).",
  },
  {
    id: "creator-track",
    name: "AI-powered creator / short-form content track",
    type: "Creator / business",
    time: "Ongoing (start in 3 months)",
    timeFilter: "1-2",
    cost: "Very low",
    costFilter: "low",
    remote: true,
    salary: "Highly variable",
    tags: ["Content", "Brand-building", "Online business"],
    summary:
      "You build a niche channel (TikTok, YouTube shorts, etc.) with AI helping on script, editing, and posting.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All types" },
  { id: "Tech cert", label: "Tech certs" },
  { id: "Trade", label: "Trades" },
  { id: "Bootcamp", label: "Bootcamps" },
  { id: "Short healthcare", label: "Healthcare" },
  { id: "Creator / business", label: "Creator & business" },
];

const TIME_FILTERS = [
  { id: "any", label: "Any length" },
  { id: "under-6", label: "Under 6 months" },
  { id: "6-12", label: "6–12 months" },
  { id: "1-2", label: "1–2 years" },
  { id: "2-plus", label: "2+ years (paid)" },
];

const COST_FILTERS = [
  { id: "any", label: "Any cost" },
  { id: "low", label: "Low / very low" },
  { id: "med", label: "Medium" },
  { id: "high", label: "High" },
  { id: "paid", label: "Paid while you learn" },
];

export default function AlternativesPage() {
  const [category, setCategory] = useState("all");
  const [time, setTime] = useState("any");
  const [cost, setCost] = useState("any");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return ALTERNATIVES.filter((alt) => {
      if (category !== "all" && alt.type !== category) return false;
      if (time !== "any" && alt.timeFilter !== time) return false;
      if (cost !== "any" && alt.costFilter !== cost) return false;
      if (remoteOnly && !alt.remote) return false;

      const term = search.trim().toLowerCase();
      if (!term) return true;
      const blob = (
        alt.name +
        alt.type +
        alt.summary +
        alt.tags.join(" ")
      ).toLowerCase();
      return blob.includes(term);
    });
  }, [category, time, cost, remoteOnly, search]);

  return (
    <>
      <Head>
        <title>I Hate College – Real alternatives</title>
      </Head>

      <main className="min-h-screen bg-slate-950 text-slate-50">
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
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
            </Link>
            <nav className="hidden gap-4 text-sm text-slate-300 sm:flex">
              <Link href="/" className="hover:text-amber-300">
                Campus vibes
              </Link>
              <span className="text-slate-500">Alternatives</span>
              <Link href="/#cheat-sheets" className="hover:text-amber-300">
                Cheat sheets
              </Link>
              <Link href="/#rank" className="hover:text-amber-300">
                Rank your school
              </Link>
              <Link href="/#contact" className="hover:text-amber-300">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 pb-16 pt-8">
          {/* Hero */}
          <section className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Alternatives
            </p>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Real paths that aren&apos;t “4-year or failure.”
            </h1>
            <p className="max-w-2xl text-sm text-slate-300">
              These are programs and routes people are using right now to make
              money without committing to a random major + $80k loans. Filter
              by type, time, cost, and whether it can be done remote.
            </p>
          </section>

          {/* Filters */}
          <section className="mt-6 rounded-3xl border border-white/10 bg-slate-900/70 p-4 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Path type
                </label>
                <select
                  className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Time to get moving
                </label>
                <select
                  className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                >
                  {TIME_FILTERS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Upfront cost
                </label>
                <select
                  className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                >
                  {COST_FILTERS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Search by vibe
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-sm text-slate-100"
                  placeholder="ex: remote, healthcare, trades…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <label className="mt-1 flex items-center gap-2 text-[11px] text-slate-300">
                  <input
                    type="checkbox"
                    className="h-3 w-3 rounded border-white/30 bg-slate-950"
                    checked={remoteOnly}
                    onChange={(e) => setRemoteOnly(e.target.checked)}
                  />
                  Remote-friendly only
                </label>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mt-6 space-y-3">
            <p className="text-xs text-slate-400">
              Showing{" "}
              <span className="font-semibold text-slate-100">
                {filtered.length}
              </span>{" "}
              option{filtered.length === 1 ? "" : "s"}. These are not sales
              pitches – they&apos;re reality checks.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((alt) => (
                <article
                  key={alt.id}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          {alt.type}
                        </p>
                        <h2 className="text-sm font-semibold text-slate-50">
                          {alt.name}
                        </h2>
                      </div>
                      <div className="text-right text-[11px] text-slate-400">
                        <p>{alt.time}</p>
                        <p className="text-emerald-300">{alt.salary}</p>
                      </div>
                    </div>
                    <p className="text-slate-200">{alt.summary}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {alt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-800/70 px-2 py-0.5 text-[11px] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {alt.remote && (
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] text-emerald-300">
                          Remote-possible
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-slate-400">
                    Homework: look up 3 local or online programs in this lane
                    and compare cost, schedule, and starting pay to your current
                    degree.
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
    }
