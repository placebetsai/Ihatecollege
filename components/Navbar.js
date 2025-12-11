import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// DATA: Mobile labels are simple strings to prevent build errors.
// Desktop labels use JSX for the specific stacking you requested.
const links = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/alternatives", label: "Alternatives", mobileLabel: "Alternatives" },
  { href: "/debt-calculator", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Debt<br/>Calculator</div>, mobileLabel: "Debt Calculator" },
  { href: "/cheat-sheets", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Cheat<br/>Sheets</div>, mobileLabel: "Cheat Sheets" },
  
  // FIX: Rank / Your / College
  { href: "/rank-your-school", label: <div style={{textAlign: 'center', lineHeight: '1.1'}}>Rank<br/>Your<br/>College</div>, mobileLabel: "Rank Your College" },
  
  // FIX: Conservative / or / Liberal
  {
    href: "/liberal-vs-conservative",
    label: (
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'center' }}>
        <span>Conservative</span>
        <span style={{ fontSize: '0.7em', opacity: 0.6, margin: '1px 0' }}>or</span>
        <span>Liberal</span>
      </div>
    ),
    mobileLabel: "Conservative or Liberal"
  },
  
  // FIX: Trade / School
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

        {/* LOGO FIX: Added massive margin-right to stop overlap */}
        <Link
          href="/"
          className="logo-wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '70px',
            marginRight: '80px', // <--- PUSHES MENU AWAY
            flexShrink: 0
          }}
        >
          <Image
            src="/logo-header.jpg" // Using your JPG
            alt="IHATECOLLEGE.COM"
            width={320}
            height={80}
            priority
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen' // Hides black background
            }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links-desktop" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={router.pathname === link.href ? "nav-link nav-link-active" : "nav-link"}
              style={{
                fontSize: '0.85rem',
                fontWeight: '600',
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
            {link.mobileLabel}
          </Link>
        ))}
      </nav>
    </header>
  );
}
