import { useEffect, useMemo, useState } from "react";

export default function NewsTicker() {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  const [runKey, setRunKey] = useState(0);

  // Mobile tap-to-pause (optional but helps iOS jank perception)
  const [pausedMobile, setPausedMobile] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await fetch("/api/news?nocache=1", { cache: "no-store" });
        if (!res.ok) throw new Error("bad response");
        const data = await res.json();
        if (!alive) return;

        const list = Array.isArray(data?.items) ? data.items : [];
        // Keep it reasonable so the DOM isn’t huge (less jank)
        setItems(list.slice(0, 18));

        // Safari: force a clean animation restart after DOM paints
        setReady(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!alive) return;
            setRunKey((k) => k + 1);
            setReady(true);
          });
        });
      } catch {
        if (!alive) return;
        setItems([]);
        setReady(false);
      }
    }

    load();
    // Refresh every 30 minutes (lightweight)
    const t = setInterval(load, 30 * 60 * 1000);

    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const contentItems = useMemo(() => items.slice(0, 18), [items]);
  const hasItems = contentItems.length > 0;

  return (
    <div className="tickerRoot" aria-label="Jobs + economy headlines">
      {/* DESKTOP: inline label + feed */}
      <div className="desktopRow">
        <span className="label">News Update:</span>

        <div className="viewport">
          {!hasItems ? (
            <div className="idle">Loading jobs + economy headlines…</div>
          ) : (
            <div key={runKey} className={`track ${ready ? "run desktopSpeed" : ""}`}>
              {/* Content A */}
              <div className="content">
                {contentItems.map((it, i) => (
                  <a
                    key={`${it.link}-${i}`}
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="item"
                    title={it.title}
                  >
                    <span className="dot">•</span>
                    <span className="text">
                      {it.title}
                      {it.source ? ` — ${it.source}` : ""}
                    </span>
                  </a>
                ))}
              </div>

              {/* Content B (duplicate) */}
              <div className="content" aria-hidden="true">
                {contentItems.map((it, i) => (
                  <a
                    key={`${it.link}-dup-${i}`}
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="item"
                    tabIndex={-1}
                    title={it.title}
                  >
                    <span className="dot">•</span>
                    <span className="text">
                      {it.title}
                      {it.source ? ` — ${it.source}` : ""}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE: capsule above-left + feed below */}
      <div className="mobileRow">
        <div className="mobileHeader">
          <span className="tickerCapsule">News Update</span>
          <span className="tapHint">{pausedMobile ? "Paused" : "Tap to pause"}</span>
        </div>

        <div
          className="viewport"
          role="button"
          aria-label="Tap to pause or resume headlines"
          onClick={() => setPausedMobile((p) => !p)}
        >
          {!hasItems ? (
            <div className="idle">Loading jobs + economy headlines…</div>
          ) : (
            <div
              key={`m-${runKey}`}
              className={`track ${ready ? "run mobileSpeed" : ""} ${pausedMobile ? "paused" : ""}`}
            >
              <div className="content">
                {contentItems.map((it, i) => (
                  <a
                    key={`${it.link}-m-${i}`}
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="item"
                    title={it.title}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="dot">•</span>
                    <span className="text">
                      {it.title}
                      {it.source ? ` — ${it.source}` : ""}
                    </span>
                  </a>
                ))}
              </div>

              <div className="content" aria-hidden="true">
                {contentItems.map((it, i) => (
                  <a
                    key={`${it.link}-m-dup-${i}`}
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="item"
                    tabIndex={-1}
                    title={it.title}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="dot">•</span>
                    <span className="text">
                      {it.title}
                      {it.source ? ` — ${it.source}` : ""}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .tickerRoot {
          width: 100%;
          background: rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          backdrop-filter: blur(10px);
          overflow: hidden;
          position: relative;
          z-index: 5;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        /* Desktop row */
        .desktopRow {
          display: flex;
          align-items: center;
          height: 44px;
          padding: 0 14px;
          gap: 12px;
        }

        .label {
          flex: 0 0 auto;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: #ffb000; /* amber */
          white-space: nowrap;
        }

        /* Mobile row */
        .mobileRow {
          display: none;
          padding: 10px 12px 12px;
        }

        .mobileHeader {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .tickerCapsule {
          display: inline-flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 12px;
          line-height: 1;
          color: #111827;
          background: #ffb000;
        }

        .tapHint {
          margin-left: auto;
          font-size: 11px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Viewport + gradient fades */
        .viewport {
          flex: 1 1 auto;
          overflow: hidden;
          height: 44px;
          display: flex;
          align-items: center;
          position: relative;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .viewport::before,
        .viewport::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 44px;
          pointer-events: none;
          z-index: 3;
        }

        .viewport::before {
          left: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0));
        }

        .viewport::after {
          right: 0;
          background: linear-gradient(to left, rgba(0, 0, 0, 0.92), rgba(0, 0, 0, 0));
        }

        .idle {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 800;
          font-size: 14px;
          white-space: nowrap;
        }

        /* Track = two identical content blocks */
        .track {
          display: inline-flex;
          width: max-content;
          white-space: nowrap;

          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .content {
          display: inline-flex;
          width: max-content;
          align-items: center;
          white-space: nowrap;
        }

        /* Speeds */
        .run.desktopSpeed {
          animation: move 90s linear infinite;
          -webkit-animation: move 90s linear infinite;
        }

        .run.mobileSpeed {
          animation: move 60s linear infinite;
          -webkit-animation: move 60s linear infinite;
        }

        /* Pause on hover (desktop) */
        .desktopRow .viewport:hover .run.desktopSpeed {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }

        /* Tap pause (mobile) */
        .paused {
          animation-play-state: paused !important;
          -webkit-animation-play-state: paused !important;
        }

        /* Items: avoid CSS gap inside animation (Safari jank) */
        .item {
          display: inline-flex;
          align-items: center;
          font-weight: 850;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.95);
          text-decoration: none;
          margin-right: 26px;
          line-height: 1.15;
          white-space: nowrap;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .item:hover {
          color: #ffb000;
        }

        .dot {
          color: #ffb000;
          margin-right: 10px;
          flex: 0 0 auto;
        }

        .text {
          max-width: 70vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
        }

        /* Safari-safe keyframes */
        @-webkit-keyframes move {
          0% { -webkit-transform: translate3d(0, 0, 0); }
          100% { -webkit-transform: translate3d(-50%, 0, 0); }
        }

        @keyframes move {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @media (max-width: 768px) {
          .desktopRow { display: none; }
          .mobileRow { display: block; }
          .viewport { height: 36px; }
          .item { font-size: 16px; }
          .text { max-width: 85vw; }
          .viewport::before,
          .viewport::after { width: 34px; }
        }
      `}</style>
    </div>
  );
}
