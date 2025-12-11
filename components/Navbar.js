import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/debt-calculator", label: "Debt Calculator" },
  { href: "/cheat-sheets", label: "Cheat Sheets" },
  { href: "/rank-your-school", label: "Rank School" },
  { href: "/liberal-vs-conservative", label: "Campus Vibes" },
  { href: "/trade-schools", label: "Trades" },
  { href: "/civil-service", label: "Gov Jobs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* LINKED TO YOUR NEW LOGO FILE */}
        <Link href="/" className="logo-wrap" style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
          <Image 
            src="/logo-header.png" 
            alt="IHATECOLLEGE.COM"
            width={240} 
            height={60} 
            priority 
            style={{ width: 'auto', height: '100%', objectFit: 'contain' }} 
          />
        </Link>

        <nav className="nav-links-desktop">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={router.pathname === link.href ? "nav-link nav-link-active" : "nav-link"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "bar bar1 open" : "bar bar1"}></span>
          <span className={open ? "bar bar2 open" : "bar bar2"}></span>
          <span className={open ? "bar bar3 open" : "bar bar3"}></span>
        </button>
      </div>

      <nav className={open ? "nav-links-mobile open" : "nav-links-mobile"}>
        {links.map((link) => (
          <Link
            key={link.href + "-mobile"}
            href={link.href}
            className={router.pathname === link.href ? "nav-link-mobile nav-link-mobile-active" : "nav-link-mobile"}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}