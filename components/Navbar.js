// components/Navbar.js
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LINKS = [
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
    <nav className="ihc-nav">
      <div className="ihc-nav-inner">
        <div className="ihc-logo">
          <span className="ihc-logo-main">IHATECOLLEGE</span>
          <span className="ihc-logo-pill">.COM</span>
        </div>

        <div className="ihc-links">
          {LINKS.map((link) => {
            const active =
              router.pathname === link.href ||
              (link.href !== "/" && router.pathname.startsWith(link.href));

            return (
              <Link key={link.href} href={link.href} className="ihc-link-wrap">
                <span className={`ihc-link ${active ? "ihc-link--active" : ""}`}>
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
