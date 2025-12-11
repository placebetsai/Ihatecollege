// pages/cost.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function CostPage() {
  return (
    <Layout>
      <SEO
        title="The Real Cost of College | IHateCollege.com"
        description="Breakdown of tuition, housing, and debt compared to certs and trade schools."
      />

      <section className="page-section text-center">
        <p className="hero-eyebrow">THE NUMBERS DON’T LIE</p>
        <h1 className="hero-title">The Real Cost of College</h1>
        <p className="hero-subtitle max-w-2xl mx-auto">
          Compare college costs vs trade paths.  
          The difference? 4 years and $80,000+.
        </p>
      </section>

      <section className="page-section">
        <div className="glow-card p-6 text-slate-300 space-y-4">
          <p>• Average student debt: <span className="text-red-400">$37,338</span></p>
          <p>• Average interest over 10 years: <span className="text-red-400">$13,000+</span></p>
          <p>• Lost income during 4 years: <span className="text-red-400">$120,000</span></p>
          <p>
            That’s a total of nearly <span className="text-yellow-300">$170,000</span> in opportunity cost
            for a degree that may not guarantee a job.
          </p>
        </div>
      </section>
    </Layout>
  );
          }
