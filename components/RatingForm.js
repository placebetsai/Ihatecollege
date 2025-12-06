// components/RatingForm.js
import { useState } from "react";

export default function RatingForm() {
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [debtScore, setDebtScore] = useState(5);
  const [mentalHealthScore, setMentalHealthScore] = useState(5);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    try {
      const res = await fetch("/api/submit-rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          school,
          city,
          state,
          debtScore,
          mentalHealthScore,
          comment,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("✅ Thanks. Your experience is logged.");
      setSchool("");
      setCity("");
      setState("");
      setDebtScore(5);
      setMentalHealthScore(5);
      setComment("");
    } catch (err) {
      setStatus("❌ Something broke. Try again in a bit.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "1rem",
        display: "grid",
        gap: "0.75rem",
        maxWidth: 700,
      }}
    >
      <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
        Start simple: tell us where you went and how bad the{" "}
        <strong>debt + mental health tradeoff</strong> really was.
      </p>

      <div className="form-row">
        <label className="form-label">
          School name
          <input
            className="form-input"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Example: Generic State University"
            required
          />
        </label>
      </div>

      <div
        className="form-row"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "0.75rem",
        }}
      >
        <label className="form-label">
          City
          <input
            className="form-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </label>
        <label className="form-label">
          State
          <input
            className="form-input"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="FL, TX, CA…"
          />
        </label>
      </div>

      <div
        className="form-row"
        style={{ display: "grid", gap: "0.75rem" }}
      >
        <label className="form-label">
          Debt pain (1 = chill, 10 = nightmare)
          <input
            type="range"
            min="1"
            max="10"
            value={debtScore}
            onChange={(e) => setDebtScore(Number(e.target.value))}
          />
          <span style={{ fontSize: "0.85rem" }}>
            Current: {debtScore}/10
          </span>
        </label>

        <label className="form-label">
          Mental-health hit (1 = fine, 10 = meltdown)
          <input
            type="range"
            min="1"
            max="10"
            value={mentalHealthScore}
            onChange={(e) => setMentalHealthScore(Number(e.target.value))}
          />
          <span style={{ fontSize: "0.85rem" }}>
            Current: {mentalHealthScore}/10
          </span>
        </label>
      </div>

      <label className="form-label">
        What students should know (optional)
        <textarea
          className="form-input"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Dorms? Professors? Admin? Any bait-and-switch?"
        />
      </label>

      <button className="primary-btn" type="submit">
        Submit your rank
      </button>

      {status && (
        <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
          {status}
        </p>
      )}
    </form>
  );
        }
