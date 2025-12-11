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
      <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/95 border-b border-slate-800 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          
          {/* LOGO + TEXT */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/icon.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />

            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-[0.35em] uppercase whitespace-nowrap">
                IHATECOLLEGE
              </span>

              <span className="px-3 py-1 rounded-full border border-indigo-400/80 text-xs font-semibold tracking-wide bg-slate-900/60">
                .COM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
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
            className="md:hidden p-2 text-slate-200"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </div>
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <nav className="grid grid-cols-2 gap-2 px-4 py-4 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="pt-28 flex-1 px-4">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IHateCollege.com — College is optional. Debt isn’t.
      </footer>
    </div>
  );
        }
