// pages/api/college-rankings.js

export default async function handler(req, res) {
  const API_KEY = process.env.COLLEGE_SCORECARD_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key missing" });
  }

  const { search = "university", page = "0" } = req.query;
  const perPage = 20;

  const fields = [
    "id",
    "school.name",
    "school.city",
    "school.state",
    "latest.cost.tuition.in_state",
    "latest.admissions.admission_rate.overall",
    "latest.earnings.10_yrs_after_entry.median",
    "latest.aid.median_debt.completers.overall"
  ].join(",");

  const url = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${API_KEY}&school.name=${encodeURIComponent(
    search
  )}&per_page=${perPage}&page=${page}&fields=${fields}`;

  try {
    const resp = await fetch(url);
    const data = await resp.json();

    if (!resp.ok) throw new Error("API error");

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch schools" });
  }
}
