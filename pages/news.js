import Layout from "../components/Layout";
import SEO from "../components/SEO";
import useSWR from "swr";

const fetcher = (url) => fetch(url, { cache: "no-store" }).then((r) => r.json());

function timeAgo(dateString) {
  const t = Date.parse(dateString || "");
  if (!Number.isFinite(t)) return "";
  const diff = Date.now() - t;

  const sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const d = Math.floor(hr / 24);
  return `${d}d ago`;
}

export default function NewsPage() {
  const { data, isLoading } = useSWR("/api/news?nocache=1", fetcher, {
    refreshInterval: 5 * 60 * 1000, // refresh every 5 min
    revalidateOnFocus: true,
  });

  const items = Array.isArray(data?.items) ? data.items : [];

  return (
    <Layout>
      <SEO title="Latest Jobs + Economy News | IHateCollege" />

      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <div className="headerCard">
          <div className="kicker">LIVE FEED</div>
          <h1 className="title">Latest Jobs + Economy Headlines</h1>
          <p className="sub">
            Auto-refreshes every few minutes. Click any card to open the source.
          </p>
          <div className="metaRow">
            <span className="pill">Refresh: 5 min</span>
            <span className="pill">{items.length ? `${items.length} headlines` : "Loading…"}</span>
          </div>
        </div>

        <div className="grid">
          {isLoading && !items.length ? (
            <div className="loading">Loading headlines…</div>
          ) : items.length ? (
            items.map((it, idx) => (
              <a
                key={`${it.link}-${idx}`}
                className="card"
                href={it.link}
                target={it.link === "#" ? undefined : "_blank"}
                rel={it.link === "#" ? undefined : "noreferrer"}
              >
                <div className="cardTop">
                  <span className="source">{it.source || "Source"}</span>
                  <span className="time">{timeAgo(it.pubDate)}</span>
                </div>
                <div className="headline">{it.title}</div>
                <div className="ctaRow">
                  <span className="cta">Open →</span>
                </div>
              </a>
            ))
          ) : (
            <div className="loading">No headlines yet — try again in a moment.</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .headerCard {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          padding: 18px 18px;
          margin-bottom: 16px;
        }

        .kicker {
          display: inline-block;
          font-weight: 950;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #111827;
          background: #ffb000;
          padding: 6px 10px;
          border-radius: 999px;
        }

        .title {
          margin-top: 10px;
          font-weight: 950;
          font-size: 28px;
          line-height: 1.15;
          color: white;
        }

        .sub {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.72);
          font-weight: 700;
        }

        .metaRow {
          margin-top: 12px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pill {
          font-weight: 900;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 12px;
        }

        .card {
          grid-column: span 6;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.48);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          padding: 14px 14px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.92);
          transition: transform 0.18s ease, border-color 0.18s ease;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.2);
        }

        .card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 176, 0, 0.65);
        }

        .cardTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
          align-items: center;
        }

        .source {
          font-weight: 950;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.75);
        }

        .time {
          font-weight: 900;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
        }

        .headline {
          font-weight: 950;
          font-size: 16px;
          line-height: 1.25;
          color: rgba(255, 255, 255, 0.96);
        }

        .ctaRow {
          margin-top: 12px;
          display: flex;
          justify-content: flex-end;
        }

        .cta {
          font-weight: 950;
          color: #ffb000;
        }

        .loading {
          grid-column: span 12;
          padding: 18px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.35);
          color: rgba(255, 255, 255, 0.8);
          font-weight: 900;
        }

        @media (max-width: 900px) {
          .card { grid-column: span 12; }
        }
      `}</style>
    </Layout>
  );
  }
