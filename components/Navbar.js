import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>IHATECOLLEGE<span>.COM</span></div>

      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/alternatives">Alternatives</Link></li>
        <li><Link href="/calculator">Debt Calculator</Link></li>
        <li><Link href="/cheatsheets">Cheat Sheets</Link></li>
        <li><Link href="/rank">Rank Your School</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
