// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/alternatives", label: "Alternatives", mobileLabel: "Alternatives" },
  {
    href: "/debt-calculator",
    label: <div className="text-center leading-tight">Debt<br />Calculator</div>,
    mobileLabel: "Debt Calculator",
  },
  {
    href: "/cheat-sheets",
    label: <div className="text-center leading-tight">Cheat<br />Sheets</div>,
    mobileLabel: "Cheat Sheets",
  },
  {
    href: "/rank-your-school",
    label: (
      <div className="text-center leading-tight">
        Rank<br />Your<br />College
      </div>
    ),
    mobileLabel: "Rank Your College",
  },
  {
    href: "/liberal-vs-conservative",
    label: (
      <div className="flex flex-col items-center leading-none">
        <span>Conservative</span>
        <span className="text-[10px] opacity-60 my-[1px]">vs</span>
        <span>Liberal</span>
      </div>
    ),
    mobileLabel: "Conservative vs Liberal",
  },
  {
    href: "/trade-schools",
    label: <div className="text-center leading-tight">Trade<br />School</div>,
    mobileLabel: "Trade Schools",
  },
  {
    href: "/civil-service",
    label: <div className="text-center leading-tight">Gov<br />Jobs</div>,
    mobileLabel: "Gov Jobs",
  },
  { href: "/contact", label: "Contact", mobileLabel: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex-shrink-0 flex items-center h-full mr-4 md:mr-10"
        >
          <div className="relative w-48 md:w-64 h-10 md:h-14">
            <Image
              src="/logo-header.png"
              alt="IHATECOLLEGE.COM"
              fill
              className="object-contain object-left mix-blend-screen"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center h-full hover:text-white transition-colors ${
                router.pathname === link.href
                  ? "text-yellow-400"
                  : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BURGER */}
        <button
          className="lg:hidden p-2 text-slate-200"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-current transition-transform ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-transform ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="lg:hidden border-t border-slate-800 bg-slate-950">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-center text-sm font-medium border-b border-slate-800/60 ${
                router.pathname === link.href
                  ? "text-yellow-400"
                  : "text-slate-200"
              }`}
            >
              {link.mobileLabel}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
