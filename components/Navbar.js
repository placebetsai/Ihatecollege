// components/NavBar.js
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const links = [
  { href: '/', label: 'Home' },
  { href: '/alternatives', label: 'Alternatives' },
  { href: '/debt-calculator', label: 'Debt Calculator' },
  { href: '/rank-your-school', label: 'Rank Your School' },
  { href: '/cheat-sheets', label: 'Cheat Sheets' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label, currentPath, onClick }) {
  const isActive = href === '/'
    ? currentPath === '/'
    : currentPath.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 text-sm font-medium transition-colors
      ${isActive ? 'text-amber-300' : 'text-slate-200 hover:text-white'}`}
    >
      {label}
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <span className="rounded-full bg-gradient-to-tr from-amber-400 to-emerald-400 px-3 py-1 text-xs font-semibold text-slate-950">
            IH
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.28em] text-slate-300">
              IHATECOLLEGE.COM
            </span>
            <span className="text-[11px] text-slate-400">
              No brochure fluff. Just reality.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(link => (
            <NavLink
              key={link.href}
              {...link}
              currentPath={router.pathname}
            />
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center justify-center rounded-full border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-current"></span>
          <span className="mt-1 block h-0.5 w-5 bg-current"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map(link => (
              <NavLink
                key={link.href}
                {...link}
                currentPath={router.pathname}
                onClick={close}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
                       }
