// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo">
          IHATECOLLEGE<span>.COM</span>
        </Link>

        <nav className="site-nav">
          <Link href="/">Home</Link>
          <Link href="/alternatives">Alternatives</Link>
          <Link href="/debt-calculator">Debt Calculator</Link>
          <Link href="/cheat-sheets">Cheat Sheets</Link>
          <Link href="/rank-your-school">Rank Your School</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
