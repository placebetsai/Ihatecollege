import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/debt-calculator", label: <>Debt<br />Calculator</> },
  { href: "/cheat-sheets", label: <>Cheat<br />Sheets</> },
  { href: "/rank-your-school", label: <>Rank<br />School</> },
  {
    href: "/liberal-vs-conservative",
    label: (
      <span style={{ display: 'block', lineHeight: '0.9' }}>
        Conservative<br />
        <span style={{ fontSize: '0.75em', opacity: 0.7, display: 'block', margin: '2px 0' }}>or</span>
        Liberal
      </span>
    )
  },
  { href: "/trade-schools", label: <>Trade<br />School</> },
  { href: "/civil-service", label: <>Gov<br />Jobs</> },
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

        {/* LOGO */}
        <Link
          href="/"
          className="logo-wrap"
        >
          <Image
            src="/logo-header.png"
            alt="IHATECOLLEGE.COM"
            width={280}
            height={70}
            priority
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'multiply' // <--- THIS FIXES THE WHITE BOX
            }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links-desktop">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={router.pathname === link.href ? "nav-link nav-link-active" : "nav-link"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
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

      {/* MOBILE MENU DROPDOWN */}
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
