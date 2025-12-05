import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <section>
        <h1 className="text-5xl font-bold mb-4">
          College is overpriced bullshit.<br />
          <span className="text-amber-400">Here are your REAL options.</span>
        </h1>

        <p className="text-lg text-slate-300 max-w-2xl mb-10">
          Skip the debt trap. Get the truth about trades, tech careers, 
          certifications, alternative education, and jobs that don’t require 
          $200k in tuition.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/alternatives" className="block p-6 bg-white/5 rounded-xl hover:bg-white/10 transition border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Alternatives</h2>
            <p className="text-sm text-slate-300">Trades, tech certs, bootcamps, and real high-income paths.</p>
          </Link>

          <Link href="/cheatsheets" className="block p-6 bg-white/5 rounded-xl hover:bg-white/10 transition border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Cheat Sheets</h2>
            <p className="text-sm text-slate-300">Study guides, job scripts, email templates, exam tips.</p>
          </Link>

          <Link href="/cost" className="block p-6 bg-white/5 rounded-xl hover:bg-white/10 transition border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Cost Calculator</h2>
            <p className="text-sm text-slate-300">See what your degree REALLY costs.</p>
          </Link>

        </div>
      </section>
    </Layout>
  );
            }
