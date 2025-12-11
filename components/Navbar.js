import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// JSX labels for Desktop stacking
const links = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/alternatives", label: "Alternatives", mobileLabel: "Alternatives" },
  { href: "/debt-calculator", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Debt<br/>Calculator</div>, mobileLabel: "Debt Calculator" },
  { href: "/cheat-sheets", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Cheat<br/>Sheets</div>, mobileLabel: "Cheat Sheets" },
  { href: "/rank-your-school", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Rank<br/>School</div>, mobileLabel: "Rank Your School" },
  {
    href: "/liberal-vs-conservative",
    label: (
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'center' }}>
        <span>Liberal</span>
        <span style={{ fontSize: '0.7em', opacity: 0.6, margin: '2px 0' }}>or</span>
        <span>Conservative</span>
      </div>
    ),
    mobileLabel: "Liberal vs Conservative"
  },
  { href: "/trade-schools", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Trade<br/>School</div>, mobileLabel: "Trade Schools" },
  { href: "/civil-service", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Gov<br/>Jobs</div>, mobileLabel: "Gov Jobs" },
  { href: "/contact", label: "Contact", mobileLabel: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="site-header">
      <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* LOGO */}
        <Link
          href="/"
          className="logo-wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '70px',
            marginRight: '20px',
            flexShrink: 0
          }}
        >
          <Image
            src="/logo-header.png"
            alt="IHATECOLLEGE.COM"
            width={320}
            height={80}
            priority
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen' 
            }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links-desktop" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={router.pathname === link.href ? "nav-link nav-link-active" : "nav-link"}
              style={{
                fontSize: '0.85rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
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

      {/* MOBILE MENU */}
      <nav className={open ? "nav-links-mobile open" : "nav-links-mobile"}>
        {links.map((link) => (
          <Link
            key={link.href + "-mobile"}
            href={link.href}
            className={router.pathname === link.href ? "nav-link-mobile nav-link-mobile-active" : "nav-link-mobile"}
          >
            {/* USE THE SIMPLE STRING FOR MOBILE */}
            {link.mobileLabel}
          </Link>
        ))}
      </nav>
    </header>
  );
}
