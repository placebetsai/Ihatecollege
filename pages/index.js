import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";
import DecisionWizard from "../components/DecisionWizard"; 

export default function HomePage() {
  return (
    <Layout>
      <SEO />

      <div className="max-w-5xl mx-auto px-4 pt-6 pb-12 space-y-6">

        {/* BOX 1: MAIN HERO CARD (Animates Red/White/Blue via .hero class) */}
        <section className="hero">
          <p className="eyebrow text-slate-400 mb-4">YOU DON'T HAVE TO SIGN YOUR LIFE AWAY</p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            College is <span className="text-sky-400">Optional</span>.<br />
            Debt is <span className="text-red-500">Not</span>.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Before you borrow <span className="text-white font-bold">$50k–$150k</span>, run the numbers.
            Compare trades, tech careers, apprenticeships, and real alternatives.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/alternatives" className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-sky-50 transition-colors">
              Explore Alternatives
            </Link>
            <Link href="/debt-calculator" className="px-8 py-4 rounded-full border border-slate-600 text-white font-bold text-lg hover:border-white transition-colors">
              See the Real Cost
            </Link>
          </div>
        </section>

        {/* STATS ROW (Split into 2 Boxes) */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* BOX 2: THE "TRAP" (College Stats) - Red Glow */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)] flex flex-col justify-center items-center text-center gap-4">
            <div>
              <div className="text-3xl md:text-4xl font-black text-red-400">$37k+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Avg Student Debt</div>
            </div>
            <div className="w-12 h-px bg-slate-800"></div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">4 Years</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Time in Class</div>
            </div>
          </div>

          {/* BOX 3: THE "ESCAPE" (Alt Stats) - Green Glow */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] flex flex-col justify-center items-center text-center gap-4">
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-400">6–12 Mos</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Typical Cert Path</div>
            </div>
            <div className="w-12 h-px bg-slate-800"></div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">Paid</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Apprenticeships</div>
            </div>
          </div>

        </div>

        {/* DECISION WIZARD */}
        <div className="mt-8">
          <DecisionWizard />
        </div>

      </div>
    </Layout>
  );
}
