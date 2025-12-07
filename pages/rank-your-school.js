// pages/rank-your-school.js
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function RankYourSchoolPage() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams({
          page: String(page),
          per_page: "40",
        });
        if (search.trim()) {
          params.set("search", search.trim());
        }

        const res = await fetch(`/api/college-rankings?${params.toString()}`);
        if (!res.ok) {
          throw new Error("Failed to load rankings");
        }
        const data = await res.json();
        if (!ignore) {
          setSchools(data.schools || []);
        }
      } catch (err) {
        if (!ignore) {
          setError("Could not load live rankings. Try again in a bit.");
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [search, page]);

  return (
    <Layout title="College Rankings – Earnings vs Debt (Real Data)">
      <section className="hero">
        <p className="eyebrow">REAL DATA. NO BROCHURE BULLSHIT.</p>
        <h1 className="hero-title">
          College Rankings Based on <span className="accent">Actual Outcomes</span>
        </h1>

        <p className="hero-subtitle">
          Rankings powered by the U.S. Department of Education&apos;s College Scorecard:
          earnings 10 years after entry, typical debt, total cost, and acceptance rate.
          Not vibes. Not marketing. Just numbers.
        </p>

        <div
          style={{
            marginTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.9rem",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search by school name (e.g. Florida, MIT, Miami)..."
            value={search}
            onChange={(e) => {
              setPage(0);
              setSearch(e.target.value);
            }}
            style={{
              flex: "1 1 260px",
              minWidth: "0",
              padding: "0.7rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid rgba(148,163,184,0.7)",
              background: "rgba(15,23,42,0.95)",
              color: "#e5e7eb",
              fontSize: "0.95rem",
            }}
          />

          <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
            Data source: U.S. Dept of Education – College Scorecard
          </span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Top schools by earnings vs cost</h2>

        {loading && (
          <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
            Crunching the numbers…
          </p>
        )}

        {error && !loading && (
          <p style={{ color: "#fca5a5", fontSize: "0.9rem" }}>{error}</p>
        )}

        {!loading && !error && schools.length === 0 && (
          <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
            No results found. Try a different name or clear the search.
          </p>
        )}

        <div className="path-grid" style={{ marginTop: "1rem" }}>
          {schools.map((s, idx) => (
            <div key={s.id} className="path-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <h3 style={{ marginBottom: "0.1rem" }}>
                    #{idx + 1 + page * 40} {s.name}
                  </h3>
                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.8rem",
                      margin: 0,
                    }}
                  >
                    {s.city}, {s.state}{" "}
                    {s.size ? `· ${s.size.toLocaleString()} students` : ""}
                  </p>
                </div>
                {typeof s.roiScore === "number" && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(125,211,252,0.6)",
                      background: "rgba(15,23,42,0.9)",
                      color: "#bae6fd",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ROI score: {s.roiScore.toFixed(2)}
                  </span>
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "0.5rem",
                  marginTop: "0.8rem",
                  fontSize: "0.82rem",
                }}
              >
                <Stat label="Total cost / year" value={
                  s.cost ? `$${s.cost.toLocaleString()}` : "N/A"
                } />
                <Stat label="Median debt" value={
                  s.debt ? `$${s.debt.toLocaleString()}` : "N/A"
                } />
                <Stat label="Earnings after 10 yrs" value={
                  s.earnings ? `$${s.earnings.toLocaleString()}` : "N/A"
                } />
                <Stat label="Acceptance rate" value={
                  typeof s.admitRate === "number"
                    ? `${(s.admitRate * 100).toFixed(1)}%`
                    : "N/A"
                } />
              </div>

              {s.url && (
                <a
                  href={
                    s.url.startsWith("http")
                      ? s.url
                      : `https://${s.url.replace(/^\/+/, "")}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="path-link"
                  style={{ marginTop: "0.7rem", display: "inline-block" }}
                >
                  Visit school site →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Simple pagination controls (optional) */}
        <div
          style={{
            marginTop: "1.5rem",
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <button
            className="btn btn-outline"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            style={{ opacity: page === 0 ? 0.5 : 1 }}
          >
            ← Previous
          </button>
          <button
            className="btn btn-outline"
            onClick={() => setPage((p) => p + 1)}
          >
            Next →
          </button>
          <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
            Page {page + 1}
          </span>
        </div>
      </section>
    </Layout>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.7rem",
          color: "#9ca3af",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {label}
      </div>
      <div style={{ color: "#e5e7eb", marginTop: "0.1rem" }}>{value}</div>
    </div>
  );
                    }
