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
      {/* INLINE STYLES (NO CSS FILE NEEDED) */}
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #040710;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.9rem 1rem;
        }

        .logo {
          font-weight: 700;
          letter-spacing: 0.18em;
          font-size: 1rem;
          text-decoration: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .dotcom {
          font-size: 0.75rem;
          padding: 2px 7px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .links {
          display: none;
          flex-direction: column;
          gap: 0.9rem;
          margin-top: 0.8rem;
        }

        .open {
          display: flex;
        }

        .link {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
        }

        .active {
          color: #ffd24a;
          text-decoration: underline;
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
          background: white;
        }

        /* Desktop */
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
          .links {
            display: flex !important;
            flex-direction: row;
            margin-top: 0;
            gap: 1.8rem;
          }
        }
      `}</style>

      <header>
        <nav>
          {/* LOGO */}
          <Link href="/" className="logo">
            IHATECOLLEGE <span className="dotcom">.COM</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAV LINKS */}
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
