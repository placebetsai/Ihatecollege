import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BreakingTicker from "./BreakingTicker";

import AffiliateDisclosure from "./AffiliateDisclosure";
import RecommendedResources from "./RecommendedResources";

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
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
