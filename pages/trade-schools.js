import Layout from "../components/Layout";

export default function TradeSchools() {
  return (
    <Layout title="Trade Schools">
      <h1>Trade Schools</h1>

      <p>Fast. Affordable. Always in demand.</p>

      <div className="card">
        <div className="card-title">HVAC</div>
        6–12 months, high overtime, job security.
      </div>

      <div className="card">
        <div className="card-title">Welding</div>
        3–6 months, travel jobs, very high pay.
      </div>

      <div className="card">
        <div className="card-title">Electrician</div>
        4-year apprenticeship, strong long-term career.
      </div>

      <div className="card">
        <div className="card-title">CDL (Truck Driving)</div>
        3 weeks school, $60k–$100k with experience.
      </div>
    </Layout>
  );
}
