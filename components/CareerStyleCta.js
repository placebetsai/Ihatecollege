const PICKS = [
  {
    label: "Interview Shoes",
    title: "Low-cost heels, loafers, and flats",
    desc: "Build a clean interview look without blowing your budget on one outfit.",
    href: "https://fashionistas.ai/interview-shoes",
  },
  {
    label: "Work Bags",
    title: "Work shoes, bags, and blue-collar basics",
    desc: "Practical picks for first jobs, internships, trade programs, and commuting without looking sloppy.",
    href: "https://fashionistas.ai/blue-collar-essentials",
  },
  {
    label: "Budget Upgrades",
    title: "Fast, affordable work-ready upgrades",
    desc: "A cleaner route for applications, interviews, apprenticeships, and day one on the job.",
    href: "https://fashionistas.ai/blue-collar-essentials",
  },
];

export default function CareerStyleCta() {
  return (
    <section
      className="my-12 rounded-2xl overflow-hidden"
      style={{
        border: "1px solid #1e293b",
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(24,24,27,0.98) 100%)",
      }}
    >
      <div
        className="px-6 py-4"
        style={{
          borderBottom: "1px solid #1e293b",
          background: "linear-gradient(90deg, rgba(239,68,68,0.14), rgba(245,158,11,0.1))",
        }}
      >
        <p className="text-red-400 font-black text-xs uppercase tracking-widest m-0">
          First-Job Style
        </p>
        <h3 className="text-white font-black text-2xl mt-2 mb-2">
          Look employable without spending like a college brochure.
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed m-0 max-w-2xl">
          If you are skipping debt and going straight to work, you still need shoes, bags,
          and basics that make you look ready. We built a low-cost style path around
          interviews, internships, and entry-level jobs.
        </p>
      </div>

      <div className="p-5">
        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {PICKS.map((pick) => (
            <a
              key={pick.title}
              href={pick.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 14,
                padding: "16px",
                textDecoration: "none",
              }}
            >
              <div className="text-amber-400 text-[11px] font-black uppercase tracking-[0.14em] mb-2">
                {pick.label}
              </div>
              <div className="text-white text-base font-bold mb-2">{pick.title}</div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{pick.desc}</p>
              <span className="text-red-400 font-bold text-sm">Shop Fashionistas.ai →</span>
            </a>
          ))}
        </div>
        <p className="text-slate-500 text-xs mt-4 mb-0">
          External shop link. We may earn from products we recommend.
        </p>
      </div>
    </section>
  );
}
