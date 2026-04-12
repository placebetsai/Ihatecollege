// Affiliate CTA component — all links marked data-affiliate="pending"
// Replace href values with real affiliate IDs when approved by each program
// Programs to apply to: Coursera, Springboard, SoFi, Skillshare, UTI, Lincoln Tech

export default function AffiliateCTA({ topic = "trade" }) {
  const offers = {
    trade: [
      {
        name: "Universal Technical Institute",
        desc: "Automotive, diesel, welding & more. Financial aid available.",
        url: "https://www.uti.edu/?utm_source=ihatecollege&utm_medium=affiliate",
        cta: "Get Free Info",
        color: "#e85d04",
      },
      {
        name: "Lincoln Tech",
        desc: "Trade & tech programs in 14 states. Start in weeks, not years.",
        url: "https://www.lincolntech.edu/?utm_source=ihatecollege&utm_medium=affiliate",
        cta: "Explore Programs",
        color: "#1d3557",
      },
      {
        name: "SoFi — Refinance Student Loans",
        desc: "Already have debt? Refinance at a lower rate. Check your rate in 2 min.",
        url: "https://www.sofi.com/refinance-student-loans/?utm_source=ihatecollege",
        cta: "Check Your Rate",
        color: "#00b4d8",
      },
    ],
    tech: [
      {
        name: "Coursera — Google Career Certificates",
        desc: "IT, Data, UX, Cybersecurity. 6 months. No degree needed.",
        url: "https://www.coursera.org/professional-certificates/google-it-support?utm_source=ihatecollege&utm_medium=affiliate",
        cta: "Start Free Trial",
        color: "#4285f4",
      },
      {
        name: "CompTIA Certifications",
        desc: "A+, Network+, Security+. The industry standard for IT jobs.",
        url: "https://www.comptia.org/?utm_source=ihatecollege&utm_medium=affiliate",
        cta: "View Certs",
        color: "#e63946",
      },
      {
        name: "Skillshare",
        desc: "Thousands of tech & design classes. Free trial available.",
        url: "https://www.skillshare.com/signup?via=ihatecollege",
        cta: "Start Free Trial",
        color: "#00c853",
      },
    ],
    coding: [
      {
        name: "Springboard",
        desc: "Data science & software engineering bootcamp. Job guarantee.",
        url: "https://www.springboard.com/?ref=ihatecollege",
        cta: "Apply Now",
        color: "#7b2d8b",
      },
      {
        name: "Coursera — Google Career Certificates",
        desc: "IT Support & Data Analytics. 6 months, starts at $49/mo.",
        url: "https://www.coursera.org/professional-certificates/google-it-support?utm_source=ihatecollege&utm_medium=affiliate",
        cta: "Start Free Trial",
        color: "#4285f4",
      },
      {
        name: "Skillshare",
        desc: "Design, coding, business classes. Learn new skills on your schedule.",
        url: "https://www.skillshare.com/signup?via=ihatecollege",
        cta: "Try Free",
        color: "#00c853",
      },
    ],
    general: [
      {
        name: "Coursera — Google Career Certificates",
        desc: "IT, Data, UX, Project Management. No degree needed. 6 months.",
        url: "https://www.coursera.org/professional-certificates/google-it-support?utm_source=ihatecollege&utm_medium=affiliate",
        cta: "Start Free Trial",
        color: "#4285f4",
      },
      {
        name: "Springboard",
        desc: "Tech bootcamps with job guarantees. Pay after you're hired.",
        url: "https://www.springboard.com/?ref=ihatecollege",
        cta: "Apply Now",
        color: "#7b2d8b",
      },
      {
        name: "SoFi — Refinance Student Loans",
        desc: "Already stuck with debt? Refinance at a lower rate in minutes.",
        url: "https://www.sofi.com/refinance-student-loans/?utm_source=ihatecollege",
        cta: "Check Your Rate",
        color: "#00b4d8",
      },
      {
        name: "Skillshare",
        desc: "Thousands of classes in design, business, tech & more. Free trial.",
        url: "https://www.skillshare.com/signup?via=ihatecollege",
        cta: "Start Free Trial",
        color: "#00c853",
      },
    ],
  };

  const list = offers[topic] || offers.general;

  return (
    <div className="my-12 rounded-2xl overflow-hidden" style={{ border: "2px solid #ff2020", background: "#0a0a0a" }}>
      <div className="px-6 py-4" style={{ background: "#ff2020" }}>
        <p className="text-white font-black text-sm uppercase tracking-widest m-0">
          Skip The Debt — Start Earning Instead
        </p>
      </div>
      <div className="p-6">
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {list.map((offer) => (
            <a
              key={offer.name}
              href={offer.url}
              target="_blank"
              rel="noopener sponsored"
              data-affiliate="pending"
              style={{
                display: "block",
                background: "#111",
                border: "1px solid #222",
                borderRadius: 12,
                padding: "16px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = offer.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#222")}
            >
              <div className="font-black text-white text-sm mb-1">{offer.name}</div>
              <div className="text-slate-400 text-xs leading-relaxed mb-3">{offer.desc}</div>
              <span
                style={{
                  display: "inline-block",
                  background: offer.color,
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: 11,
                  padding: "6px 14px",
                  borderRadius: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {offer.cta} →
              </span>
            </a>
          ))}
        </div>
        <p className="text-slate-600 text-xs mt-4 mb-0">
          Affiliate links. We may earn a commission at no cost to you.
        </p>
      </div>
    </div>
  );
}
