// pages/api/submit-rating.js

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { school, city, state, displayName, debtScore, mentalHealthScore, overallRating, comment, userId } = req.body || {};

  if (!school) return res.status(400).json({ error: "school is required" });

  const payload = {
    school: String(school).slice(0, 200),
    city: String(city || "").slice(0, 100),
    state: String(state || "").slice(0, 2).toUpperCase(),
    display_name: String(displayName || "Anonymous").slice(0, 50),
    debt_score: Math.min(10, Math.max(1, Number(debtScore) || 5)),
    mental_health_score: Math.min(10, Math.max(1, Number(mentalHealthScore) || 5)),
    overall_rating: Math.min(5, Math.max(0, Number(overallRating) || 0)),
    comment: String(comment || "").slice(0, 2000),
    created_at: new Date().toISOString(),
  };

  if (userId) payload.user_id = userId;

  console.log("[RATING]", JSON.stringify(payload));

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (url && key) {
    try {
      const resp = await fetch(`${url}/rest/v1/school_ratings`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (resp.ok) {
        return res.json({ ok: true });
      }

      const errText = await resp.text();
      console.error("[RATING] Supabase error:", resp.status, errText);
    } catch (err) {
      console.error("[RATING] Supabase fetch error:", err.message);
    }
  }

  // Still return success — rating is logged to server console for now
  return res.json({ ok: true, stored: "logs" });
}
