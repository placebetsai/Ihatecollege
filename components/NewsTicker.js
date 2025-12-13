import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

function decodeEntities(s = "") {
  let t = String(s);

  t = t
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

  t = t.replace(/&#(\d+);/g, (_, code) => {
    try {
      return String.fromCodePoint(parseInt(code, 10));
    } catch {
      return _;
    }
  });

  t = t.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
    try {
      return String.fromCodePoint(parseInt(hex, 16));
    } catch {
      return _;
    }
  });

  return t;
}

export default function NewsTicker() {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  const [runKey, setRunKey] = useState(0);

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
        setItems(list.slice(0, 18));

        // Safari: restart animation after DOM paint
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
    const t = setInterval(load, 30 * 60 * 1000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const contentItems = useMemo(() => items.slice(0, 18), [items]);
  const hasItems = contentItems.length > 0;

  return (
    <div className="tickerWrap" aria-label="Jobs + economy headlines">
      <div className="tickerRoot">
        {/* DESKTOP */}
        <div className="desktopRow">
          <span className="label">News Update:</span>

          <div className="viewport">
            {!hasItems ? (
              <div className="idle">Loading jobs + economy headlines…</div>
            ) : (
              <div key={runKey} className={`track ${ready ? "run desktopSpeed" : ""}`}>
                <div className="content">
                  {contentItems.map((it, i) => {
                    const title = decodeEntities(it.title);
                    const source = decodeEntities(it.source);
                    return (
                      <a
                        key={`${it.link}-${i}`}
                        href={it.link}
                        target="_blank"
                        rel="noreferrer"
                        className="item"
                        title={title}
                      >
                        <span className="dot">•</span>
                        <span className="text">
                          {title}
                          {source ? ` — ${source}` : ""}
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="content" aria-hidden="true">
                  {contentItems.map((it, i) => {
                    const title = decodeEntities(it.title);
                    const source = decodeEntities(it.source);
                    return (
                      <a
                        key={`${it.link}-dup-${i}`}
                        href={it.link}
                        target="_blank"
                        rel="noreferrer"
                        className="item"
                        tabIndex={-1}
                        title={title}
                      >
                        <span className="dot">•</span>
                        <span className="text">
                          {title}
                          {source ? ` — ${source}` : ""}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE */}
        <div className="mobileRow">
          <div className="mobileHeader">
            <span className="tickerCapsule">News Update</span>
            <span className="tapHint">{pausedMobile ? "Paused" : "Tap to pause"}</span>
          </div>

          <div
            className="viewport"
            role="button"
            aria-label="Tap to open"
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
                  {contentItems.map((it, i) => {
                    const title = decodeEntities(it.title);
                    const source = decodeEntities(it.source);
                    return (
                      <a
                        key={`${it.link}-m-${i}`}
                        href={it.link}
                        target="_blank"
                        rel="noreferrer"
                        className="item"
                        title={title}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="dot">•</span>
                        <span className="text">
                          {title}
                          {source ? ` — ${source}` : ""}
                        </span>
                      </a>
                    );
                  })}
                </div>

                <div className="content" aria-hidden="true">
                  {contentItems.map((it, i) => {
                    const title = decodeEntities(it.title);
                    const source = decodeEntities(it.source);
                    return (
                      <a
                        key={`${it.link}-m-dup-${i}`}
                        href={it.link}
                        target="_blank"
                        rel="noreferrer"
                        className="item"
                        tabIndex={-1}
                        title={title}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="dot">•</span>
                        <span className="text">
                          {title}
                          {source ? ` — ${source}` : ""}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ NEW: Link under ticker */}
      <div className="belowLinkRow">
        <Link href="/news" className="belowLink">
          Tap here for latest news →
        </Link>
      </div>

      <style jsx>{`
        .tickerWrap {
          width: 100%;
        }

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

        .belowLinkRow {
          display: flex;
          justify-content: flex-end;
          padding: 6px 4px 0 4px;
        }

        .belowLink {
          font-weight: 900;
          font-size: 12px;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(8px);
        }

        .belowLink:hover {
          color: #111827;
          background: #ffb000;
          border-color: rgba(255, 176, 0, 0.8);
        }

        .desktopRow {
          display: flex;
          align-items: center;
          height: 44px;
          padding: 0 14px;
          gap: 12px;
        }

        .label {
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.06em;
          color: #ffb000;
          white-space: nowrap;
        }

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

        .run.desktopSpeed {
          animation: move 110s linear infinite;
          -webkit-animation: move 110s linear infinite;
        }

        .run.mobileSpeed {
          animation: move 60s linear infinite;
          -webkit-animation: move 60s linear infinite;
        }

        .desktopRow .viewport:hover .run.desktopSpeed {
          animation-play-state: paused;
          -webkit-animation-play-state: paused;
        }

        .paused {
          animation-play-state: paused !important;
          -webkit-animation-play-state: paused !important;
        }

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
          .belowLinkRow { justify-content: flex-start; }
        }
      `}</style>
    </div>
  );
                                    }
