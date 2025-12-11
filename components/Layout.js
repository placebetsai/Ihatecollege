// components/Layout.js
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/debt-calculator", label: "Debt Calculator" },
  { href: "/cheat-sheets", label: "Cheat Sheets" },
  { href: "/rank-your-school", label: "Rank Your College" },
  { href: "/liberal-vs-conservative", label: "Conservative vs Liberal" },
  { href: "/trade-schools", label: "Trade School" },
  { href: "/civil-service", label: "Gov Jobs" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* TOP NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-40 bg-slate-950/90 border-b border-slate-800 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          {/* LEFT: ICON + TEXT + .COM */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            {/* small round icon */}
            <img
              src="/icon.png"
              alt="IHateCollege logo"
              className="h-8 w-8 object-contain"
            />

            {/* IHATECOLLEGE + .COM pill */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold tracking-[0.35em] uppercase text-slate-100">
                IHATECOLLEGE
              </span>
              <span className="px-3 py-1 rounded-full border border-indigo-400/80 text-xs font-semibold tracking-wide text-slate-100 bg-slate-900/70">
                .COM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle main menu"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-slate-200" />
              <span className="block h-0.5 w-6 bg-slate-200" />
              <span className="block h-0.5 w-6 bg-slate-200" />
            </div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950">
            <nav className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-slate-200 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-20 pb-12">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IHateCollege.com — College is optional. Debt isn’t.
      </footer>
    </div>
  );
}
