// pages/liberal-vs-conservative.js
import Head from "next/head";

const liberalColleges = [
  "UC Berkeley",
  "NYU",
  "Brown University",
  "Wesleyan University",
  "Oberlin College",
  "University of Vermont",
  "Smith / Wellesley / Barnard",
];

const conservativeColleges = [
  "Hillsdale College",
  "Liberty University",
  "Brigham Young University",
  "Texas A&M",
  "College of the Ozarks",
  "Grove City College",
  "Patrick Henry College",
];

export default function LiberalVsConservativePage() {
  return (
    <>
      <Head>
        <title>Liberal vs Conservative Colleges | IHATECOLLEGE.COM</title>
      </Head>

      {/* Intro */}
      <section className="section">
        <p className="eyebrow">Campus politics</p>
        <h1 className="section-title">Liberal vs Conservative Colleges</h1>
        <p className="section-sub">
          Some campuses lean hard left. Others lean right. Most are somewhere in
          the messy middle. This is a reputation-based vibe check, not a perfect
          scientific ranking.
        </p>
      </section>

      {/* Two lists */}
      <section
        className="section"
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "minmax(0, 1fr)",
        }}
      >
        {/* Liberal list */}
        <div
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 60%)",
            borderRadius: "18px",
            padding: "24px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            More liberal-leaning campuses
          </h2>
          <p style={{ opacity: 0.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
            Heavy activist culture, progressive politics, protests, speakers
            getting shouted down, etc.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {liberalColleges.map((name) => (
              <li
                key={name}
                style={{
                  padding: "0.4rem 0.7rem",
                  marginBottom: "0.4rem",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: "0.95rem",
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Conservative list */}
        <div
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 60%)",
            borderRadius: "18px",
            padding: "24px 20px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            More conservative-leaning campuses
          </h2>
          <p style={{ opacity: 0.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
            More religious/traditional, stricter codes of conduct, strong ROTC
            or business culture, more openly right-leaning speakers.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {conservativeColleges.map((name) => (
              <li
                key={name}
                style={{
                  padding: "0.4rem 0.7rem",
                  marginBottom: "0.4rem",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: "0.95rem",
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Disclaimer / future crowd input */}
      <section className="section" style={{ maxWidth: 780 }}>
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
          How to use this (and don&apos;t freak out)
        </h2>
        <ul style={{ paddingLeft: "1.1rem", fontSize: "0.95rem", opacity: 0.9 }}>
          <li style={{ marginBottom: "0.4rem" }}>
            Reputation only. Inside every “liberal” school you&apos;ll find
            conservatives and vice versa.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Use this as a starting point, then search news, student paper, and
            Reddit for receipts.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Future feature: anonymous student votes on how liberal/conservative
            each campus actually feels (1–10 scale).
          </li>
        </ul>
      </section>
    </>
  );
}
