// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="site-logo" onClick={close}>
          <span className="logo-main">IHATECOLLEGE</span>
          <span className="logo-pill">.COM</span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          className={`nav-toggle ${isOpen ? "open" : ""}`}
          onClick={toggle}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={close}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
