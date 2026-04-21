import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "./AuthProvider";
import AuthModal from "./AuthModal";

const links = [
  { href: "/",                        label: "Home" },
  { href: "/college-rankings",        label: "Rankings" },
  { href: "/liberal-vs-conservative", label: "Lib vs Con" },
  { href: "/rank-your-school",        label: "Rate My School" },
  { href: "/alternatives",            label: "Alternatives" },
  { href: "/trade-schools",           label: "Trades" },
  { href: "/civil-service",           label: "Gov Jobs" },
  { href: "/debt-calculator",         label: "Debt Calc" },
  { href: "/job-board",               label: "Jobs" },
  { href: "/shop",                    label: "Shop" },
  { href: "/blog",                    label: "Blog" },
  { href: "/news",                    label: "News" },
  { href: "/contact",                 label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { user, profile, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => { setOpen(false); }, [router.pathname]);

  const isActive = (href) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <header className="relative z-50" style={{ background: "#0a0a0a" }}>

      {/* ROW 1: Logo + Auth + Hamburger */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3" style={{ borderBottom: "1px solid #1a1a1a" }}>

        <Link href="/" className="flex-shrink-0 flex items-center gap-1.5">
          <span className="text-2xl sm:text-3xl font-black italic tracking-tighter text-white">IHATECOLLEGE</span>
          <span className="text-[11px] sm:text-[13px] font-black px-1.5 py-0.5 rounded" style={{ background: "#ff2020", color: "#fff", letterSpacing: "0.05em" }}>.COM</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Social icons — desktop only */}
          <div className="hidden lg:flex items-center gap-2.5 mr-2">
            <a href="https://twitter.com/ihatecollege4u" target="_blank" rel="noreferrer" aria-label="Twitter/X" className="text-slate-600 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@_ihatecollege" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-slate-600 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>
            </a>
            <a href="https://www.youtube.com/@IHateCollege79" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-slate-600 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Auth */}
          {user ? (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">{profile?.username || user.email?.split('@')[0]}</span>
              <button onClick={signOut} className="text-xs text-red-400 hover:text-red-300 font-bold">Log out</button>
            </div>
          ) : (
            <button onClick={() => setShowAuth(true)} className="hidden sm:block text-xs font-bold px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors">
              Sign In
            </button>
          )}

          {/* Hamburger — always visible */}
          <button className="md:hidden p-2 text-slate-300 hover:text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ROW 2: Desktop nav — wraps to 2 rows instead of cutting off */}
      <div className="hidden md:block" style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex flex-wrap items-center gap-1 py-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}
                style={isActive(link.href) ? { background: "#ff2020", color: "#fff" } : {}}
                className={`text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  isActive(link.href) ? "" : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <nav
        className={`fixed inset-0 flex flex-col items-center justify-center gap-4 transition-all duration-300 md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        style={{ background: "#0a0a0a", zIndex: 60 }}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-bold"
          style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Close
        </button>

        {links.map((link) => (
          <Link key={link.href + "m"} href={link.href}
            style={isActive(link.href) ? { color: "#ff2020" } : {}}
            className={`text-lg font-bold transition-colors ${isActive(link.href) ? "" : "text-slate-300 hover:text-white"}`}
          >
            {link.label}
          </Link>
        ))}

        {user ? (
          <div className="flex flex-col items-center gap-2 mt-3 pt-3" style={{ borderTop: "1px solid #1a1a1a" }}>
            <span className="text-sm font-bold text-slate-400">{profile?.username || user.email?.split('@')[0]}</span>
            <button onClick={() => { signOut(); setOpen(false); }} className="text-sm text-red-400 hover:text-red-300 font-bold">Log out</button>
          </div>
        ) : (
          <button onClick={() => { setShowAuth(true); setOpen(false); }} className="mt-3 px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm transition-colors">
            Sign In / Sign Up
          </button>
        )}

        <div className="flex gap-5 mt-3 pt-3" style={{ borderTop: "1px solid #1a1a1a" }}>
          <a href="https://twitter.com/ihatecollege4u" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@_ihatecollege" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>
          </a>
          <a href="https://www.youtube.com/@IHateCollege79" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onSuccess={() => setShowAuth(false)} />}
    </header>
  );
}
