// pages/api/college-rankings.js
export default async function handler(req, res) {
  const API_KEY = process.env.COLLEGE_SCORECARD_API_KEY;

  if (!API_KEY) {
    // We log this so you can check Vercel logs if it fails
    console.error("API Key missing"); 
    return res.status(500).json({ error: "Server config error: Key missing" });
  }

  const { search = "" } = req.query;
  const page = 0;
  const perPage = 20;

  // We request these specific fields from the gov API
  const fields = [
    "id",
    "school.name",
    "school.city",
    "school.state",
    "latest.cost.tuition.in_state",
    "latest.aid.median_debt.completers.overall",
    "latest.earnings.10_yrs_after_entry.median"
  ].join(",");

  // Construct the real URL
  const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${API_KEY}&school.name=${encodeURIComponent(search)}&per_page=${perPage}&page=${page}&fields=${fields}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Gov API error: ${resp.status}`);
    const data = await resp.json();

    // Map the ugly government data keys to clean ones for your frontend
    const results = (data.results || []).map((item) => ({
      id: item.id,
      name: item["school.name"],
      city: item["school.city"],
      state: item["school.state"],
      cost: item["latest.cost.tuition.in_state"]
        ? `$${item["latest.cost.tuition.in_state"].toLocaleString()}`
        : "N/A",
      debt: item["latest.aid.median_debt.completers.overall"]
        ? `$${item["latest.aid.median_debt.completers.overall"].toLocaleString()}`
        : "N/A",
      earnings: item["latest.earnings.10_yrs_after_entry.median"]
         ? `$${item["latest.earnings.10_yrs_after_entry.median"].toLocaleString()}`
         : "N/A"
    }));

    res.status(200).json({ results });

  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch schools" });
  }
}