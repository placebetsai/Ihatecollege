import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function RankYourSchool() {
  const [query, setQuery] = useState("");
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  // Auto-search on load so the page isn't empty
  useEffect(() => {
    fetchSchools("University");
  }, []);

  const fetchSchools = async (searchTerm) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/college-rankings?search=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      setSchools(data.results || []);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchSchools(query);
  };

  return (
    <Layout>
      <SEO 
        title="Rank Your College | Real Debt & Earnings Data" 
        description="Search the government database to see the real cost, debt, and earnings for any college in America."
      />
      
      <section className="site-main">
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", paddingTop: "2rem" }}>
          <h1 className="hero-title">Is your school a <span className="accent">scam?</span></h1>
          <p className="hero-subtitle" style={{ margin: "0 auto 2rem" }}>
            Search the official government database. See the real cost, average debt, and alumni earnings.
          </p>

          <form onSubmit={handleSearch} className="rankings-search">
            <div style={{ 
              display: "flex", 
              gap: "10px", 
              background: "#0f172a", 
              padding: "8px", 
              borderRadius: "999px",
              border: "1px solid #334155",
              boxShadow: "0 0 15px rgba(0,0,0,0.5)"
            }}>
              <input
                type="text"
                placeholder="Enter college name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  color: "white",
                  padding: "1rem",
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ 
                  padding: "0 2.5rem",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  border: "none"
                }}
              >
                {loading ? "..." : "Search"}
              </button>
            </div>
          </form>

          {/* LIVE LIST RESULTS */}
          <div style={{ marginTop: "3rem", textAlign: "left" }}>
            {loading && <p style={{ color: "#22d3ee", textAlign: "center" }}>Loading real government data...</p>}
            
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
