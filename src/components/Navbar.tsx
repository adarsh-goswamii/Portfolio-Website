import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle, AgWordmark } from '@adarsh_goswami/design'

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
        <Link to="/" className="no-underline">
          <AgWordmark />
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

{/* Right-side group — toggle + blog + resume with breathing room */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />

          <Link
            to="/blog"
            className="hidden sm:inline-flex text-sm no-underline transition-colors duration-fast hover:text-text-primary"
            style={{ color: 'var(--text-secondary)' }}
          >
            Blog
          </Link>

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
      </div>
    </nav>
  )
}
