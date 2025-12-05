import { useState } from "react";

export default function RankCollege() {
  const [ratings, setRatings] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const entry = {
      collegeName: form.collegeName.value.trim(),
      hateScore: form.hateScore.value,
      politics: form.politics.value,
      topHates: form.topHates.value.trim(),
      oneGood: form.oneGood.value.trim()
    };
    if (!entry.collegeName || !entry.hateScore) return;
    setRatings((prev) => [...prev, entry]);
    form.reset();
  }

  return (
    <section id="rank" className="section">
      <div className="section-header">
        <h2>Rank your college like it&apos;s a restaurant</h2>
        <p>
          Be blunt. Right now it only saves in your browser. Later this can power anonymous rankings.
        </p>
      </div>

      <div className="rank-grid">
        <form className="card form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="collegeName">College name</label>
            <input id="collegeName" name="collegeName" type="text" required />
          </div>
          <div className="form-row">
            <label htmlFor="hateScore">&quot;I Hate This Place&quot; score (1–10)</label>
            <input id="hateScore" name="hateScore" type="number" min="1" max="10" required />
          </div>
          <div className="form-row">
            <label htmlFor="politics">Campus politics vibe</label>
            <select id="politics" name="politics" required>
              <option value="">Select one</option>
              <option value="liberal">Feels more liberal</option>
              <option value="balanced">Mixed / balanced</option>
              <option value="conservative">Feels more conservative</option>
              <option value="idk">Not sure / don&apos;t care</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="topHates">Top 3 things you hate</label>
            <textarea id="topHates" name="topHates" />
          </div>
          <div className="form-row">
            <label htmlFor="oneGood">One thing they actually do well</label>
            <textarea id="oneGood" name="oneGood" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit my rating
          </button>
          <p className="hint">
            Your entries stay in your browser only. Future version: anonymized global rankings &amp; heatmaps.
          </p>
        </form>

        {ratings.length > 0 && (
          <div className="card ratings-card">
            <h3>Your ratings this session</h3>
            <ul>
              {ratings.map((r, i) => (
                <li key={i}>
                  <strong>{r.collegeName}</strong> – Hate score {r.hateScore}/10, vibe:{" "}
                  {r.politics || "n/a"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
    }
