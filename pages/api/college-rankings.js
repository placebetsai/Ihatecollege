// pages/api/college-rankings.js

const BASE_URL = "https://api.data.gov/ed/collegescorecard/v1/schools";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.COLLEGE_SCORECARD_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server not configured (missing API key)" });
  }

  const {
    page = "0",       // 0-based for Scorecard
    per_page = "40",  // how many schools to show
    search = "",      // optional text search
  } = req.query;

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      per_page: String(per_page),
      page: String(page),
      // 4-year+ schools
      "school.degrees_awarded.highest": "3",
      // not tiny random schools
      "latest.student.size__range": "2000..",
      // fields we care about
      fields: [
        "id",
        "school.name",
        "school.city",
        "school.state",
        "school.school_url",
        "latest.student.size",
        "latest.cost.attendance.academic_year",
        "latest.aid.median_debt.completers.overall",
        "latest.earnings.10_yrs_after_entry.median",
        "latest.admissions.admission_rate.overall",
      ].join(","),
      // sort by highest earnings 10 years after entry
      sort: "latest.earnings.10_yrs_after_entry.median:desc",
    });

    if (search && search.trim()) {
      // partial name match – Scorecard treats this like a filter
      params.append("school.name", search.trim());
    }

    const url = `${BASE_URL}?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
      const text = await response.text();
      console.error("CollegeScorecard API error:", response.status, text);
      return res.status(502).json({ error: "Upstream API error" });
    }

    const data = await response.json();

    const schools = (data.results || []).map((s) => {
      const cost = s["latest.cost.attendance.academic_year"];
      const debt = s["latest.aid.median_debt.completers.overall"];
      const earnings = s["latest.earnings.10_yrs_after_entry.median"];
      const admitRate = s["latest.admissions.admission_rate.overall"];
      const size = s["latest.student.size"];

      // simple ROI score: earnings vs. cost + debt (best = highest score)
      let roiScore = null;
      if (earnings && (cost || debt)) {
        const totalCost = (cost || 0) + (debt || 0);
        if (totalCost > 0) {
          roiScore = earnings / totalCost;
        }
      }

      return {
        id: s.id,
        name: s["school.name"],
        city: s["school.city"],
        state: s["school.state"],
        url: s["school.school_url"],
        size: size || null,
        cost,
        debt,
        earnings,
        admitRate,
        roiScore,
      };
    });

    return res.status(200).json({
      schools,
      total: data.metadata?.total || schools.length,
      page: Number(page),
      per_page: Number(per_page),
    });
  } catch (err) {
    console.error("college-rankings handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
