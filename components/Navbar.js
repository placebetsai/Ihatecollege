import React, { useState } from "react";
import Link from "next/link";

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
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          IHATECOLLEGE <span className="dotcom">.COM</span>
        </Link>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-item">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
