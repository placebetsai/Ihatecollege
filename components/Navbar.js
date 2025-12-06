// components/Navbar.js
import React from "react";
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

  return (
    <nav className="nav-shell">
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="nav-logo-main">IHATECOLLEGE</span>
          <span className="nav-logo-pill">.COM</span>
        </div>

        {/* horizontal scroll on mobile */}
        <div className="nav-links">
          {links.map((link) => {
            const isActive =
              router.pathname === link.href ||
              (link.href !== "/" && router.pathname.startsWith(link.href));

            return (
              <Link key={link.href} href={link.href} className="nav-link-wrap">
                <span className={`nav-link ${isActive ? "nav-link-active" : ""}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
