// Bottom-of-article recommended affiliate resources
// All links marked data-affiliate="pending" until real affiliate IDs are set up

const resources = [
  {
    label: "Interview Style",
    name: "Interview Shoes Shop",
    desc: "Affordable shoes, bags, and basics for interviews, internships, and first-job outfits.",
    url: "https://fashionistas.ai/interview-shoes",
    color: "#f59e0b",
  },
  {
    label: "Coding Bootcamp",
    name: "Springboard",
    desc: "Software engineering & data science bootcamp with a job guarantee.",
    url: "https://www.springboard.com/?ref=ihatecollege",
    color: "#7b2d8b",
  },
  {
    label: "Google Certs",
    name: "Coursera — Google Career Certificates",
    desc: "IT Support, Data Analytics, Cybersecurity. 6 months, no degree needed.",
    url: "https://www.coursera.org/professional-certificates/google-it-support?utm_source=ihatecollege&utm_medium=affiliate",
    color: "#4285f4",
  },
  {
    label: "Student Loan Refi",
    name: "SoFi",
    desc: "Refinance student loans at a lower rate. Check your rate in 2 minutes.",
    url: "https://www.sofi.com/refinance-student-loans/?utm_source=ihatecollege",
    color: "#00b4d8",
  },
  {
    label: "Skills Platform",
    name: "Skillshare",
    desc: "Thousands of classes in design, business, tech & more. Free trial.",
    url: "https://www.skillshare.com/signup?via=ihatecollege",
    color: "#00c853",
  },
];

export default function RecommendedResources() {
  return (
    <div className="my-12 rounded-2xl overflow-hidden" style={{ border: "1px solid #1e293b", background: "#0d0d0d" }}>
      <div className="px-6 py-3" style={{ background: "#111", borderBottom: "1px solid #1e293b" }}>
        <p className="text-white font-black text-xs uppercase tracking-widest m-0">
          Recommended Resources
        </p>
      </div>
      <div className="p-5">
        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {resources.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener sponsored"
              data-affiliate="pending"
              style={{
                display: "block",
                background: "#111",
                border: "1px solid #1e293b",
                borderRadius: 10,
                padding: "14px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = r.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e293b")}
            >
              <div style={{ color: r.color, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                {r.label}
              </div>
              <div className="font-bold text-white text-sm mb-1">{r.name}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{r.desc}</div>
            </a>
          ))}
        </div>
        <p className="text-slate-600 text-xs mt-3 mb-0">
          Affiliate links — we may earn a commission at no cost to you.
        </p>
      </div>
    </div>
  );
}
