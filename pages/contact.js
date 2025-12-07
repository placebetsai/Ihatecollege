// pages/contact.js
import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout title="Contact – IHateCollege.com">
      <section className="hero">
        <p className="eyebrow">QUESTIONS? PARTNERSHIPS? STORIES?</p>
        <h1 className="hero-title">Get in touch</h1>
        <p className="hero-subtitle" style={{ maxWidth: "560px" }}>
          Got a win from skipping college? Buried in debt and pissed? Want to
          sponsor, partner, or pitch an idea? We actually read every message.
        </p>

        <div
          className="path-card"
          style={{
            marginTop: "2rem",
            padding: "1.6rem 1.5rem 1.9rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              margin: "0 0 0.75rem",
            }}
          >
            Questions or concerns?
          </h2>
          <p
            style={{
              fontSize: "0.98rem",
              color: "#d1d5db",
              marginBottom: "1.5rem",
              maxWidth: "520px",
            }}
          >
            Reach the IHateCollege team directly. No bots, no call center.
            Just real humans who hate predatory student debt as much as you do.
          </p>

          {/* CTA button – generic label, hidden email behind mailto */}
          <a
            href="mailto:info@ihatecollege.com?subject=IHateCollege.com%20Contact"
            className="btn btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.95rem 2.4rem",
              fontSize: "1.05rem",
              fontWeight: 600,
            }}
          >
            Email the team
          </a>

          <p
            style={{
              marginTop: "0.9rem",
              fontSize: "0.85rem",
              color: "#9ca3af",
            }}
          >
            We typically reply within 24–48 hours from our main inbox.
          </p>
        </div>

        {/* Extra card for partnerships / media (optional but makes page feel bigger) */}
        <div
          className="path-card"
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem 1.5rem 1.7rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.15rem",
              margin: "0 0 0.7rem",
            }}
          >
            Media & partnerships
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#d1d5db",
              marginBottom: "0.85rem",
              maxWidth: "520px",
            }}
          >
            Reporters, podcasts, brands, or creators who want to talk about the
            college-industrial complex and real alternatives — hit us up with
            “Media / Partnership” in the subject line.
          </p>
        </div>
      </section>
    </Layout>
  );
}
