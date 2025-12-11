import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function RankYourSchool() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setSearched(true);
    
    // In a real app, this fetches from your API. 
    // We'll simulate a fetch for now to prevent crashes.
    try {
      const res = await fetch(`/api/college-rankings?search=${query}`);
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <SEO title="Rank Your School | Real Student Reviews" />
      <section className="pt-20 pb-20 min-h-screen">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Is your school a scam?
          </h1>
          <p className="text-slate-400 mb-8">
            Search 3,000+ colleges to see real costs, debt numbers, and student ratings.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2 mb-12">
            <input 
              type="text" 
              placeholder="Search by school name (e.g. Ohio State)" 
              className="flex-1 p-4 rounded-full bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-full">
              Search
            </button>
          </form>

          {loading && <div className="text-cyan-400">Searching database...</div>}

          {!loading && searched && results.length === 0 && (
            <div className="text-slate-500">No results found. Try a different name.</div>
          )}

          <div className="space-y-4 text-left">
            {results.map((school) => (
              <div key={school.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-white">{school.name}</h3>
                <div className="flex gap-4 text-sm text-slate-400 mt-2">
                  <span>📍 {school.city}, {school.state}</span>
                  <span>💰 Avg Cost: {school.cost}</span>
                  <span className="text-red-400">📉 Debt: {school.debt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}