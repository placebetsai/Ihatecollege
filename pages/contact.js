// pages/contact.js
import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout title="Contact – IHateCollege.com">
      <section className="hero">
        <p className="eyebrow">QUESTIONS? PARTNERSHIPS? STORIES?</p>
        <h1 className="hero-title">Get in touch</h1>

        <p className="hero-subtitle" style={{ maxWidth: "620px" }}>
          Whether you've got a success story, a debt horror story, a partnership
          idea, or you just want to roast your college — we read every message.
          We're building the real alternative to the college-industrial complex.
        </p>

        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.8rem",
            borderRadius: "1.2rem",
            background: "rgba(15,23,42,0.9)",
            border: "1px solid rgba(125, 211, 252, 0.45)",
            boxShadow:
              "0 0 18px rgba(56,189,248,0.25), inset 0 0 10px rgba(56,189,248,0.15)",
            maxWidth: "600px",
          }}
        >
          <h2
            className="section-title"
            style={{ marginBottom: "0.6rem", fontSize: "1.3rem" }}
          >
            Questions or concerns?
          </h2>
          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "1.3rem",
              lineHeight: "1.55",
            }}
          >
            Reach us directly anytime. We actually check this inbox.
          </p>

          <a
            href="mailto:info@ihatecollege.com"
            className="btn btn-primary"
            style={{
              fontSize: "1rem",
              padding: "0.85rem 1.6rem",
              display: "inline-block",
            }}
          >
            Email Us — info@ihatecollege.com
          </a>
        </div>
      </section>
    </Layout>
  );
}
