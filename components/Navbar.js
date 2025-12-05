import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur text-white border-b border-white/10 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          I Hate College
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/alternatives" className="hover:text-amber-400">Alternatives</Link>
          <Link href="/cheatsheets" className="hover:text-amber-400">Cheat Sheets</Link>
          <Link href="/rank" className="hover:text-amber-400">Rank Schools</Link>
          <Link href="/cost" className="hover:text-amber-400">Cost Calc</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact</Link>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 flex flex-col px-6 py-4 gap-4">
          <Link href="/alternatives" onClick={() => setOpen(false)}>Alternatives</Link>
          <Link href="/cheatsheets" onClick={() => setOpen(false)}>Cheat Sheets</Link>
          <Link href="/rank" onClick={() => setOpen(false)}>Rank Schools</Link>
          <Link href="/cost" onClick={() => setOpen(false)}>Cost Calc</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
  }
