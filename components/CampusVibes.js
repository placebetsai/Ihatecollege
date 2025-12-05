import { useMemo, useState } from "react";

const COLLEGES = [
  { name: "American University", state: "DC", type: "Private", vibe: "liberal", vibeScore: 82 },
  { name: "University of Vermont", state: "VT", type: "Public", vibe: "liberal", vibeScore: 80 },
  { name: "Oberlin College", state: "OH", type: "Private", vibe: "liberal", vibeScore: 88 },
  { name: "UC Berkeley", state: "CA", type: "Public", vibe: "liberal", vibeScore: 85 },
  { name: "New York University", state: "NY", type: "Private", vibe: "liberal", vibeScore: 78 },
  { name: "Liberty University", state: "VA", type: "Private", vibe: "conservative", vibeScore: 25 },
  { name: "Grove City College", state: "PA", type: "Private", vibe: "conservative", vibeScore: 28 },
  { name: "Brigham Young University (Provo)", state: "UT", type: "Private", vibe: "conservative", vibeScore: 30 },
  { name: "Pensacola Christian College", state: "FL", type: "Private", vibe: "conservative", vibeScore: 22 },
  { name: "Bob Jones University", state: "SC", type: "Private", vibe: "conservative", vibeScore: 20 },
  { name: "Arizona State University", state: "AZ", type: "Public", vibe: "mixed", vibeScore: 55 },
  { name: "Ohio State University", state: "OH", type: "Public", vibe: "mixed", vibeScore: 50 }
];

function vibeLabel(vibe) {
  if (vibe === "liberal") return "More liberal";
  if (vibe === "conservative") return "More conservative";
  return "Mixed";
}

export default function CampusVibes() {
  const [search, setSearch] = useState("");
  const [vibeFilter, setVibeFilter] = useState("");

  const filtered = useMemo(() => {
    const term = search.toLowerCase();
    return COLLEGES.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(term) ||
        c.state.toLowerCase().includes(term);
      const matchesVibe = !vibeFilter || c.vibe === vibeFilter;
      return matchesSearch && matchesVibe;
    });
  }, [search, vibeFilter]);

  return (
    <section id="vibes" className="section">
      <div className="section-header">
        <h2>Campus vibes: liberal, conservative, or just chaos?</h2>
        <p>
          Use this as a quick snapshot so you don&apos;t walk in shocked.
        </p>
      </div>

      <div className="card table-card">
        <div className="table-controls">
          <input
            type="text"
            placeholder="Search college or state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={vibeFilter}
            onChange={(e) => setVibeFilter(e.target.value)}
          >
            <option value="">All vibes</option>
            <option value="liberal">More liberal</option>
            <option value="mixed">Mixed</option>
            <option value="conservative">More conservative</option>
          </select>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>College</th>
                <th>State</th>
                <th>Type</th>
                <th>Vibe score</th>
                <th>Vibe</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td>{c.state}</td>
                  <td>{c.type}</td>
                  <td>{c.vibeScore}</td>
                  <td>
                    <span className={`badge badge-${c.vibe}`}>
                      {vibeLabel(c.vibe)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="hint">
          Based on public rankings + student chatter. Not official, just a starting point.
        </p>
      </div>
    </section>
  );
              }
