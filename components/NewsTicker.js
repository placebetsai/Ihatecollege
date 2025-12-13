import { useEffect, useMemo, useState } from "react";

export default function NewsTicker() {
  const [items, setItems] = useState([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;

    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return;
        setItems(Array.isArray(d?.items) ? d.items : []);
      })
      .catch(() => alive && setFailed(true));

    return () => {
      alive = false;
    };
  }, []);

  const base =
    items.length > 0
      ? items
      : failed
      ? [{ title: "News feed temporarily unavailable — check back soon.", link: "#", source: "" }]
      : [{ title: "Loading latest jobs + unions + labor updates…", link: "#", source: "" }];

  const loop = useMemo(() => [...base, ...base], [base]);

  return (
    <div className="tickerWrap" aria-label="Latest news ticker">
      <div className="tickerLabel">News Update:</div>

      <div className="tickerViewport">
        <div className="tickerTrack">
          {loop.map((it, idx) => (
            <a
              key={idx}
              className="tickerItem"
              href={it.link}
              target={it.link === "#" ? undefined : "_blank"}
              rel={it.link === "#" ? undefined : "noreferrer"}
            >
              <span className="tickerTitle">{it.title}</span>
              {it.source ? <span className="tickerSource"> — {it.source}</span> : null}
              <span className="tickerDot"> • </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tickerWrap {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          overflow: hidden;
        }

        .tickerLabel {
          font-weight: 900;
          white-space: nowrap;
          letter-spacing: 0.2px;
        }

        .tickerViewport {
          overflow: hidden;
          flex: 1;
          min-width: 0;
        }

        .tickerTrack {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: scroll 70s linear infinite; /* not too fast */
        }

        .tickerWrap:hover .tickerTrack {
          animation-play-state: paused;
        }

        .tickerItem {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
          opacity: 0.95;
        }

        .tickerItem:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .tickerTitle {
          font-weight: 800;
        }

        .tickerSource {
          font-weight: 700;
          opacity: 0.8;
        }

        .tickerDot {
          opacity: 0.7;
          padding: 0 10px;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tickerTrack {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
