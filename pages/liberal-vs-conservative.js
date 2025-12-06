// pages/liberal-vs-conservative.js
import Layout from "../components/Layout";

const liberalExamples = [
  "UC Berkeley",
  "NYU",
  "Brown University",
  "Wesleyan University",
  "Oberlin College",
];

const conservativeExamples = [
  "Liberty University",
  "Brigham Young University",
  "Texas A&M",
  "Hillsdale College",
  "Cedarville University",
];

export default function LiberalVsConservativePage() {
  return (
    <Layout title="Liberal vs Conservative Colleges | IHATECOLLEGE">
      <main className="page-main">
        <section className="page-section">
          <h1 className="page-title">Liberal vs Conservative Colleges</h1>
          <p className="page-intro">
            Before you sign away four years of your life, know what kind of bubble
            you’re walking into. Some campuses are super progressive, some lean
            hard conservative, and most pretend they’re “neutral” while they’re not.
          </p>

          <div className="page-grid">
            <div className="info-card">
              <h2 className="section-title">What makes a campus liberal?</h2>
              <ul className="info-list">
                <li>Heavy focus on activism and social-justice causes</li>
                <li>Most profs lean left; conservative views can feel outnumbered</li>
                <li>Very open on LGBTQ+, gender, and identity topics</li>
                <li>Speakers from the right sometimes protested or disinvited</li>
              </ul>
              <p className="card-subtitle">Examples often rated as liberal:</p>
              <ul className="tag-list">
                {liberalExamples.map((name) => (
                  <li key={name} className="tag-pill">
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">What makes a campus conservative?</h2>
              <ul className="info-list">
                <li>Religious or “traditional values” baked into campus rules</li>
                <li>More support for Greek life, ROTC, business, and engineering</li>
                <li>Speech codes sometimes aimed at “protecting values”</li>
                <li>Social scene can be rough if you’re left-leaning or non-religious</li>
              </ul>
              <p className="card-subtitle">Examples often rated as conservative:</p>
              <ul className="tag-list">
                {conservativeExamples.map((name) => (
                  <li key={name} className="tag-pill">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="section-divider" />

          <section style={{ marginTop: "2rem" }}>
            <h2 className="section-title">How to check the vibe before you go</h2>
            <ul className="info-list">
              <li>
                <strong>Google “{`[school name]` + " protests / controversies"}</strong>{" "}
                – see what students are actually fighting about.
              </li>
              <li>
                <strong>Search TikTok & Reddit</strong> for the school name + “vibe”,
                “politics”, “campus culture”.
              </li>
              <li>
                <strong>Check student newspapers</strong> and what clubs get budget:
                College Dems vs College Republicans vs identity clubs, etc.
              </li>
              <li>
                <strong>Look at speech-code rankings</strong> (FIRE.org has reports)
                to see if the school nukes unpopular opinions.
              </li>
            </ul>
            <p className="page-intro" style={{ marginTop: "0.75rem" }}>
              Your politics don’t have to match the campus perfectly, but if you’re
              going to be the only one in the room who thinks like you, you should
              at least know that before you sign the loan.
            </p>
          </section>
        </section>
      </main>
    </Layout>
  );
}
