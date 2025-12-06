import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/Alternatives", label: "Alternatives" },            // matches Alternatives.js
  { href: "/debt-calculator", label: "Debt Calculator" },      // debt-calculator.js
  { href: "/cheat-sheets", label: "Cheat Sheets" },            // cheat-sheets.js
  { href: "/rank-your-school", label: "Rank Your School" },    // rank-your-school.js
  { href: "/rank", label: "Liberal vs Conservative" },         // rank.js
  { href: "/trade-schools", label: "Trade Schools" },          // trade-schools.js (we create below)
  { href: "/civil-service", label: "Civil Service" },          // civil-service.js (we create below)
  { href: "/contact", label: "Contact" },                      // contact.js
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href;
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        <div className="logo">
          <span className="logo-main">IHATECOLLEGE</span>
          <span className="logo-tag">.COM</span>
        </div>

        {/* Desktop links */}
        <nav className="nav-links nav-links-desktop">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} legacyBehavior>
              <a
                className={`nav-link ${
                  isActive(link.href) ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="nav-links-mobile">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} legacyBehavior>
              <a
                className={`nav-link-mobile ${
                  isActive(link.href) ? "nav-link-mobile-active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
