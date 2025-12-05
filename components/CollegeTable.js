import React, { useMemo, useState } from "react";

const COLLEGES = [
  { name: "American University", state: "DC", type: "Private", score: 82, vibe: "More liberal" },
  { name: "University of Vermont", state: "VT", type: "Public", score: 80, vibe: "More liberal" },
  { name: "Oberlin College", state: "OH", type: "Private", score: 88, vibe: "More liberal" },
  { name: "UC Berkeley", state: "CA", type: "Public", score: 85, vibe: "More liberal" },
  { name: "New York University", state: "NY", type: "Private", score: 78, vibe: "More liberal" },
  { name: "Liberty University", state: "VA", type: "Private", score: 25, vibe: "More conservative" },
  { name: "Grove City College", state: "PA", type: "Private", score: 28, vibe: "More conservative" },
  { name: "Brigham Young University (Provo)", state: "UT", type: "Private", score: 30, vibe: "More conservative" },
];

const VIBE_FILTERS = ["All vibes", "More liberal", "More conservative"];

export default function CollegeTable() {
  const [query, setQuery] = useState("");
  const [vibeFilter, setVibeFilter] = useState("All vibes");

  const filtered = useMemo(() => {
    return COLLEGES.filter((college) => {
      const matchesQuery =
        query.trim().length === 0 ||
        college.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        college.state.toLowerCase().includes(query.trim().toLowerCase());
      const matchesVibe =
        vibeFilter === "All vibes" || college.vibe === vibeFilter;
      return matchesQuery && matchesVibe;
    });
  }, [query, vibeFilter]);

  return (
    <section id="vibes" className="mt-10 space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="section-label">
            <span className="section-label-dot" />
            Campus vibes
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50">
            Liberal, conservative, or just chaos?
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Quick snapshot so you don&apos;t walk in shocked. Based on public
            rankings + student chatter. Not official, just a starting point.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:w-72">
          <input
            type="text"
            placeholder="Search college or state..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
          <select
            value={vibeFilter}
            onChange={(e) => setVibeFilter(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-200 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
          >
            {VIBE_FILTERS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="card-smooth overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-sm">
            <thead className="bg-slate-900/60">
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className="px-4 py-3 text-left">College</th>
                <th className="px-3 py-3 text-left">State</th>
                <th className="px-3 py-3 text-left">Type</th>
                <th className="px-3 py-3 text-left">Vibe score</th>
                <th className="px-3 py-3 text-left">Vibe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((college) => (
                <tr
                  key={college.name}
                  className="hover:bg-slate-800/60 transition-colors"
                >
                  <td className="px-4 py-3 text-slate-50">{college.name}</td>
                  <td className="px-3 py-3 text-slate-300">
                    {college.state}
                  </td>
                  <td className="px-3 py-3 text-slate-300">{college.type}</td>
                  <td className="px-3 py-3 font-semibold text-slate-50">
                    {college.score}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        college.vibe === "More liberal"
                          ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40"
                          : "bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/40"
                      }`}
                    >
                      {college.vibe}
                    </span>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-4 text-center text-sm text-slate-400"
                  >
                    Nothing matches yet. Try a different search or vibe filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
