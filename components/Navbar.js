// components/Navbar.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-main">IHATECOLLEGE</span>
            <span className="brand-dot">.com</span>
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>

          <nav className="nav-desktop">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  router.pathname === link.href
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile ${isOpen ? "nav-mobile--open" : ""}`}>
        <div className="nav-mobile-inner">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                router.pathname === link.href
                  ? "nav-mobile-link nav-mobile-link--active"
                  : "nav-mobile-link"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
