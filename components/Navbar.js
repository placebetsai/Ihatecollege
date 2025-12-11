import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/alternatives", label: "Alternatives", mobileLabel: "Alternatives" },
  { href: "/debt-calculator", label: <div className="stacked-link">Debt<br/>Calculator</div>, mobileLabel: "Debt Calculator" },
  { href: "/cheat-sheets", label: <div className="stacked-link">Cheat<br/>Sheets</div>, mobileLabel: "Cheat Sheets" },
  { href: "/rank-your-school", label: <div className="stacked-link">Rank<br/>Your<br/>College</div>, mobileLabel: "Rank Your College" },
  {
    href: "/liberal-vs-conservative",
    label: (
      <div className="stacked-link" style={{ alignItems: 'center' }}>
        <span>Conservative</span>
        <span style={{ fontSize: '0.7em', opacity: 0.6, margin: '1px 0' }}>or</span>
        <span>Liberal</span>
      </div>
    ),
    mobileLabel: "Conservative or Liberal"
  },
  { href: "/trade-schools", label: <div className="stacked-link">Trade<br/>School</div>, mobileLabel: "Trade Schools" },
  { href: "/civil-service", label: <div className="stacked-link">Gov<br/>Jobs</div>, mobileLabel: "Gov Jobs" },
  { href: "/contact", label: "Contact", mobileLabel: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header className="site-header">
        <div className="nav-inner">
          
          {/* LOGO LINK */}
          <Link href="/" className="logo-wrap">
            <div className="logo-container">
              <Image
                src="/logo-header.jpg"
                alt="IHATECOLLEGE.COM"
                fill
                priority
                className="logo-img"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav-links-desktop">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={router.pathname === link.href ? "nav-link nav-link-active" : "nav-link"}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            <span className={open ? "bar bar1 open" : "bar bar1"}></span>
            <span className={open ? "bar bar2 open" : "bar bar2"}></span>
            <span className={open ? "bar bar3 open" : "bar bar3"}></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav className={open ? "nav-links-mobile open" : "nav-links-mobile"}>
          {links.map((link) => (
            <Link
              key={link.href + "-mobile"}
              href={link.href}
              className={router.pathname === link.href ? "nav-link-mobile nav-link-mobile-active" : "nav-link-mobile"}
            >
              {link.mobileLabel}
            </Link>
          ))}
        </nav>
      </header>

      {/* COMPONENT-SPECIFIC STYLES TO FIX MOBILE & DESKTOP */}
      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.98);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          backdrop-filter: blur(10px);
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO STYLES */
        .logo-wrap {
          display: flex;
          align-items: center;
          /* Huge margin on desktop to prevent overlap */
          margin-right: 80px; 
          flex-shrink: 0;
        }

        .logo-container {
          position: relative;
          width: 280px;
          height: 60px;
        }

        /* The Image component receives this class via the global selector below */
        :global(.logo-img) {
          object-fit: contain;
          object-position: left center;
          mix-blend-mode: screen; /* Removes black background */
        }

        /* DESKTOP NAV */
        .nav-links-desktop {
          display: flex;
          gap: 1.2rem;
          align-items: center;
          height: 100%;
        }

        .nav-link {
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e1;
          transition: 0.2s;
          height: 100%;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-link:hover { color: white; }
        .nav-link-active { color: #facc15; }

        /* Stacked Text Helper */
        :global(.stacked-link) {
          text-align: center;
          line-height: 1.1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* HAMBURGER */
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
        }
        .bar {
          display: block;
          width: 24px;
          height: 2px;
          background: white;
          margin: 5px auto;
          transition: 0.3s;
        }
        .bar1.open { transform: translateY(7px) rotate(45deg); }
        .bar2.open { opacity: 0; }
        .bar3.open { transform: translateY(-7px) rotate(-45deg); }

        /* MOBILE MENU */
        .nav-links-mobile {
          display: none;
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: #020617;
          border-bottom: 1px solid #1e293b;
          flex-direction: column;
          padding: 1rem;
        }
        .nav-links-mobile.open { display: flex; }
        
        .nav-link-mobile {
          padding: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #e2e8f0;
          font-weight: 600;
          text-align: center;
        }
        .nav-link-mobile-active { color: #facc15; }

        /* --- RESPONSIVE FIXES --- */
        @media (max-width: 1100px) {
          .nav-links-desktop { display: none; }
          .nav-toggle { display: block; }
          
          /* RESET MARGIN FOR MOBILE SO HAMBURGER FITS */
          .logo-wrap { margin-right: 0; }
          
          /* SHRINK LOGO FOR MOBILE */
          .logo-container {
            width: 200px;
            height: 50px;
          }
          .nav-inner { height: 60px; }
          .nav-links-mobile { top: 60px; }
        }
      `}</style>
    </>
  );
}
