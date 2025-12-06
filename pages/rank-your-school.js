import { useState } from "react";
import Layout from "../components/Layout";

export default function RankYourSchool() {
  const [school, setSchool] = useState("");
  const [rating, setRating] = useState(3);
  const [list, setList] = useState([]);

  const submit = () => {
    if (!school) return;
    const updated = [...list, { school, rating }];
    setList(updated);
    setSchool("");
    setRating(3);
  };

  return (
    <Layout title="Rank Your School">
      <h1>Rank Your School</h1>
      <p>Tell the world how your college ACTUALLY is — good or trash.</p>

      <div className="card">
        <label>School Name</label>
        <input
          className="input"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />

        <label>Rating (1–5)</label>
        <input
          className="input"
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <div className="btn" onClick={submit}>
          Submit Rating
        </div>
      </div>

      <h2>Recent Ratings</h2>

      {list.map((s, i) => (
        <div key={i} className="card">
          <strong>{s.school}</strong> — Rated {s.rating}/5
        </div>
      ))}
    </Layout>
  );
}
