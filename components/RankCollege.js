// components/RankCollege.js
const sampleSchools = [
  {
    name: "Generic State U",
    location: "Big City, USA",
    tuition: "$22k / year",
    avgDebt: "$29k",
    vibe: "Party + debt machine",
  },
  {
    name: "Honest Tech Institute",
    location: "Online / Hybrid",
    tuition: "$6k total",
    avgDebt: "$8k",
    vibe: "Hands-on, job-focused",
  },
  {
    name: "Prestige Private College",
    location: "Nice Suburb, USA",
    tuition: "$55k / year",
    avgDebt: "$45k",
    vibe: "Great network, brutal loans",
  },
];

export default function RankCollege() {
  return (
    <section className="section">
      <h2 className="section-heading">Early IHATECOLLEGE scorecard</h2>
      <p className="section-sub" style={{ maxWidth: 780 }}>
        We&apos;re building a crowd-sourced ranking that cares about{" "}
        <strong>debt, mental health, and actual outcomes</strong>—not
        marble statues and football stadiums.
      </p>

      <div
        style={{
          marginTop: "1.25rem",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          overflowX: "auto",
          background: "rgba(8,12,28,0.9)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9rem",
            minWidth: "640px",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>School</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Sticker Tuition</th>
              <th style={thStyle}>Avg Graduate Debt</th>
              <th style={thStyle}>IHATECOLLEGE Vibe</th>
            </tr>
          </thead>
          <tbody>
            {sampleSchools.map((row) => (
              <tr key={row.name}>
                <td style={tdStyle}>{row.name}</td>
                <td style={tdStyle}>{row.location}</td>
                <td style={tdStyle}>{row.tuition}</td>
                <td style={tdStyle}>{row.avgDebt}</td>
                <td style={tdStyle}>{row.vibe}</td>
              </tr>
            ))}
            <tr>
              <td style={tdStyle} colSpan={5}>
                <span style={{ opacity: 0.8 }}>
                  Future version: this table fills with{" "}
                  <strong>real user-submitted data</strong> from the form
                  below. No marketing fluff, just numbers from people who
                  lived it.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "0.8rem 1rem",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  fontWeight: 600,
  fontSize: "0.8rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const tdStyle = {
  padding: "0.75rem 1rem",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
};
