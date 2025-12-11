import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* This loads your new Navbar.js */}
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} IHateCollege.com — No brochure fluff. Just reality.</p>
        </div>
      </footer>
    </div>
  );
}