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
            title: "Loading latest jobs + unions + labor updates…",
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

    // compute after paint
    const t = setTimeout(computeCopies, 0);

    window.addEventListener("resize", computeCopies);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computeCopies);
    };
  }, [base]);

  // Build repeated content
  const loop = useMemo(() => {
    const out = [];
    for (let i = 0; i < copies; i++) out.push(...base);
    return out;
  }, [base, copies]);

  return (
    <div className="tickerWrap" aria-label="Latest news ticker">
      <div className="tickerLabel">News Update:</div>

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
          position: relative;
          overflow: hidden;
          flex: 1;
          min-width: 0;
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

          /* Safari stability: keep it on the GPU and don’t drop the layer */
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          animation: scroll 70s linear infinite; /* slow */
          -webkit-animation: scroll 70s linear infinite;
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

        /* Use translate3d (Safari-friendly) */
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
