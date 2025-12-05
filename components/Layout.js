import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen text-slate-50">
      {/* subtle gradient overlay, already have base bg from .app-bg */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-4 pb-16 pt-6 sm:px-6 lg:px-10">{children}</main>
        <footer className="border-t border-white/10 bg-black/40 py-6 text-center text-xs text-slate-400">
          © {year} ihatecollege.com · You&apos;re allowed to hate classes and still want a future.
        </footer>
      </div>
    </div>
  );
}
