import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/alternatives", label: "Alternatives", mobileLabel: "Alternatives" },
  { href: "/debt-calculator", label: <div className="text-center leading-tight">Debt<br/>Calculator</div>, mobileLabel: "Debt Calculator" },
  { href: "/cheat-sheets", label: <div className="text-center leading-tight">Cheat<br/>Sheets</div>, mobileLabel: "Cheat Sheets" },
  { href: "/rank-your-school", label: <div className="text-center leading-tight">Rank<br/>Your<br/>College</div>, mobileLabel: "Rank Your College" },
  {
    href: "/liberal-vs-conservative",
    label: (
      <div className="flex flex-col items-center leading-none">
        <span>Conservative</span>
        <span className="text-[10px] opacity-60 my-[1px]">or</span>
        <span>Liberal</span>
      </div>
    ),
    mobileLabel: "Conservative or Liberal"
  },
  { href: "/trade-schools", label: <div className="text-center leading-tight">Trade<br/>School</div>, mobileLabel: "Trade Schools" },
  { href: "/civil-service", label: <div className="text-center leading-tight">Gov<br/>Jobs</div>, mobileLabel: "Gov Jobs" },
  { href: "/contact", label: "Contact", mobileLabel: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO - Huge right margin for desktop to prevent overlap */}
        <Link href="/" className="flex-shrink-0 mr-8 lg:mr-20 h-full flex items-center">
          <div className="relative w-64 h-16">
            <Image
              src="/logo-header.png" // Correct file name
              alt="IHATECOLLEGE.COM"
              fill
              className="object-contain object-left mix-blend-screen" // This makes the black background transparent
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold hover:text-white transition-colors h-full flex items-center ${
                router.pathname === link.href ? "text-yellow-400" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden p-2 text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={`block w-full h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-full h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-full h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="lg:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-4 border-b border-slate-800/50 text-center font-medium ${
                router.pathname === link.href ? "text-yellow-400" : "text-slate-200"
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
