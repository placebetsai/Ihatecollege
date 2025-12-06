import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <h1 style={{ fontSize: "2.4rem", fontWeight: "800", marginBottom: "1rem" }}>
        College is <span style={{ color: "#37c8ff" }}>optional</span>. Debt isn’t.
      </h1>

      <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Before you sign away $50k–$150k, compare trades, tech careers,
        apprenticeships, certifications, government paths, and real alternatives
        that actually lead to high income.
      </p>

      <a className="btn">Explore alternatives</a>

      <div className="card">
        <div className="card-title">Tech & Cyber</div>
        Cloud • Cybersecurity • IT Support • UX/UI  
        <br />
        <a style={{ color: "#ff7d9b" }}>Google IT Support →</a>
      </div>

      <div className="card">
        <div className="card-title">Skilled Trades</div>
        HVAC • Welding • CDL • Electrician  
        <br />
        <a style={{ color: "#ff7d9b" }}>Apprenticeships →</a>
      </div>

      <div className="card">
        <div className="card-title">No-Degree High Income</div>
        Real Estate • Notary • Sales • Adjusting  
        <br />
        <a style={{ color: "#ff7d9b" }}>Start here →</a
