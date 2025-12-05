import React, { useState } from "react";

const navItems = [
  { label: "Campus vibes", href: "#vibes" },
  { label: "Alternatives", href: "#alternatives" },
  { label: "Cheat sheets", href: "#cheatsheets" },
  { label: "Rank your school", href: "#rate" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href) => {
    setOpen(false);
    if (typeof window !== "undefined") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        {/* Logo / brand */}
        <button
          onClick={() => handleNavClick("#top")}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-sm font-bold shadow-soft">
            IH
          </span>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold tracking-tight">
              ihatecollege.com
            </span>
            <span className="text-[11px] text-slate-400">
              No brochure fluff. Just reality.
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="rounded-full px-2 py-1 text-xs uppercase tracking-wide text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/70 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v
