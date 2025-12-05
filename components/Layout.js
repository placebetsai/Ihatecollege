import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/alternatives', label: 'Alternatives' },
  { href: '/debt-calculator', label: 'Debt Calculator' },
  { href: '/cheat-sheets', label: 'Cheat Sheets' },
  { href: '/rank-your-school', label: 'Rank Your School' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="site-root">
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="logo">
            <span className="logo-main">IHATECOLLEGE</span>
            <span className="logo-dot">.COM</span>
          </Link>

          <nav className="main-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'nav-link ' +
                  (router.pathname === link.href ? 'nav-link-active' : '')
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} ihatecollege.com — No brochure fluff.</p>
      </footer>
    </div>
  );
}
