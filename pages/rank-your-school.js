// pages/rank-your-school.js
import { useState } from "react";
import Layout from "../components/Layout";

export default function RankYourSchool() {
  const [school, setSchool] = useState("");
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");
  const [ratings, setRatings] = useState([
    {
      school: "Generic State University",
      rating: 2,
      review: "Good parties, brutal debt. Wish I did a trade first.",
    },
    {
      school: "Local Community College",
      rating: 4,
      review: "Cheap, solid teachers, transferred after 2 years and saved a ton.",
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!school.trim()) return;
    const r = Math.min(5, Math.max(1, Number(rating) || 1));
    setRatings([{ school, rating: r, review: review.trim() }, ...ratings]);
    setSchool("");
    setRating(3);
    setReview("");
  }

  return (
    <Layout title="Rank Your School – Real ROI & Vibe">
      <section className="hero">
        <p className="eyebrow">NO BROCHURE FLUFF</p>
        <h1 className="hero-title">Rank your school&apos;s ROI &amp; vibe</h1>
        <p className="hero-subtitle">
          Tell future students how your college actually is — financially and
          culturally. One quick rating, anonymous by default.
        </p>
      </section>

      <section className="section">
        <form className="hero" onSubmit={handleSubmit}>
          <div className="hero-stats" style={{ marginTop: "0" }}>
            <div className="stat">
              <label className="stat-label">School name</label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
                placeholder="e.g. Florida State University"
                style={{
                  width: "100%",
                  marginTop: "0.4rem",
                  padding: "0.5rem 0.65rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(148,163,184,0.7)",
                  background: "rgba(15,23,42,0.95)",
                  color: "#e5e7eb",
                }}
              />
            </div>
            <div className="stat">
              <label className="stat-label">Rating (1–5)</label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={{
                  width: "100%",
                  marginTop: "0.4rem",
                  padding: "0.5rem 0.65rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(148,163,184,0.7)",
                  background: "rgba(15,23,42,0.95)",
                  color: "#e5e7eb",
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label className="stat-label">
              One or two sentence review (optional)
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={3}
              placeholder="Example: Great program for engineering, terrible advising. Way more debt than they made it sound."
              style={{
                width: "100%",
                marginTop: "0.4rem",
                padding: "0.6rem 0.75rem",
                borderRadius: "0.7rem",
                border: "1px solid rgba(148,163,184,0.7)",
                background: "rgba(15,23,42,0.95)",
                color: "#e5e7eb",
                resize: "vertical",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              flexWrap: "wrap",
            }}
          >
            <button type="submit" className="btn btn-primary">
              Submit rating
            </button>
            <p
              style={{
                fontSize: "0.8rem",
                opacity: 0.8,
                margin: 0,
                maxWidth: "420px",
              }}
            >
              For now, ratings are stored locally on this page only. In a future
              update we&apos;ll publish a public, anonymous leaderboard.
            </p>
          </div>
        </form>
      </section>

      {/* RECENT RATINGS */}
      <section className="section">
        <h2 className="section-title">Recent ratings (sample + yours)</h2>
        <div className="quote-list">
          {ratings.map((r, idx) => (
            <figure className="quote-card" key={idx}>
              <blockquote>
                <strong>{r.school}</strong> — {r.rating}/5
                {r.review ? ` – “${r.review}”` : ""}
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
