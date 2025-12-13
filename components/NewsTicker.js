import { useEffect, useMemo, useRef, useState } from "react";

export default function NewsTicker() {
  const [items, setItems] = useState([]);
  const [failed, setFailed] = useState(false);

  const viewportRef = useRef(null);
  const measureRef = useRef(null);
  const [copies, setCopies] = useState(2);

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
      ? [
          {
            title: "News feed temporarily unavailable — check back soon.",
            link: "#",
            source: "",
          },
        ]
      : [
          {
            title: "Loading latest jobs + economy updates…",
            link: "#",
            source: "",
          },
        ];

  // Make sure we have enough repeated content so mobile never scrolls into blank space
  useEffect(() => {
    function computeCopies() {
      const viewport = viewportRef.current;
      const measure = measureRef.current;
      if (!viewport || !measure) return;

      const viewportW = viewport.clientWidth || 0;
      const singleW = measure.scrollWidth || 0;

      if (!viewportW || !singleW) {
        setCopies(2);
        return;
      }

      // Ensure at least ~2x viewport width of content so the loop never shows blank space
      const needed = Math.ceil((viewportW * 2) / singleW) + 1;
      setCopies(Math.max(2, needed));
    }

    const t = setTimeout(computeCopies, 0);
    window.addEventListener("resize", computeCopies);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computeCopies);
    };
  }, [base]);

  const loop = useMemo(() => {
    const out = [];
    for (let i = 0; i < copies; i++) out.push(...base);
    return out;
  }, [base, copies]);

  return (
    <div className="tickerShell" aria-label="Latest news ticker">
      {/* Capsule label ABOVE the feed, left aligned */}
      <div className="tickerHeader">
        <span className="tickerCapsule">News Update</span>
      </div>

      {/* Feed row */}
      <div className="tickerRow">
        <div className="tickerViewport" ref={viewportRef}>
          {/* Hidden measurer: one copy only */}
          <div className="tickerMeasure" ref={measureRef} aria-hidden="true">
            {base.map((it, idx) => (
              <span key={idx} className="tickerMeasureItem">
                {it.title}
                {it.source ? ` — ${it.source}` : ""} •{" "}
              </span>
            ))}
          </div>

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
      </div>

      <style jsx>{`
        /* OUTER CONTAINER */
        .tickerShell {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          overflow: hidden;
        }

        /* CAPSULE HEADER (ABOVE FEED) */
        .tickerHeader {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 10px 12px 0 12px;
        }

        .tickerCapsule {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 900;
          letter-spacing: 0.25px;
          font-size: 12px;
          line-height: 1;
          color: #111827; /* near-black text inside pill */
          background: #f59e0b; /* amber-500 */
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        }

        /* FEED ROW */
        .tickerRow {
          padding: 8px 12px 10px 12px;
        }

        .tickerViewport {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        /* Hidden measurer */
        .tickerMeasure {
          position: absolute;
          visibility: hidden;
          white-space: nowrap;
          pointer-events: none;
          height: 0;
          overflow: hidden;
        }

        .tickerMeasureItem {
          font-weight: 700;
        }

        .tickerTrack {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;

          /* Safari stability */
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          animation: scroll 70s linear infinite; /* slow */
          -webkit-animation: scroll 70s linear infinite;
        }

        /* Pause on hover (desktop) */
        .tickerShell:hover .tickerTrack {
          animation-play-state: paused;
        }

        .tickerItem {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          color: #e5e7eb; /* slate-200 */
          opacity: 0.95;
          font-weight: 650;
        }

        .tickerItem:hover {
          opacity: 1;
          text-decoration: underline;
          color: #fde68a; /* amber-200 */
        }

        .tickerTitle {
          font-weight: 800;
        }

        .tickerSource {
          font-weight: 700;
          opacity: 0.8;
        }

        .tickerDot {
          opacity: 0.9;
          padding: 0 10px;
          color: #9ca3af; /* gray-400 */
        }

        @keyframes scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @-webkit-keyframes scroll {
          from {
            -webkit-transform: translate3d(0, 0, 0);
          }
          to {
            -webkit-transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tickerTrack {
            animation: none;
            -webkit-animation: none;
          }
        }
      `}</style>
    </div>
  );
}
