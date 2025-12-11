import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function RankYourSchool() {
  const [query, setQuery] = useState("");
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setHasSearched(true);
    setSchools([]); // Clear old results

    try {
      const res = await fetch(`/api/college-rankings?search=${encodeURIComponent(query)}`);
      const data = await res.json();
      setSchools(data.results || []);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Rank Your School | Real Debt & Earnings Data" 
        description="Search the government database to see the real cost, debt, and earnings for any college in America."
      />
      
      <section className="site-main">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", paddingTop: "2rem" }}>
          <h1 className="hero-title">Is your school a <span className="accent">scam?</span></h1>
          <p className="hero-subtitle" style={{ margin: "0 auto 2rem" }}>
            Search the official government database. See the real cost, average debt, and alumni earnings.
          </p>

          <form onSubmit={handleSearch} className="rankings-search">
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                className="rankings-search-input"
                placeholder="Enter college name (e.g. Florida State)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: "0 2rem" }}>
                {loading ? "..." : "Search"}
              </button>
            </div>
          </form>

          {/* RESULTS AREA */}
          <div style={{ marginTop: "3rem", textAlign: "left" }}>
            
            {loading && <p style={{ color: "#22d3ee", textAlign: "center" }}>Searching government database...</p>}
            
            {!loading && hasSearched && schools.length === 0 && (
              <p style={{ color: "#9ca3af", textAlign: "center" }}>No schools found. Try a different name.</p>
            )}

            <div style={{ display: "grid", gap: "1rem" }}>
              {schools.map((school) => (
                <div key={school.id} className="path-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <h3 style={{ margin: 0, color: "white", fontSize: "1.2rem" }}>{school.name}</h3>
                    <p style={{ margin: 0, color: "#9ca3af", fontSize: "0.9rem" }}>{school.city}, {school.state}</p>
                  </div>
                  
                  <div style={{ display: "flex", gap: "2rem", textAlign: "right" }}>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "#9ca3af", textTransform: "uppercase" }}>Avg Cost</div>
                      <div style={{ fontWeight: "bold", color: "#e5e7eb" }}>{school.cost}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "#9ca3af", textTransform: "uppercase" }}>Avg Debt</div>
                      <div style={{ fontWeight: "bold", color: "#f87171" }}>{school.debt}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "#9ca3af", textTransform: "uppercase" }}>Earnings</div>
                      <div style={{ fontWeight: "bold", color: "#4ade80" }}>{school.earnings}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}