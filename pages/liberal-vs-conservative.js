// pages/liberal-vs-conservative.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function LiberalVsConservative() {
  return (
    <Layout>
      <SEO
        title="Is Your College Liberal or Conservative? | IHateCollege.com"
        description="See the political lean of universities so you don’t walk into a 4-year ideological war you didn’t sign up for."
      />

      {/* HERO */}
      <section className="page-section text-center">
        <p className="hero-eyebrow">AVOID THE CULTURE SHOCK</p>

        <h1 className="hero-title">
          Liberal vs Conservative  
          <span className="text-purple-300 block">College Breakdown</span>
        </h1>

        <p className="hero-subtitle max-w-2xl mx-auto">
          Know what you're walking into. Some campuses lean extreme left, others
          lean old-school conservative. We show you the **vibe** before you spend
          a dollar.
        </p>
      </section>

      {/* GLOW CARDS */}
      <section className="page-section">
        <div className="path-grid">

          {/* LIBERAL */}
          <div className="glow-card p-7">
            <h3 className="text-xl font-bold mb-3 text-pink-300">Left-Leaning Colleges</h3>
            <p className="text-slate-300 mb-4">
              Activism-heavy, social sciences dominate conversation, DEI culture everywhere.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-5">
              <li>High focus on social issues</li>
              <li>Strong LGBTQ+ support networks</li>
              <li>Protests are common</li>
            </ul>
            <a href="/rank-your-school" className="text-pink-300 font-bold text-sm hover:underline">
              Check your school's political lean →
            </a>
          </div>

          {/* CONSERVATIVE */}
          <div className="glow-card p-7">
            <h3 className="text-xl font-bold mb-3 text-blue-300">Right-Leaning Colleges</h3>
            <p className="text-slate-300 mb-4">
              Business-focused, traditional values, lower tolerance for radical politics.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-5">
              <li>More structured campus life</li>
              <li>Less political chaos</li>
              <li>Finance / STEM heavy</li>
            </ul>
            <a href="/rank-your-school" className="text-blue-300 font-bold text-sm hover:underline">
              Rank your college →
            </a>
          </div>

          {/* NEUTRAL */}
          <div className="glow-card p-7">
            <h3 className="text-xl font-bold mb-3 text-cyan-300">Neutral / Mixed Campuses</h3>
            <p className="text-slate-300 mb-4">
              Balanced environment. Drama depends on friend groups & specific majors.
            </p>
            <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1 mb-5">
              <li>STEM-heavy schools land here</li>
              <li>Two-sided political presence</li>
              <li>Clubs define the culture</li>
            </ul>
            <a href="/rank-your-school" className="text-cyan-300 font-bold text-sm hover:underline">
              See where your school lands →
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="page-section text-center">
        <h2 className="text-2xl font-bold mb-4">Want an unbiased score?</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-6">
          Input your school — we’ll rank it based on **real political climate data**.
        </p>

        <a
          href="/rank-your-school"
          className="px-6 py-3 rounded-full bg-purple-400 text-black font-bold hover:bg-purple-300"
        >
          Rank Your School →
        </a>
      </section>
    </Layout>
  );
}
