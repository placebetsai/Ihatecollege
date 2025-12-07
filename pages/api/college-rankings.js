// pages/college-rankings.js
import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";

const SORT_OPTIONS = [
  { value: "roi", label: "Best ROI (default)" },
  { value: "earnings", label: "Highest earnings" },
  { value: "cost", label: "Lowest yearly cost" },
  { value: "debt", label: "Lowest median debt" },
  { value: "acceptance", label: "Highest acceptance rate" },
];

function formatMoney(n) {
  if (!n && n !== 0) return "N/A";
  return `$${Math.round(n).toLocaleString()}`;
}

function formatPercent(p) {
  if (!p && p !== 0) return "N/A";
  return `${(p * 100).toFixed(0)}%`;
}

export default function CollegeRankingsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("University"); // default search term
  const [sortBy, setSortBy] = useState("roi");
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `/api/college-rankings?search=${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();

        const rows = (data.results || []).map((row) => {
          const name = row["school.name"];
          const city = row["school.city"];
          const state = row["school.state"];
          const earnings = row["latest.earnings.10_yrs_after_entry.median"];
          const tuition = row["latest.cost.tuition.in_state"];
          const debt = row["latest.aid.median_debt.completers.overall"];
          const acceptance = row["latest.admissions.admission_rate.overall"];
          const roiScore =
            earnings && tuition ? earnings / (tuition + 1) : null;

          return {
            id: row.id,
            name,
            city,
            state,
            earnings,
            tuition,
            debt,
            acceptance,
            roiScore,
          };
        });

        setSchools(rows);
      } catch (e) {
        console.error(e);
        setError("Could not load rankings. Try again in a minute.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const sortedSchools = useMemo(() => {
    const list = [...schools];

    list.sort((a, b) => {
      switch (sortBy) {
        case "earnings":
          return (b.earnings || 0) - (a.earnings || 0);
        case "cost":
          return (a.tuition || Infinity) - (b.tuition || Infinity);
        case "debt":
          return (a.debt || Infinity) - (b.debt || Infinity);
        case "acceptance":
          return (b.acceptance || 0) - (a.acceptance || 0);
        case "roi":
        default:
          return (b.roiScore || 0) - (a.roiScore || 0);
      }
    });

    return list;
  }, [schools, sortBy]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setQuery(searchInput.trim());
  };

  return (
    <Layout title="College Rankings – Real ROI, Not Vibes">
      <section className="hero">
        <p className="eyebrow">
          RANKINGS POWERED BY REAL NUMBERS, NOT MARKETING
        </p>
        <h1 className="hero-title">
          College rankings based on{" "}
          <span className="accent">earnings, debt, and cost</span>.
        </h1>
        <p className="hero-subtitle">
          Rankings powered by the U.S. Department of Education&apos;s College
          Scorecard: earnings 10 years after entry, typical debt, yearly cost,
          and acceptance rate. Not vibes. Not brochures. Just numbers.
        </p>

        {/* SEARCH BAR */}
        <form onSubmit={handleSubmit} className="rankings-search">
          <input
            type="text"
            placeholder="Search by school name (e.g. Florida, Miami, State, Tech)…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="rankings-search-input"
          />
          <p className="rankings-search-caption">
            Data source: U.S. Dept of Education – College Scorecard. Press{" "}
            <strong>Enter</strong> to search.
          </p>
        </form>
      </section>

      <section className="section">
        <div className="rankings-header">
          <h2 className="section-title">Top schools by earnings vs cost</h2>

          <div className="rankings-controls">
            <span className="rankings-sort-label">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rankings-select"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && (
          <p className="rankings-status">Crunching the numbers…</p>
        )}
        {error && <p className="rankings-status error">{error}</p>}
        {!loading && !error && sortedSchools.length === 0 && (
          <p className="rankings-status">
            No schools found. Try a broader search (just the state, city, or
            first word of the school).
          </p>
        )}

        <div className="path-grid">
          {sortedSchools.map((s, idx) => (
            <article key={s.id || idx} className="path-card rankings-card">
              <header className="rankings-card-header">
                <div className="rankings-rank">#{idx + 1}</div>
                <div>
                  <h3 className="rankings-name">
                    {s.name || "Unknown school"}
                  </h3>
                  <p className="rankings-location">
                    {s.city && s.state ? `${s.city}, ${s.state}` : "Location N/A"}
                  </p>
                </div>
                {s.roiScore && (
                  <div className="rankings-roi-pill">
                    ROI score: {s.roiScore.toFixed(2)}
                  </div>
                )}
              </header>

              <div className="rankings-grid">
                <div className="rankings-metric">
                  <span className="rankings-label">Total cost / year</span>
                  <span className="rankings-value">
                    {formatMoney(s.tuition)}
                  </span>
                </div>
                <div className="rankings-metric">
                  <span className="rankings-label">Median debt</span>
                  <span className="rankings-value">
                    {formatMoney(s.debt)}
                  </span>
                </div>
                <div className="rankings-metric">
                  <span className="rankings-label">Earnings after 10 yrs</span>
                  <span className="rankings-value">
                    {formatMoney(s.earnings)}
                  </span>
                </div>
                <div className="rankings-metric">
                  <span className="rankings-label">Acceptance rate</span>
                  <span className="rankings-value">
                    {formatPercent(s.acceptance)}
                  </span>
                </div>
              </div>

              {s.name && (
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    s.name + " official website"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="path-link rankings-link"
                >
                  Visit school site →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
                                               }
