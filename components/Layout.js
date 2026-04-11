import Navbar from "./Navbar";
import Footer from "./Footer";
import BreakingTicker from "./BreakingTicker";
import AdUnit from "./AdUnit";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-white flex flex-col font-sans" style={{ background: "#0a0a0a", overflowX: "hidden", maxWidth: "100vw" }}>
      <div className="sticky top-0 z-50">
        <Navbar />
        <BreakingTicker />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Sticky anchor ad — site-wide, highest RPM format */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <AdUnit slot="6600722153" format="auto" style={{ minHeight: "0" }} />
      </div>
    </div>
  );
}
