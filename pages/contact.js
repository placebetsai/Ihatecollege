// pages/contact.js
import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout title="Contact – IHateCollege.com">
      <section className="hero">
        <p className="eyebrow">QUESTIONS. IDEAS. REAL STORIES.</p>
        <h1 className="hero-title">Contact us</h1>
        <p className="hero-subtitle">
          Got a story about skipping college, landing a trade, or escaping
          student debt? Want to partner, advertise, or roast your school?
          Send a message.
        </p>

        <form
          className="hero"
          style={{ marginTop: "1.5rem" }}
          action="mailto:israeljoffe@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="hero-stats" style={{ marginTop: 0 }}>
            <div className="stat">
              <label className="stat-label">Your name</label>
              <input
                type="text"
                name="name"
                required
                style={{
                  width: "100%",
                  marginTop: "0.4rem",
                  padding: "0.5rem 0.65rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(148,163,184,0.7)",
                  background: "rgba(15,23,42,0.95)",
                  color: "#e5e7eb",
                }}
              />
            </div>
            <div className="stat">
              <label className="stat-label">Your email</label>
              <input
                type="email"
                name="email"
                required
                style={{
                  width: "100%",
                  marginTop: "0.4rem",
                  padding: "0.5rem 0.65rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(148,163,184,0.7)",
                  background: "rgba(15,23,42,0.95)",
                  color: "#e5e7eb",
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <label className="stat-label">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              style={{
                width: "100%",
                marginTop: "0.4rem",
                padding: "0.7rem 0.8rem",
                borderRadius: "0.7rem",
                border: "1px solid rgba(148,163,184,0.7)",
                background: "rgba(15,23,42,0.95)",
                color: "#e5e7eb",
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ marginTop: "1.1rem" }}>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
