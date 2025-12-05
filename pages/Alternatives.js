import Layout from "../components/Layout";

export default function Alternatives() {
  const items = [
    {
      title: "Google Career Certificates",
      desc: "IT, UX, Cybersecurity, Data — no degree needed.",
      url: "https://grow.google/certificates/"
    },
    {
      title: "Salesforce Admin Training",
      desc: "Remote-friendly $65k–$110k roles.",
      url: "https://trailhead.salesforce.com/"
    },
    {
      title: "CompTIA Certs (A+, Network+, Security+)",
      desc: "Fast-track into IT support and cybersecurity.",
      url: "https://www.comptia.org/certifications"
    },
    {
      title: "Trade Apprenticeships",
      desc: "HVAC, electrician, plumbing — always hiring.",
      url: "https://www.apprenticeship.gov/"
    },
    {
      title: "Coding Bootcamps",
      desc: "Intensive 3–6 month programs.",
      url: "https://www.coursereport.com/"
    },
    {
      title: "Real Estate Licensing",
      desc: "Low cost, fast path to high commissions.",
      url: "https://www.realestateu.com/"
    }
  ];

  return (
    <Layout title="Alternatives">
      <h1 className="text-4xl font-bold mb-6">Real Alternatives to College</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((i) => (
          <a
            key={i.title}
            href={i.url}
            target="_blank"
            className="block p-6 bg-white/5 rounded-xl hover:bg-white/10 transition border border-white/10"
          >
            <h2 className="text-xl font-semibold">{i.title}</h2>
            <p className="text-sm text-slate-300">{i.desc}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
}
