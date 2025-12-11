// components/Layout.js
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      {/* main content */}
      <main className="flex-1 pt-6 pb-12">
        {children}
      </main>

      {/* footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IHateCollege.com — College is optional. Debt isn’t.
      </footer>
    </div>
  );
}
