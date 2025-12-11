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

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* LOGO + TEXT */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/icon.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />

            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-[0.35em] uppercase">
                IHATECOLLEGE
              </span>

              <span className="px-4 py-1 rounded-full border border-indigo-400/70 bg-slate-900/60 text-xs font-bold tracking-wide">
                .COM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white whitespace-nowrap transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 text-slate-200"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span className="block w-7 h-0.5 bg-white" />
              <span className="block w-7 h-0.5 bg-white" />
              <span className="block w-7 h-0.5 bg-white" />
            </div>
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <div className="lg:hidden bg-slate-950 border-t border-slate-800">
            <nav className="grid grid-cols-2 gap-2 px-4 py-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-200 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="pt-24 flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IHateCollege.com — College is optional. Debt isn’t.
      </footer>
    </div>
  );
}
