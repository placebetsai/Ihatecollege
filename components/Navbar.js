// components/Navbar.js
// components/Navbar.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/Alternatives", label: "Alternatives" },
  { href: "/debt-calculator", label: "Debt Calculator" },
  { href: "/cheat-sheets", label: "Cheat Sheets" },
  { href: "/rank-your-school", label: "Rank Your School" },
  { href: "/liberal-vs-conservative", label: "Liberal vs Conservative" },
  { href: "/trade-schools", label: "Trade Schools" },
  { href: "/civil-service", label: "Civil Service" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* LOGO */}
        <Link href="/" className="logo">
          <span className="logo-main">IHATECOLLEGE</span>
          <span className="logo-tag">.COM</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links nav-links-desktop" aria-label="Main navigation">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? router.pathname === "/"
                : router.pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
          <span className={`nav-toggle-bar ${open ? "open" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="nav-links-mobile" aria-label="Mobile navigation">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? router.pathname === "/"
                : router.pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-mobile ${
                  active ? "nav-link-mobile-active" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
