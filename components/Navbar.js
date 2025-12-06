// components/Navbar.js
import { useState, useEffect } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link href="/" className="logo-wrap">
          <span className="logo-text">IHATECOLLEGE</span>
          <span className="logo-pill">.COM</span>
        </Link>

        <nav className="nav-links-desktop">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "nav-link" +
                (router.pathname === l.href ? " nav-link-active" : "")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className={open ? "bar bar1 open" : "bar bar1"} />
          <span className={open ? "bar bar2 open" : "bar bar2"} />
          <span className={open ? "bar bar3 open" : "bar bar3"} />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={open ? "nav-links-mobile open" : "nav-links-mobile"}>
        {links.map((l) => (
          <Link
            key={l.href + "-m"}
            href={l.href}
            className={
              "nav-link-mobile" +
              (router.pathname === l.href ? " nav-link-mobile-active" : "")
            }
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
