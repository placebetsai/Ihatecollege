import Layout from "../components/Layout";

export default function CivilService() {
  return (
    <Layout title="Civil Service">
      <h1>Civil Service Careers</h1>

      <p>No degree required. Stable benefits. Pension. Real jobs.</p>

      <div className="card">
        <div className="card-title">Federal Jobs</div>
        USPS • TSA • Customs • DHS • VA<br />
        <a style={{ color: "#37c8ff" }}>*USAJobs.gov →</a>
      </div>

      <div className="card">
        <div className="card-title">State Jobs</div>
        DOT • DMV • County Clerks • Corrections
      </div>

      <div className="card">
        <div className="card-title">City Jobs</div>
        Firefighter • Police • Dispatch • Sanitation
      </div>
    </Layout>
  );
}
