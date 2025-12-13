import { useEffect, useMemo, useRef, useState } from "react";

export default function NewsTicker() {
  const [items, setItems] = useState([]);
  const [failed, setFailed] = useState(false);

  const viewportRef = useRef(null);
  const measureRef = useRef(null);
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    let alive = true;

    fetch(`/api/jobsnews?nocache=1`)
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
      : [{ title: "Loading latest jobs + economy updates…", link: "#", source: "" }];

  // Ensure loop always long enough (mobile Safari fix)
  useEffect(() => {
    function computeCopies() {
      const viewport = viewportRef.current;
      const measure = measureRef.current;
      if (!viewport || !measure) return;

      const viewportW = viewport.clientWidth || 0;
      const singleW = measure.scrollWidth || 0;
      if (!viewportW || !singleW) return setCopies(2);

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
    <div className="tickerShell">
      {/* Mobile capsule */}
      <div className="mobileHeader">
        <span className="tickerCapsule">News Update</span>
      </div>

      {/* Desktop inline */}
      <div className="desktopRow">
        <div className="tickerLabel">News Update:</div>

        <div className="tickerViewport" ref={viewportRef}>
          {/* Gradient fades */}
          <div className="fadeLeft" />
          <div className="fadeRight" />

          {/* Hidden measurer */}
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
        .tickerShell {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          overflow: hidden;
        }

        .mobileHeader {
          display: none;
          padding: 10px 12px 0;
        }

        .tickerCapsule {
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 12px;
          color: #111827;
          background: #f59e0b;
        }

        .desktopRow {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          overflow: hidden;
        }

        .tickerLabel {
          font-weight: 900;
          color: #f59e0b;
          white-space: nowrap;
        }

        .tickerViewport {
          position: relative;
          flex: 1;
          overflow: hidden;
        }

        /* Gradient fades */
        .fadeLeft,
        .fadeRight {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          z-index: 3;
          pointer-events: none;
        }

        .fadeLeft {
          left: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0)
          );
        }

        .fadeRight {
          right: 0;
          background: linear-gradient(
            to left,
            rgba(0,0,0,0.85),
            rgba(0,0,0,0)
          );
        }

        .tickerMeasure {
          position: absolute;
          visibility: hidden;
          white-space: nowrap;
          height: 0;
          overflow: hidden;
        }

        .tickerTrack {
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;

          transform: translate3d(0,0,0);
          -webkit-transform: translate3d(0,0,0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          animation: scroll 70s linear infinite;
          -webkit-animation: scroll 70s linear infinite;
        }

        .tickerShell:hover .tickerTrack {
          animation-play-state: paused;
        }

        .tickerItem {
          color: #e5e7eb;
          text-decoration: none;
          font-weight: 650;
          opacity: 0.95;
        }

        .tickerItem:hover {
          color: #fde68a;
          text-decoration: underline;
          opacity: 1;
        }

        .tickerTitle {
          font-weight: 800;
        }

        .tickerSource {
          opacity: 0.8;
          font-weight: 700;
        }

        .tickerDot {
          padding: 0 10px;
          color: #9ca3af;
        }

        @keyframes scroll {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-50%,0,0); }
        }

        @-webkit-keyframes scroll {
          from { -webkit-transform: translate3d(0,0,0); }
          to { -webkit-transform: translate3d(-50%,0,0); }
        }

        @media (max-width: 640px) {
          .mobileHeader { display: flex; }
          .tickerLabel { display: none; }
          .desktopRow { padding: 8px 12px 12px; }
          .fadeLeft, .fadeRight { width: 28px; }
        }
      `}</style>
    </div>
  );
}
