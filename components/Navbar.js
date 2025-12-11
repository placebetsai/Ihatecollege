import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/debt-calculator", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Debt<br/>Calculator</div> },
  { href: "/cheat-sheets", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Cheat<br/>Sheets</div> },
  { href: "/rank-your-school", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Rank<br/>School</div> },
  {
    href: "/liberal-vs-conservative",
    label: (
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1', alignItems: 'center' }}>
        <span>Conservative</span>
        <span style={{ fontSize: '0.7em', opacity: 0.6, margin: '2px 0' }}>or</span>
        <span>Liberal</span>
      </div>
    )
  },
  { href: "/trade-schools", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Trade<br/>School</div> },
  { href: "/civil-service", label: <div style={{textAlign: 'center', lineHeight: '1.2'}}>Gov<br/>Jobs</div> },
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
      <div className="nav-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* LOGO FIX */}
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
            src="/logo-header.png" // Ensure your black background logo is named this
            alt="IHATECOLLEGE.COM"
            width={320}
            height={80}
            priority
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
              // KEY FIX: 'screen' makes the BLACK background transparent
              mixBlendMode: 'screen' 
            }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links-desktop" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {links.map((link, index) => (
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
            {/* Simplify labels for mobile to avoid messy stacking */}
            {link.href === '/liberal-vs-conservative' ? 'Conservative or Liberal' : 
             link.href === '/trade-schools' ? 'Trade Schools' :
             'textContent' in link.label ? link.label.textContent : 
             // Fallback for simple React elements
             typeof link.label === 'string' ? link.label : 'Link'}
          </Link>
        ))}
      </nav>
    </header>
  );
}
