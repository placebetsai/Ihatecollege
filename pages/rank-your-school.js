import Head from 'next/head';
import { useState } from 'react';

export default function RankYourSchoolPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Rank your school – ihatecollege.com</title>
        <meta
          name="description"
          content="Anonymous form to vent about your school and rate the vibes, politics, and actual value."
        />
      </Head>

      <div className="page-header">
        <div className="page-kicker">RANK YOUR SCHOOL</div>
        <h1 className="page-title">Roast or praise your campus.</h1>
        <p className="page-subtitle">
          Quick, anonymous rating. In a future version these will roll into public scores and
          vibe maps by campus.
        </p>
      </div>

      <form className="simple-form" onSubmit={handleSubmit}>
        <label>
          College name
          <input type="text" required placeholder="e.g. State University at Somewhere" />
        </label>

        <label>
          &quot;I hate this place&quot; score (1–10)
          <input type="number" min="1" max="10" required />
        </label>

        <label>
          Campus politics vibe
          <select defaultValue="mixed">
            <option value="mostly-liberal">Mostly liberal</option>
            <option value="mostly-conservative">Mostly conservative</option>
            <option value="mixed">Mixed / depends on major</option>
            <option value="chaos">Just chaos</option>
          </select>
        </label>

        <label>
          Top 3 things you hate
          <textarea placeholder="Parking, admin, profs, tuition, dining hall, whatever…" />
        </label>

        <label>
          One thing they actually do well
          <textarea placeholder="If you can think of anything." />
        </label>

        <button type="submit" className="btn-primary">
          Submit (local only)
        </button>

        {submitted && (
          <p style={{ fontSize: '0.8rem', marginTop: '0.6rem', color: '#9ca3af' }}>
            Saved for now in this session only. Future version will push this into anonymous rankings.
          </p>
        )}
      </form>
    </>
  );
          }
