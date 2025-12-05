    import React from "react";
import CollegeTable from "../components/CollegeTable";
import RatingForm from "../components/RatingForm";
import SectionCard from "../components/SectionCard";
import RealityCheck from "../components/RealityCheck";

export default function HomePage() {
  return (
    <div id="top" className="mx-auto flex max-w-6xl flex-col gap-12 pb-16 pt-6">
      {/* HERO */}
      <section className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
        <div>
          <p className="section-label">
            <span className="section-label-dot" />
            No brochure fluff. Just what it really feels like.
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.7rem]">
            I Hate College.
            <span className="block text-lg font-normal text-slate-300">
              But I still don&apos;t want to be broke.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            College is stupid expensive, insanely political, and way more stress
            than the brochures admit. ihatecollege.com is the dashboard for
            reality: campus vibes, cost pressure, and actual escape routes so
            you don&apos;t end up buried in loans and burnout.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#reality"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm font-semibold text-amber-300 ring-1 ring-amber-400/60 hover:bg-amber-400 hover:text-slate-950 hover:ring-amber-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Run a loan reality check
            </a>
            <a
              href="#alternatives"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-sm font-semibold text-sky-300 ring-1 ring-sky-500/60 hover:bg-sky-400 hover:text-slate-950 hover:ring-sky-300"
            >
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              See real alternatives
            </a>
          </div>

          {/* Snapshot stats */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="card-smooth px-4 py-3 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Said college was &quot;worth the cost&quot;
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald-300">
                ~35–40%
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Depending on major, school type, and how wrecked they feel.
              </p>
            </div>
            <div className="card-smooth px-4 py-3 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Average undergrad loan balance
              </p>
              <p className="mt-1 text-lg font-semibold text-amber-300">
                $30k+
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Before interest. Before grad school. Before credit cards.
              </p>
            </div>
            <div className="card-smooth px-4 py-3 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Alt paths (trades, bootcamps, certs)
              </p>
              <p className="mt-1 text-lg font-semibold text-sky-300">
                Growing fast
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Skills-first routes that don&apos;t need a four-year sentence.
              </p>
            </div>
          </div>
        </div>

        {/* Side panel – Why this exists */}
        <aside className="card-smooth h-full p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Why this exists
          </h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            <li>You&apos;re allowed to hate college and still want a future.</li>
            <li>
              It&apos;s not &quot;drop out or shut up&quot; – there are plays in
              between.
            </li>
            <li>
              Nobody explained the mental health + money combo in one place.
            </li>
          </ul>
          <p className="mt-4 rounded-2xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200 ring-1 ring-emerald-500/40">
            This is not financial advice. It&apos;s the map we wish someone
            shoved in our hands before signing loan paperwork at 18.
          </p>
        </aside>
      </section>

      {/* NEW: Loan Reality Check */}
      <RealityCheck />

      {/* CAMPUS VIBES TABLE */}
      <CollegeTable />

      {/* ALTERNATIVES */}
      <section id="alternatives" className="mt-14 space-y-6">
        <div>
          <p className="section-label">
            <span className="section-label-dot" />
            Real alternatives to the 4-year trap
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
            It&apos;s not &quot;go to a 4-year or be a failure.&quot;
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            These are paths people are actually using right now. Not fantasy
            YouTube careers – stuff that can pay real bills.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard
            label="Tech career certificates (3–12 months)"
            tags={["Job-focused", "Remote-friendly"]}
          >
            <ul className="space-y-1.5">
              <li>IT support, cybersecurity, UX, data, project management.</li>
              <li>Cheaper than a full degree, usually flexible schedule.</li>
              <li>Stackable – add more certs as you go.</li>
              <li>Pairs well with remote work or side hustles.</li>
            </ul>
          </SectionCard>

          <SectionCard
            label="Trades & apprenticeships (paid training)"
            tags={["Earn while learning", "Hands-on"]}
          >
            <ul className="space-y-1.5">
              <li>
                Electrician, HVAC, welding, plumbing, elevator tech, medical
                tech.
              </li>
              <li>Huge worker shortages = opportunity.</li>
              <li>6-figure earning potential without a 4-year degree.</li>
              <li>Transferable skills if you move states.</li>
            </ul>
          </SectionCard>

          <SectionCard
            label="Bootcamps & tech sprints"
            tags={["Tech skills", "Short & intense"]}
          >
            <ul className="space-y-1.5">
              <li>Coding, cybersecurity, cloud, data, UX.</li>
              <li>Short, intense, and built around real projects.</li>
              <li>Many include interview prep or career services.</li>
              <li>
                Best if you treat it like a full-time job while you&apos;re in
                it.
              </li>
            </ul>
          </SectionCard>

          <SectionCard
            label="AI & creator hustles"
            tags={["Low upfront cost", "Laptop-based"]}
          >
            <ul className="space-y-1.5">
              <li>
                Use AI plus your personality to build channels, niche sites,
                freelance automation, templates.
              </li>
              <li>
                Scales if you hit the right niche, but not &quot;overnight rich
                for free.&quot;
              </li>
              <li>
                Best used as a multiplier on top of work, school, or a trade.
              </li>
            </ul>
          </SectionCard>
        </div>
      </section>

      {/* CHEAT SHEETS */}
      <section id="cheatsheets" className="mt-14 space-y-6">
        <div>
          <p className="section-label">
            <span className="section-label-dot" />
            Cheat sheet vault (legal kind)
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SectionCard
            label="Numbers & formulas"
            tags={["Math & stats", "Money basics"]}
          >
            <ul className="space-y-1.5">
              <li>Algebra / calc one-pagers.</li>
              <li>Stats: z-scores, p-values, &quot;which test when&quot;.</li>
              <li>Finance basics: loans, interest, payoff timelines.</li>
            </ul>
          </SectionCard>

          <SectionCard
            label="Essays & emails"
            tags={["Communication", "Templates"]}
          >
            <ul className="space-y-1.5">
              <li>Essay skeletons: intro / body / conclusion patterns.</li>
              <li>
                &quot;I missed class&quot; and &quot;I need an extension&quot;
                email templates.
              </li>
              <li>
                Discussion post patterns for when you didn&apos;t read
                everything.
              </li>
            </ul>
          </SectionCard>

          <SectionCard
            label="Survival dashboards"
            tags={["Organization", "Weekly reset"]}
          >
            <ul className="space-y-1.5">
              <li>One view for assignments, work, and bills.</li>
              <li>Weekly reset checklist.</li>
              <li>Simple &quot;am I actually passing&quot; grade tracker.</li>
            </ul>
          </SectionCard>
        </div>
      </section>

      {/* RATING FORM */}
      <RatingForm />

      {/* CONTACT */}
      <section id="contact" className="mt-14">
        <p className="section-label">
          <span className="section-label-dot" />
          Contact (quietly)
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
          Got a story, idea, or collab pitch?
        </h2>
        <p className="mt-1 text-sm text-slate-300">
          This doesn&apos;t post anywhere public – future version can send this
          to a real inbox. For now it stays in your browser.
        </p>

        <form className="card-smooth mt-4 space-y-4 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Name (optional)
              </label>
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="First name, nickname, or anonymous"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Email (if you want a reply)
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
              What&apos;s going on?
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="Story, idea, rant, collab… whatever you wish someone told you before you signed the loan paperwork."
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-200"
          >
            For now this is just a mockup – nothing is sent yet.
          </button>
        </form>
      </section>
    </div>
  );
                }
