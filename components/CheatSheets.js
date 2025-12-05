export default function CheatSheets() {
  return (
    <section id="cheats" className="section">
      <div className="section-header">
        <h2>Cheat sheet vault (legal kind)</h2>
        <p>
          Not leaked exams – fast reference so your brain isn&apos;t cooked by week three.
          Future version: real downloadable PDFs.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Numbers &amp; formulas</h3>
          <ul className="list">
            <li>Algebra / calc one-pagers.</li>
            <li>Stats: z-scores, p-values, &quot;which test when&quot;.</li>
            <li>Finance basics: loans, interest, payoff timelines.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Essays &amp; emails</h3>
          <ul className="list">
            <li>Essay skeletons: intro / body / conclusion patterns.</li>
            <li>“I missed class” and “I need an extension” email templates.</li>
            <li>Discussion post patterns for when you didn&apos;t read everything.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Survival dashboards</h3>
          <ul className="list">
            <li>One view for assignments, work, and bills.</li>
            <li>Weekly reset checklist.</li>
            <li>Simple &quot;am I actually passing&quot; grade tracker.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
