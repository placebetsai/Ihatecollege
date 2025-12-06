// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/alternatives", label: "Alternatives" },
    { href: "/debt-calculator", label: "Debt Calculator" },
    { href: "/cheat-sheets", label: "Cheat Sheets" },
    { href: "/rank-your-school", label: "Rank Your School" },
    { href: "/liberal-vs-conservative", label: "Liberal vs Conservative" },
    { href: "/trade-schools", label: "Trade Schools" },
    { href: "/civil-service", label: "Civil Service" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #020617;
          border-bottom: 1px solid rgba(148, 163, 184, 0.3);
        }

        nav {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .logo {
          font-weight: 700;
          letter-spacing: 0.18em;
          font-size: 1rem;
          text-decoration: none;
          color: #f9fafb;
        }

        .dotcom {
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.7);
          color: #e5e7eb;
        }

        .links {
          display: none;
          flex-direction: column;
          gap: 0.9rem;
          margin-top: 0.8rem;
        }

        .links.open {
          display: flex;
        }

        .link,
        .link:visited {
          text-decoration: none;
          color: #e5e7eb;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .link:hover {
          color: #facc15;
        }

        .link.active {
          color: #facc15;
          text-decoration: underline;
          text-underline-offset: 0.25rem;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hamburger span {
          width: 24px;
          height: 2px;
          border-radius: 999px;
          background: #f9fafb;
        }

        /* Desktop */
        @media (min-width: 768px) {
          nav {
            padding: 0.8rem 1.5rem;
          }

          .hamburger {
            display: none;
          }

          .links {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.8rem;
            margin-top: 0;
          }
        }
      `}</style>

      <header>
        <nav>
          <div className="brand">
            <Link href="/" className="logo">
              IHATECOLLEGE
            </Link>
            <span className="dotcom">.COM</span>
          </div>

          {/* Mobile hamburger */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Links */}
          <div className={`links ${open ? "open" : ""}`}>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link ${isActive(item.href) ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
