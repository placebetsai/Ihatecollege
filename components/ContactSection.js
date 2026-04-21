export default function ContactSection() {
  const input = "w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all";

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact Us</h2>
        <p>Got a story, collab, or idea? We read every message and respond within a few hours.</p>
      </div>

      <div className="contact-grid">
        <div className="card form-card">
          <form
            action="https://formsubmit.co/info@ihatecollege.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://ihatecollege.com/contact" />
            <input type="hidden" name="_subject" value="IHateCollege Contact Form" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-section-name" className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Name</label>
                <input
                  id="contact-section-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className={input}
                />
              </div>
              <div>
                <label htmlFor="contact-section-email" className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Email <span className="text-red-400">*</span></label>
                <input
                  id="contact-section-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={input}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-section-message" className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Message <span className="text-red-400">*</span></label>
              <textarea
                  id="contact-section-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className={`${input} resize-none leading-relaxed`} />
            </div>
            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700 text-slate-300 text-sm">
              This form submits directly and does not depend on app state. If the redirect stalls, email <strong>info@ihatecollege.com</strong>.
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-colors text-sm"
            >
              Send Message →
            </button>
            <p className="text-xs text-slate-500 text-center">We respond within a few hours · info@ihatecollege.com</p>
          </form>
        </div>

        <div className="card">
          <h3>What this inbox is for</h3>
          <ul className="list">
            <li>Reality checks about specific colleges or programs.</li>
            <li>Ideas for tools, cheat sheets, or comparison features.</li>
            <li>Collabs, sponsorships, or &quot;help me escape this place&quot; stories.</li>
          </ul>
          <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(14,165,233,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(14,165,233,0.2)" }}>
            <p style={{ fontSize: "0.85rem", color: "#94a3b8", margin: 0 }}>
              <strong style={{ color: "#e2e8f0" }}>Typical response time:</strong> a few hours, same day at the latest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
