import Link from "next/link";

const PATHS = [
  {
    eyebrow: "High Intent",
    title: "Best Alternatives",
    desc: "Trades, certs, real estate, CDL, healthcare, and direct links to get moving this week.",
    href: "/alternatives",
    accent: "#38bdf8",
  },
  {
    eyebrow: "Calculator",
    title: "Debt Reality Check",
    desc: "Show visitors the real monthly payment and compare it against faster no-degree paths.",
    href: "/debt-calculator",
    accent: "#ff2020",
  },
  {
    eyebrow: "Money Page",
    title: "Make Money Without College",
    desc: "One of the cleanest entry points for broad no-degree search traffic and affiliate routing.",
    href: "/how-to-make-money-without-a-college-degree",
    accent: "#10b981",
  },
  {
    eyebrow: "Career Finder",
    title: "No-Degree Job Board",
    desc: "Push readers into actual jobs, salary pages, and employer-facing inventory instead of bounce exits.",
    href: "/job-board",
    accent: "#f59e0b",
  },
];

export default function MoneyPathsHub({
  title = "Start With The Highest-Value Pages",
  subtitle = "These pages convert better because they match what visitors want next: a path, a number, a job, or a concrete first move.",
}) {
  return (
    <section
      className="my-12 rounded-3xl overflow-hidden"
      style={{ border: "1px solid #1f2937", background: "linear-gradient(180deg, #0f172a 0%, #09090b 100%)" }}
    >
      <div className="px-6 py-5" style={{ borderBottom: "1px solid #1f2937" }}>
        <p className="text-sky-400 text-xs font-black uppercase tracking-widest mb-2">
          Revenue Routing
        </p>
        <h2 className="text-white text-2xl md:text-3xl font-black mb-2">{title}</h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl mb-0">
          {subtitle}
        </p>
      </div>

      <div className="p-6 grid gap-4 md:grid-cols-2">
        {PATHS.map((pathItem) => (
          <Link
            key={pathItem.href}
            href={pathItem.href}
            className="block rounded-2xl p-5 no-underline"
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                color: pathItem.accent,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {pathItem.eyebrow}
            </div>
            <div className="text-white text-lg font-black mb-2">{pathItem.title}</div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{pathItem.desc}</p>
            <span
              style={{
                color: pathItem.accent,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Open page →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
