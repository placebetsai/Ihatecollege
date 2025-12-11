// pages/index.js
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import DecisionWizard from "../components/DecisionWizard";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <SEO 
        title="College is Optional. Debt is Not. | IHateCollege.com"
        description="The brutal truth about student debt and the high-income alternatives they don't teach you in high school."
      />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs md:text-sm font-bold tracking-wide uppercase">
             You don't have to sign your life away
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            College is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Optional.</span><br />
            Debt is <span className="text-red-500">Not.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Before you sign for $50k–$150k in loans, run the numbers. 
            Compare trades, tech careers, apprenticeships, and real alternatives.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/rank-your-school" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Search School Debt
            </Link>
            <Link href="/debt-calculator" className="px-8 py-4 border border-slate-600 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
              Calculate Cost
            </Link>
          </div>

          {/* HERO STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-slate-800 pt-8">
             <div className="p-4">
                <div className="text-2xl font-bold text-white">$37k+</div>
                <div className="text-xs text-slate-500 uppercase">Avg Student Debt</div>
             </div>
             <div className="p-4">
                <div className="text-2xl font-bold text-white">4 Years</div>
                <div className="text-xs text-slate-500 uppercase">Time in Class</div>
             </div>
             <div className="p-4">
                <div className="text-2xl font-bold text-cyan-400">6 Mos</div>
                <div className="text-xs text-slate-500 uppercase">Typical Cert Path</div>
             </div>
             <div className="p-4">
                <div className="text-2xl font-bold text-green-400">Paid</div>
                <div className="text-xs text-slate-500 uppercase">Apprenticeships</div>
             </div>
          </div>
        </div>
      </section>

      {/* WIZARD SECTION */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Should you go to college?</h2>
            <p className="text-slate-400 mt-2">Take the 30-second logic check. No email required.</p>
          </div>
          <DecisionWizard />
        </div>
      </section>

      {/* HIGH INCOME PATHS */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">High-Income Paths (No Degree)</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">Tech & Cyber</h3>
              <p className="text-slate-400 mb-6 text-sm">Cloud, cybersecurity, IT support. Remote-friendly, high demand.</p>
              <Link href="/cheat-sheets" className="text-cyan-400 font-bold text-sm hover:underline">View Tech Cheat Sheet →</Link>
            </div>

            {/* Trades */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">Skilled Trades</h3>
              <p className="text-slate-400 mb-6 text-sm">HVAC, electrician, welding, CDL. Paid apprenticeships.</p>
              <Link href="/trade-schools" className="text-orange-400 font-bold text-sm hover:underline">Trade School Breakdown →</Link>
            </div>

            {/* Civil Service */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">Gov & Civil Service</h3>
              <p className="text-slate-400 mb-6 text-sm">Federal, state, and city jobs. Pensions + Benefits.</p>
              <Link href="/civil-service" className="text-green-400 font-bold text-sm hover:underline">Civil Service Guide →</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}