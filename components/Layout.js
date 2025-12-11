import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* THIS IS THE FIX: Load the external Navbar component instead of hardcoding it here */}
      <Navbar />

      {/* PAGE CONTENT */}
      {/* pt-0 because Navbar is sticky/fixed and handles its own spacing */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} IHateCollege.com — No brochure fluff. Just reality.</p>
        </div>
      </footer>
    </div>
  );
}
