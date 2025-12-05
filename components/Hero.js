export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-main">
        <div className="hero-pill-row">
          <span className="hero-pill">
            No brochure fluff. Just what it really feels like.
          </span>
        </div>
        <h1 className="hero-title">
          I Hate College.
          <span className="hero-subtitle">
            But I still don&apos;t want to be broke.
          </span>
        </h1>
        <p className="hero-text">
          College is stupid expensive, insanely political, and way more stress than the brochures admit.
          ihatecollege.com is the dashboard for reality: campus vibes, cost pressure, and actual
          escape routes so you don&apos;t end up buried in loans and burnout.
        </p>
        <div className="hero-buttons">
          <a href="#vibes" className="btn btn-primary">
            🔍 Check campus vibes
          </a>
          <a href="#alt" className="btn btn-secondary">
            🛠️ See alternatives
          </a>
        </div>
        <div className="hero-tags">
          <span className="tag">🎓 Real student energy, not marketing copy</span>
          <span className="tag">💸 Debt &amp; value reality</span>
          <span className="tag">🧠 Paths where skills actually matter</span>
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-card">
          <div className="hero-card-header">
            <span className="dot dot-green" />
            <span>Snapshot</span>
          </div>
          <ul className="hero-card-list">
            <li>
              <span>Say college was &quot;worth the cost&quot;</span>
              <span className="pill-soft">~35–40%</span>
            </li>
            <li>
              <span>Average undergrad loan balance</span>
              <span className="pill-soft">$30k+</span>
            </li>
            <li>
              <span>Alt paths (trades, bootcamps, certs)</span>
              <span className="pill-soft">Growing fast</span>
            </li>
          </ul>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <span>Why this exists</span>
          </div>
          <ul className="hero-card-list small">
            <li>You&apos;re allowed to hate college and still want a future.</li>
            <li>It&apos;s not &quot;drop out or shut up&quot; – there are plays in between.</li>
            <li>Nobody explained the mental health + money combo in one place.</li>
          </ul>
        </div>
      </div>
    </section>
  );
            }
