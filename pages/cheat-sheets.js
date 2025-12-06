import Layout from "../components/Layout";

export default function CheatSheets() {
  return (
    <Layout title="Cheat Sheets">
      <h1>Career Cheat Sheets</h1>

      <p>Short, blunt breakdowns of popular paths — no fluff.</p>

      <div className="card">
        <div className="card-title">IT Support</div>
        • 3–6 months study<br />
        • $55k–$85k starting<br />
        • Google IT Cert is enough
      </div>

      <div className="card">
        <div className="card-title">HVAC</div>
        • 6–12 month program<br />
        • High overtime pay<br />
        • Low competition
      </div>

      <div className="card">
        <div className="card-title">Cybersecurity</div>
        • Security+ is step 1<br />
        • Big jump after 1 year exp<br />
        • Great remote options
      </div>

      <div className="card">
        <div className="card-title">Real Estate</div>
        • License in 1–2 months<br />
        • High earning potential<br />
        • Commission-based
      </div>
    </Layout>
  );
}
