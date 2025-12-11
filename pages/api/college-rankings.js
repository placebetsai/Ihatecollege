export default async function handler(req, res) {
  // Uses the key from your environment variables
  const API_KEY = process.env.COLLEGE_SCORECARD_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "Server config error: Key missing" });
  }

  // Default to "University" so the list isn't empty on load
  const { search = "University" } = req.query;
  const page = 0;
  const perPage = 25;

  const fields = [
    "id",
    "school.name",
    "school.city",
    "school.state",
    "latest.cost.tuition.in_state",
    "latest.aid.median_debt.completers.overall",
    "latest.earnings.10_yrs_after_entry.median"
  ].join(",");

  const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${API_KEY}&school.name=${encodeURIComponent(search)}&per_page=${perPage}&page=${page}&fields=${fields}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Gov API error: ${resp.status}`);
    const data = await resp.json();

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
