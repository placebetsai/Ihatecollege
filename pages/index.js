import Head from "next/head";
import Hero from "../components/Hero";
import CampusVibes from "../components/CampusVibes";
import Alternatives from "../components/Alternatives";
import CheatSheets from "../components/CheatSheets";
import RankCollege from "../components/RankCollege";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>I Hate College – Brutally Honest College Reality</title>
        <meta
          name="description"
          content="ihatecollege.com – real talk on college cost, campus vibes, trades, bootcamps, certs, and AI hustles so you don’t get buried in debt and burnout."
        />
      </Head>

      <div className="page-root">
        <header className="site-header">
          <div className="logo">
            <div className="logo-icon">IH</div>
            <div className="logo-text">
              ihatecollege<span>.com</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#vibes">Campus vibes</a>
            <a href="#alt">Alternatives</a>
            <a href="#cheats">Cheat sheets</a>
            <a href="#rank">Rank your school</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="main">
          <Hero />
          <CampusVibes />
          <Alternatives />
          <CheatSheets />
          <RankCollege />
          <ContactSection />
        </main>

        <footer className="site-footer">
          © {new Date().getFullYear()} ihatecollege.com – Student opinions only.
          Not affiliated with any college. Nothing here is financial, legal, or academic advising.
        </footer>
      </div>
    </>
  );
            }
