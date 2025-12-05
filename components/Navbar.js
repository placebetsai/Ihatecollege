// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="nav-root">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-main">ihatecollege.com</span>
            <span className="nav-logo-sub">Real talk. Real alternatives.</span>
          </Link>

          <nav className="nav-links">
            <Link href="/alternatives" className="nav-link">
              Alternatives
            </Link>
            <Link href="/cost" className="nav-link">
              Debt Calculator
            </Link>
            <Link href="/rank" className="nav-link">
              Rank Your School
            </Link>
            <Link href="/cheatsheets" className="nav-link">
              Cheat Sheets
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <style jsx>{`
        .nav-root {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(18px);
          background: linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(2, 6, 23, 0.98));
          border-bottom: 1px solid rgba(148, 163, 184, 0.4);
        }
        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.5rem;
        }
        .nav-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .nav-logo-main {
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: linear-gradient(to right, #fbbf24, #38bdf8);
          -webkit-background-clip: text;
          color: transparent;
        }
        .nav-logo-sub {
          font-size: 0.7rem;
          color: #9ca3af;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .nav-link {
          font-size: 0.8rem;
          color: #e5e7eb;
          text-decoration: none;
          padding: 0.3rem 0.4rem;
          border-radius: 999px;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .nav-link:hover {
          color: #020617;
          background: #fbbf24;
        }
        @media (max-width: 720px) {
          .nav-inner {
            padding-inline: 1rem;
          }
          .nav-links {
            gap: 0.6rem;
            font-size: 0.75rem;
          }
          .nav-logo-main {
            font-size: 0.95rem;
          }
          .nav-logo-sub {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
