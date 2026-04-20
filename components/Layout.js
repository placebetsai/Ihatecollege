import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BreakingTicker from "./BreakingTicker";

import AffiliateDisclosure from "./AffiliateDisclosure";
import RecommendedResources from "./RecommendedResources";
import CareerStyleCta from "./CareerStyleCta";
import MoneyPathsHub from "./MoneyPathsHub";

export default function Layout({ children }) {
  const router = useRouter();
  const isBlogPost = router.pathname.startsWith("/blog/");

  return (
    <div className="min-h-screen text-white flex flex-col font-sans" style={{ background: "#0a0a0a", overflowX: "hidden", maxWidth: "100vw" }}>
      <div className="sticky top-0 z-50">
        <Navbar />
        <BreakingTicker />
      </div>
      <main className="flex-grow">
        {isBlogPost && <AffiliateDisclosure />}
        {children}
        {isBlogPost && (
          <div className="max-w-3xl mx-auto px-4">
            <RecommendedResources />
            <MoneyPathsHub
              title="Where To Go Next"
              subtitle="Readers who finish an article usually want one of four things: a better path, a real salary comparison, a no-degree job lead, or a way to avoid debt."
            />
            <CareerStyleCta />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
