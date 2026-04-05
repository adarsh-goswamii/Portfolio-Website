import { Link, useLocation } from 'react-router-dom'

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="sticky top-0 z-[200] border-b border-border-subtle bg-bg-base/80 backdrop-blur-[12px]">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
            <path d="M4 18 L9 6 L14 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
            <line x1="6" y1="14" x2="12" y2="14" strokeWidth="2" strokeLinecap="round" className="stroke-accent" />
            <path d="M16 10C16 8 17.5 7 19 7C20.5 7 22 8 22 10L22 12L19.5 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
            <path d="M16 10C16 12 16 14 16 15C16 16.5 17.5 17 19 17C20.5 17 22 16.5 22 15L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
          </svg>
          <span className="font-display font-bold text-md text-text-primary">
            Adarsh<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Nav links */}
        {isHome && (
          <ul className="hidden sm:flex gap-6 list-none m-0 p-0">
            {sections.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-sm text-text-secondary no-underline transition-colors duration-fast hover:text-text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isHome && (
          <Link
            to="/"
            className="text-sm text-text-secondary no-underline transition-colors duration-fast hover:text-text-primary"
          >
            &larr; Home
          </Link>
        )}

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          download
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-body font-medium bg-transparent border border-border-soft text-text-secondary rounded-md no-underline transition-colors duration-fast hover:text-text-primary hover:border-border-mid"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2v6M3.5 5.5 6 8l2.5-2.5M2 10h8" />
          </svg>
          Resume
        </a>
      </div>
    </nav>
  )
}
