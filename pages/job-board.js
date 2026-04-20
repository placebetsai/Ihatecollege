import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import AdUnit from "../components/AdUnit";
import AffiliateCTA from "../components/AffiliateCTA";
import MoneyPathsHub from "../components/MoneyPathsHub";

const JOBS = [
  {
    title: "Electrician Apprentice",
    salary: "$55K-$85K",
    location: "Atlanta, GA",
    category: "trades",
    description: "Learn on the job through a paid apprenticeship — no degree or prior experience required.",
  },
  {
    title: "Plumber Journeyman",
    salary: "$50K-$75K",
    location: "Dallas, TX",
    category: "trades",
    description: "Licensed plumbers are in massive demand. Union and non-union shops hiring nationwide.",
  },
  {
    title: "AWS Cloud Technician (No Degree)",
    salary: "$70K-$110K",
    location: "Remote",
    category: "tech",
    description: "Employers hiring based on AWS certifications alone. Study for 3 months, skip 4 years of college.",
  },
  {
    title: "Welding Inspector",
    salary: "$60K-$90K",
    location: "Houston, TX",
    category: "trades",
    description: "Certified welding inspectors earn top pay in oil, gas, and infrastructure projects.",
  },
  {
    title: "HVAC Technician",
    salary: "$45K-$70K",
    location: "Phoenix, AZ",
    category: "trades",
    description: "Climate control is non-negotiable in the desert. Year-round demand, overtime available.",
  },
  {
    title: "Dental Hygienist",
    salary: "$65K-$85K",
    location: "Chicago, IL",
    category: "healthcare",
    description: "Associate degree or certificate program. Great hours, strong pay, always hiring.",
  },
  {
    title: "Commercial Truck Driver",
    salary: "$55K-$80K",
    location: "Nationwide",
    category: "other",
    description: "Get your CDL in 6 weeks — many companies pay for your training upfront.",
  },
  {
    title: "Wind Turbine Technician",
    salary: "$55K-$75K",
    location: "Oklahoma",
    category: "trades",
    description: "One of the fastest-growing jobs in America. Technical certificate programs take under a year.",
  },
  {
    title: "Real Estate Agent",
    salary: "$40K-$120K",
    location: "Miami, FL",
    category: "other",
    description: "Get licensed in 1-3 months. Commission-based — your income scales with your hustle.",
  },
  {
    title: "Cybersecurity Analyst (Cert Only)",
    salary: "$75K-$115K",
    location: "Remote",
    category: "tech",
    description: "CompTIA Security+ or Google Cybersecurity cert. Massive talent shortage, no degree needed.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "trades", label: "Trades" },
  { key: "tech", label: "Tech" },
  { key: "healthcare", label: "Healthcare" },
  { key: "other", label: "Other" },
];

export default function JobBoardPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? JOBS : JOBS.filter((j) => j.category === filter);

  return (
    <Layout>
      <SEO
        title="Jobs That Don't Need a Degree | IHateCollege.com"
        description="High-paying jobs without a degree in 2026. Trades, tech, healthcare, and more — real salaries, real locations, no student debt required."
      />

      {/* HERO */}
      <section className="hero text-center max-w-3xl mx-auto">
        <p className="eyebrow">SKIP THE DEGREE. GET THE BAG.</p>
        <h1 className="hero-title">Jobs That Don't Need a Degree</h1>
        <p className="hero-subtitle">
          High-paying careers. No student debt required.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="section max-w-4xl mx-auto px-4">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                border: filter === cat.key ? "2px solid #38bdf8" : "1px solid rgba(56, 189, 248, 0.3)",
                background: filter === cat.key ? "rgba(56, 189, 248, 0.15)" : "transparent",
                color: filter === cat.key ? "#fff" : "#94a3b8",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* JOB CARDS */}
      <section className="section max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((job) => (
            <div key={job.title} className="glow-card p-6">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                  {job.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#38bdf8",
                    fontFamily: "monospace",
                    whiteSpace: "nowrap",
                    marginLeft: "1rem",
                  }}
                >
                  {job.category}
                </span>
              </div>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", fontSize: "0.875rem" }}>
                <span style={{ color: "#4ade80", fontWeight: 700 }}>{job.salary}</span>
                <span style={{ color: "#94a3b8" }}>{job.location}</span>
              </div>
              <p style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: 1.6, margin: "0 0 1rem 0" }}>
                {job.description}
              </p>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(job.title + " jobs near me")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  background: "#0ea5e9",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.8125rem",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#38bdf8")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#0ea5e9")}
              >
                Search Jobs
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section max-w-2xl mx-auto px-4">
        <AdUnit slot="6600722153" />
      </section>

      <section className="section max-w-5xl mx-auto px-4">
        <MoneyPathsHub
          title="Not Sure Which Job Path Fits?"
          subtitle="Use these pages to compare debt, salary, and training time before you apply. They keep job-board traffic moving deeper into the site instead of dying on one page."
        />
      </section>

      <section className="section max-w-5xl mx-auto px-4">
        <AffiliateCTA topic="trade" />
      </section>

      {/* BOTTOM CTA */}
      <section className="section max-w-4xl mx-auto px-4">
        <div className="glow-card text-center" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
            Want to list a job?
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
            We feature no-degree roles for free. Send us the details.
          </p>
          <a
            href="mailto:info@ihatecollege.com"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              background: "#0ea5e9",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#38bdf8")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#0ea5e9")}
          >
            Email info@ihatecollege.com
          </a>
        </div>
      </section>
    </Layout>
  );
}
