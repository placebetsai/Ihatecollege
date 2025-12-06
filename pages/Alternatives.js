import Layout from "../components/Layout";

export default function Alternatives() {
  return (
    <Layout title="Alternatives">
      <h1>Real Alternatives to College</h1>

      <p style={{ opacity: 0.85 }}>
        Skip the loans. These paths are high-income, fast, and actually hire.
      </p>

      <div className="card">
        <div className="card-title">Tech & Cyber</div>
        Cloud • Cybersecurity • IT Support • UX/UI <br />
        <a style={{ color: "#ff7d9b" }}>Google IT Support →</a>
      </div>

      <div className="card">
        <div className="card-title">Skilled Trades</div>
        HVAC • Welding • CDL • Electrician <br />
        <a style={{ color: "#ff7d9b" }}>Find Apprenticeships →</a>
      </div>

      <div className="card">
        <div className="card-title">Healthcare (No Degree)</div>
        Medical Assistant • EMT • Phlebotomist
      </div>

      <div className="card">
        <div className="card-title">Government / Civil Service</div>
        USPS • TSA • Fire • Police • County Jobs <br />
        <a style={{ color: "#ff7d9b" }}>Civil Service Guide →</a>
      </div>

      <div className="card">
        <div className="card-title">Self-Employment</div>
        Real Estate • Notary • Adjuster • Freelance • Auto Detailing
      </div>
    </Layout>
  );
          }
