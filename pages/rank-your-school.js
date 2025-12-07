// pages/rank-your-school.js
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
  const [query, setQuery] = useState("university");
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
          const earnings = row["latest.earnings.10_yrs_after_entry.median"];
          const tuition = row["latest.cost.tuition.in_state"];
          const debt = row["latest.aid.median_debt.completers.overall"];
          const roiScore = earnings && tuition ? earnings / tuition : null;

          return {
            id: row.id,
            name: row["school.name"],
            city: row["school.city"],
            state: row["school.state"],
            earnings,
            tuition,
            debt,
            acceptance: row["latest.admissions.admission_rate.overall"],
            roiScore,
          };
        });

        setSchools(rows);
      } catch (e) {
        console.error(e);
        setError("Could not load schools. Try again.");
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
    if (searchInput.trim()) setQuery(searchInput.trim());
  };

  return (
    <Layout title="Rank Your School – Real ROI 2025">
      <section className="hero">
        <p className="eyebrow">REAL DATA. NO MARKETING.</p>
        <h1 className="hero-title">College Rankings by Actual ROI</h1>
        <p className="hero-subtitle">
          Earnings vs cost vs debt. Powered by U.S. Dept of Education. Updated 2025.
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
          <input
            type="text"
            placeholder="Search any school, state, or city..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "560px",
              padding: "0.95rem 1.4rem",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.7)",
              background: "rgba(15,23,42,0.98)",
              color: "#e5e7eb",
              fontSize: "1rem",
            }}
          />
        </form>
      </section>

      <section className="section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <h2 className="section-title">
            Results {schools.length > 0 && `(${schools.length})`}
          </h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rankings-select"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {loading && <p>Loading real numbers…</p>}
        {error && <p style={{ color: "#fca5a5" }}>{error}</p>}

        <div className="path-grid">
          {sortedSchools.map((s, i) => (
            <div key={s.id || i} className="path-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>
                  #{i + 1} {s.name}
                </h3>
                {s.roiScore && (
                  <span
                    style={{
                      fontSize: "0.8rem",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "999px",
                      background: "rgba(34,211,238,0.2)",
                      color: "#22d3ee",
                    }}
                  >
                    ROI {(s.roiScore).toFixed(1)}x
                  </span>
                )}
              </div>
              <p style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
                {s.city}, {s.state}
              </p>

              <div className="rankings-grid">
                <div>
                  <span className="rankings-label">Yearly cost</span>
                  <br />
                  {formatMoney(s.tuition)}
                </div>
                <div>
                  <span className="rankings-label">Median debt</span>
                  <br />
                  {formatMoney(s.debt)}
                </div>
                <div>
                  <span className="rankings-label">Earnings 10yr</span>
                  <br />
                  {formatMoney(s.earnings)}
                </div>
                <div>
                  <span className="rankings-label">Acceptance</span>
                  <br />
                  {formatPercent(s.acceptance)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
