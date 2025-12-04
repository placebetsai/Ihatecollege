import { useState, useEffect } from "react";

export default function CollegeTable() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/colleges.json")
      .then(res => res.json())
      .then(setColleges);
  }, []);

  const filtered = colleges.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card mt-6">
      <h2 className="text-xl font-bold mb-2">Campus Vibes</h2>

      <input
        className="w-full p-2 rounded bg-gray-900 border border-gray-700 mb-3"
        placeholder="Search a college..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 text-left">College</th>
            <th className="p-2 text-left">State</th>
            <th className="p-2 text-left">Vibe</th>
            <th className="p-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c, i) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.state}</td>
              <td className="p-2 capitalize">{c.vibe}</td>
              <td className="p-2">{c.vibeScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
