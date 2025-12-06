// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">

        {/* LOGO */}
        <Link href="/" className="site-logo">
          <span className="logo-main">IHATECOLLEGE</span>
          <span className="logo-tag">.COM</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="site-nav">
          <Link href="/">Home</Link>
          <Link href="/Alternatives">Alternatives</Link>
          <Link href="/debt-calculator">Debt Calculator</Link>
          <Link href="/cheat-sheets">Cheat Sheets</Link>
          <Link href="/rank-your-school">Rank Your School</Link>
          <Link href="/liberal-vs-conservative">Liberal vs Conservative</Link>
          <Link href="/trade-schools">Trade Schools</Link>
          <Link href="/civil-service">Civil Service</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
