// pages/about.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About IHateCollege.com"
        description="The truth about student debt, alternatives, and why college isn't the only way to win."
      />

      <section className="page-section text-center">
        <p className="hero-eyebrow">THE STORY</p>
        <h1 className="hero-title">Why We Built IHateCollege</h1>
        <p className="hero-subtitle max-w-2xl mx-auto">
          Because millions of students are sold a lie:  
          “Go to college or you’ll fail.”  
          That’s false. We built this to show the other side.
        </p>
      </section>

      <section className="page-section max-w-3xl mx-auto text-slate-300 space-y-6">
        <p>
          We gather data, trade programs, cert paths, and real numbers — so you
          can make decisions that make sense, not decisions that trap you in
          debt.
        </p>
        <p>
          College works for some. But it’s not the only path. The future is
          skills, certs, and proof — not diplomas.
        </p>
      </section>
    </Layout>
  );
}
