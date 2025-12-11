// pages/contact.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us | IHateCollege.com"
        description="Got questions or want help finding your path? Contact IHateCollege.com directly."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">WE ACTUALLY READ MESSAGES</p>
        <h1 className="hero-title">
          Contact <span className="text-yellow-300">IHateCollege</span>
        </h1>
        <p className="hero-subtitle max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas?  
          Fill this out — we’ll reply fast.
        </p>
      </section>

      {/* FORM */}
      <section className="page-section max-w-xl mx-auto">
        <div className="glow-card p-8">
          <form
            action="https://formspree.io/f/xaykqkyo"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="text-sm text-slate-400">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white"
                placeholder="Write something..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-300 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-3">Want career help?</h2>
        <a
          href="/cheat-sheets"
          className="px-6 py-3 rounded-full border border-yellow-400/40 text-yellow-300 hover:bg-slate-800"
        >
          Explore Cheat Sheets
        </a>
      </section>
    </Layout>
  );
}
