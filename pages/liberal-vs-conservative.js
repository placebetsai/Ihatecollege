import Layout from "../components/Layout";

export default function LiberalVsConservative() {
  return (
    <Layout title="Liberal vs Conservative">
      <h1>Liberal vs. Conservative Colleges</h1>

      <p>Some campuses lean left. Some lean right. Here’s the breakdown.</p>

      <div className="card">
        <div className="card-title">Most Liberal Colleges</div>
        • Brown University<br />
        • Oberlin<br />
        • UC Berkeley<br />
        • Wesleyan<br />
        • NYU
      </div>

      <div className="card">
        <div className="card-title">Most Conservative Colleges</div>
        • Liberty University<br />
        • BYU<br />
        • Hillsdale<br />
        • Texas A&M<br />
        • Cedarville
      </div>

      <div className="card">
        <div className="card-title">Why It Matters</div>
        + Campus culture<br />
        + Speech climate<br />
        + Social environment<br />
        + Political pressure<br />
      </div>
    </Layout>
  );
}
