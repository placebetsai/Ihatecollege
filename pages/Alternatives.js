// pages/alternatives.js
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

const SECTIONS = [
  {
    title: "Tech Career Certificates",
    subtitle: "Shorter, cheaper, job-focused. No dorm drama.",
    items: [
      {
        name: "CompTIA A+ / Network+ / Security+",
        url: "https://www.comptia.org/certifications",
        desc: "Baseline IT and cybersecurity certs that employers actually recognize. Good entry into help desk, IT support, and security.",
        tag: "IT & Cyber",
      },
      {
        name: "Google / IBM / Meta IT & Data Certs (Coursera)",
        url: "https://www.coursera.org/certificates",
        desc: "Brand-name backed certs in IT support, data analytics, UX design, project management, and more.",
        tag: "Remote-friendly",
      },
      {
        name: "AWS Cloud Practitioner & Associate",
        url: "https://www.aws.training/Details/Certification",
        desc: "Cloud certs that help you get into cloud support, operations, or junior DevOps roles.",
        tag: "Cloud",
      },
    ],
  },
  {
    title: "Trades & Apprenticeships",
    subtitle: "Get paid to learn instead of paying to sit in a lecture.",
    items: [
      {
        name: "Penn Foster HVAC Technician",
        url: "https://www.pennfoster.edu/programs-and-degrees/construction/hvac-technician-career-diploma",
        desc: "Online HVAC training that prepares you for entry-level technician work and certification exams.",
        tag: "HVAC",
      },
      {
        name: "The Blue Collar Virtual Trade School",
        url: "https://thebluecollarrecruiter.com/vts-overview/",
        desc: "Remote training for HVAC, plumbing, electrical, and more. Hands-on jobs with constant demand.",
        tag: "Multi-trade",
      },
      {
        name: "DMAC Trade School (Online HVAC/Electrical)",
        url: "https://dmaceducation.online/",
        desc: "Fast-track trade training focused on HVAC, solar, and electrical work.",
        tag: "Online trades",
      },
      {
        name: "US Apprenticeship Finder",
        url: "https://www.apprenticeship.gov/apprenticeship-job-finder",
        desc: "Official U.S. portal for paid apprenticeships in multiple trades and industries.",
        tag: "Paid training",
      },
    ],
  },
  {
    title: "Bootcamps & Sprints",
    subtitle: "3–9 months of grind, then a chance at better pay.",
    items: [
      {
        name: "Course Report – Compare Bootcamps",
        url: "https://www.coursereport.com/",
        desc: "Side-by-side reviews of coding, data, UX, and cyber bootcamps. Use this before dropping serious cash.",
        tag: "Research",
      },
      {
        name: "SwitchUp – Bootcamp Reviews",
        url: "https://www.switchup.org/",
        desc: "Student reviews and ratings so you can avoid shady or weak programs.",
        tag: "Reviews",
      },
      {
        name: "Fullstack Academy – Cyber & Dev Bootcamps",
        url: "https://www.fullstackacademy.com/",
        desc: "Cybersecurity and full-stack bootcamps with remote options and job-support services.",
        tag: "Cyber & Dev",
      },
    ],
  },
  {
    title: "AI & Creator Hustles",
    subtitle: "Not magic money, but real ways to earn without a degree.",
    items: [
      {
        name: "YouTube Creator Academy",
        url: "https://www.youtube.com/creators/",
        desc: "Official YouTube playbook on scripting, editing, thumbnails, and growth.",
        tag: "Video",
      },
      {
        name: "Canva Creator Program",
        url: "https://www.canva.com/creators/",
        desc: "Design templates once and earn royalties every time people use them.",
        tag: "Digital products",
      },
      {
        name: "Fiverr Freelance Marketplace",
        url: "https://www.fiverr.com/",
        desc: "Sell AI automation, editing, thumbnails, websites, resumes, and more. Income = proof of skill, not a diploma.",
        tag: "Freelance",
      },
      {
        name: "Upwork – Long-term Freelance Gigs",
        url: "https://www.upwork.com/",
        desc: "Freelance work in writing, dev, design, ops, support, and beyond. Build a portfolio while you eat.",
        tag: "Freelance",
      },
    ],
  },
];

const SALARY_ROWS = [
  {
    path: "General 4-year degree (avg)",
    training: "4 years",
    debt: "$30k – $50k+",
    pay: "$50k – $65k / yr",
  },
  {
    path: "Electrician / HVAC / Plumber",
    training: "1–3 yrs (often paid)",
    debt: "Low–medium",
    pay: "$55k – $80k+ / yr",
  },
  {
    path: "Cybersecurity (certs + bootcamp)",
    training: "6–18 months",
    debt: "Low–medium",
    pay: "$60k – $90k+ / yr",
  },
  {
    path: "Cloud / DevOps (cert path)",
    training: "9–18 months",
    debt: "Low–medium",
    pay: "$70k – $110k+ / yr",
  },
];

export default function AlternativesPage() {
  return (
    <>
      <Head>
        <title>
          College Alternatives – Trades, Tech Certs, Bootcamps & Creator Paths | I Hate College
        </title>
        <meta
          name="description"
          content="Explore real alternatives to a 4-year degree: trades, apprenticeships, tech certifications, bootcamps, and creator paths with real links and resources."
        />
      </Head>

      <div className="alt-root">
        <Navbar />

        <main className="alt-main">
          <section className="alt-hero">
            <p className="alt-kicker">ALTERNATIVES • OPTIONS THEY NEVER MENTIONED IN ORIENTATION</p>
            <h1 className="alt-title">
              College isn&apos;t the only path.
              <span className="alt-title-highlight"> Here&apos;s what else actually exists.</span>
            </h1>
            <p className="alt-subtitle">
              Real programs. Real certifications. Real trades. Not just &quot;start a YouTube
              channel&quot; nonsense – but the stuff people actually use to make a living without
              a 4-year degree.
            </p>
            <div className="alt-hero-actions">
              <Link href="/cost" className="alt-btn-primary">
                Compare costs with debt calculator
              </Link>
              <Link href="/rank" className="alt-btn-secondary">
                Rate your current school
              </Link>
            </div>
          </section>

          {/* Salary comparison */}
          <section className="alt-section">
            <h2 className="alt-section-title">Time vs money: rough comparison</h2>
            <p className="alt-section-subtitle">
              These are ballpark ranges – not guarantees. But if nobody has ever shown you the
              trade-offs, this is your starting point.
            </p>
            <div className="alt-table-wrapper">
              <table className="alt-table">
                <thead>
                  <tr>
                    <th>Path</th>
                    <th>Training time</th>
                    <th>Typical debt</th>
                    <th>Typical pay range*</th>
                  </tr>
                </thead>
                <tbody>
                  {SALARY_ROWS.map((row) => (
                    <tr key={row.path}>
                      <td>{row.path}</td>
                      <td>{row.training}</td>
                      <td>{row.debt}</td>
                      <td>{row.pay}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="alt-footnote">
                *Ranges based on public salary data and job listings. Where you live, how good you
                get, and timing all still matter.
              </p>
            </div>
          </section>

          {/* Sections with real links */}
          {SECTIONS.map((section) => (
            <section key={section.title} className="alt-section">
              <div className="alt-section-header">
                <h2 className="alt-section-title">{section.title}</h2>
                <p className="alt-section-subtitle">{section.subtitle}</p>
              </div>

              <div className="alt-grid">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="alt-card"
                  >
                    <div className="alt-card-tag">{item.tag}</div>
                    <h3 className="alt-card-title">{item.name}</h3>
                    <p className="alt-card-text">{item.desc}</p>
                    <div className="alt-card-link">Open resource in new tab →</div>
                  </a>
                ))}
              </div>
            </section>
          ))}

          <section className="alt-bottom">
            <h2>How to actually use this page</h2>
            <ul>
              <li>Pick 1–2 paths that don&apos;t make you want to scream.</li>
              <li>Click through to the real sites and read what they actually offer.</li>
              <li>Run your numbers in the debt calculator and compare timelines.</li>
              <li>Talk to at least one person actually doing that job before you commit.</li>
            </ul>
          </section>
        </main>
      </div>

      <style jsx>{`
        .alt-root {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1f2937 0, #020617 55%);
          color: #f9fafb;
        }
        .alt-main {
          max-width: 1120px;
          margin: 0 auto;
          padding: 2rem 1.5rem 3rem;
        }
        .alt-hero {
          margin-bottom: 2rem;
        }
        .alt-kicker {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 0.75rem;
        }
        .alt-title {
          font-size: 2.3rem;
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 0.6rem;
        }
        @media (min-width: 900px) {
          .alt-title {
            font-size: 2.7rem;
          }
        }
        .alt-title-highlight {
          color: #fbbf24;
        }
        .alt-subtitle {
          font-size: 0.95rem;
          color: #e5e7eb;
          max-width: 40rem;
          margin-bottom: 1.2rem;
        }
        .alt-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .alt-btn-primary,
        .alt-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.3rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }
        .alt-btn-primary {
          background: #fbbf24;
          color: #020617;
        }
        .alt-btn-secondary {
          border: 1px solid #38bdf8;
          color: #e0f2fe;
          background: rgba(15, 23, 42, 0.9);
        }

        .alt-section {
          margin-top: 2.5rem;
        }
        .alt-section-header {
          margin-bottom: 1rem;
        }
        .alt-section-title {
          font-size: 1.35rem;
          font-weight: 700;
        }
        .alt-section-subtitle {
          font-size: 0.85rem;
          color: #cbd5f5;
          max-width: 36rem;
          margin-top: 0.25rem;
        }

        .alt-table-wrapper {
          margin-top: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.4);
          background: rgba(15, 23, 42, 0.95);
          overflow: hidden;
        }
        .alt-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
        }
        .alt-table thead {
          background: rgba(15, 23, 42, 0.98);
          color: #cbd5f5;
        }
        .alt-table th,
        .alt-table td {
          padding: 0.6rem 0.8rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.3);
        }
        .alt-table tbody tr:nth-child(odd) {
          background: rgba(15, 23, 42, 0.9);
        }
        .alt-table tbody tr:nth-child(even) {
          background: rgba(15, 23, 42, 0.75);
        }
        .alt-footnote {
          font-size: 0.7rem;
          color: #9ca3af;
          padding: 0.5rem 0.8rem 0.7rem;
        }

        .alt-grid {
          margin-top: 1rem;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 1rem;
        }
        @media (min-width: 860px) {
          .alt-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        .alt-card {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.5);
          background: rgba(15, 23, 42, 0.95);
          text-decoration: none;
          color: inherit;
          transition: border 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease,
            background 0.15s ease;
        }
        .alt-card:hover {
          border-color: #fbbf24;
          background: rgba(15, 23, 42, 1);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.65);
          transform: translateY(-2px);
        }
        .alt-card-tag {
          display: inline-flex;
          align-self: flex-start;
          padding: 0.15rem 0.6rem;
          border-radius: 999px;
          font-size: 0.7rem;
          background: rgba(56, 189, 248, 0.15);
          color: #7dd3fc;
        }
        .alt-card-title {
          font-size: 1rem;
          font-weight: 600;
        }
        .alt-card-text {
          font-size: 0.85rem;
          color: #e5e7eb;
        }
        .alt-card-link {
          margin-top: 0.4rem;
          font-size: 0.8rem;
          color: #fbbf24;
          font-weight: 600;
        }

        .alt-bottom {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(148, 163, 184, 0.4);
          font-size: 0.9rem;
        }
        .alt-bottom h2 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        .alt-bottom ul {
          list-style: disc;
          padding-left: 1.1rem;
          color: #e5e7eb;
        }
        .alt-bottom li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </>
  );
                }
