import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

/* ── Section wrapper ── */
function Section({ id, label, title, children }: {
  id: string
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="py-24 border-t border-border-subtle first:border-t-0">
      <div className="flex items-center gap-3 mb-3">
        <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-accent shrink-0">{label}</p>
        <div className="h-px w-20" style={{ background: 'linear-gradient(to right, var(--accent-glow), transparent)' }} />
      </div>
      <h2 className="font-display text-2xl font-bold text-text-primary mb-10">{title}</h2>
      {children}
    </section>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Dot grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Orb 1 — main accent */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-80px', left: '-120px',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />
      {/* Orb 2 — cool violet, right side — uses --accent-subtle (8% accent, brand token) */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '60px', right: '-80px',
          width: '420px', height: '420px',
          background: 'radial-gradient(ellipse, var(--accent-subtle) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border-soft bg-bg-surface/80 backdrop-blur-sm text-xs font-mono text-text-muted">
        <span className="w-2 h-2 rounded-full availability-dot" style={{ backgroundColor: 'var(--success)' }} />
        Available for new projects
      </div>

      <h1
        className="font-display font-extrabold leading-none tracking-tighter mb-6"
        style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
      >
        <span className="text-text-primary">Adarsh</span>
        <br />
        <span className="gradient-text">Goswami.</span>
      </h1>

      <p className="text-md text-text-secondary font-light max-w-[440px] leading-loose mb-10">
        I build tools, systems, and brands. Clean code, thoughtful design, shipped fast.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4 mb-14">
        <a
          href="#projects"
          className="inline-flex items-center px-5 py-2.5 text-sm font-body font-medium bg-accent text-accent-contrast rounded-md no-underline transition-colors duration-fast hover:bg-accent-bright shadow-accent"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-body font-medium bg-bg-raised border border-border-soft text-text-secondary rounded-md no-underline transition-colors duration-fast hover:text-text-primary hover:border-border-mid"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 2v7M4 6.5 7 9.5l3-3M2.5 12h9" />
          </svg>
          Download Resume
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-10 border-t border-border-subtle pt-8">
        {[
          { n: '3+',  label: 'Years building'   },
          { n: '10+', label: 'Projects shipped'  },
          { n: '5+',  label: 'Open source pkgs'  },
        ].map(({ n, label }) => (
          <div key={label}>
            <p className="font-display text-xl font-bold text-text-primary">{n}</p>
            <p className="font-mono text-[11px] text-text-muted mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── About ── */
function About() {
  return (
    <Section id="about" label="01 — About" title="About Me">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Glowing avatar */}
        <div className="relative shrink-0">
          <div
            className="absolute -inset-4 rounded-2xl opacity-70 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <div className="relative w-40 h-40 rounded-2xl bg-bg-surface border border-border-subtle flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, var(--accent-glow) 0%, transparent 55%)' }}
            />
            <span className="font-display text-5xl font-extrabold text-accent relative z-10">AG</span>
          </div>
        </div>

        <div className="max-w-[520px]">
          <p className="text-base text-text-secondary leading-loose mb-4">
            Hey, I'm Adarsh. I'm a full-stack engineer who cares about building things that are clean, performant, and designed with care.
          </p>
          <p className="text-base text-text-secondary leading-loose mb-4">
            Currently focused on building personal infrastructure — reusable packages and services that power all my projects. The brand package behind this site is one of them.
          </p>
          <p className="text-base text-text-secondary leading-loose">
            I believe in depth over breadth. Every project on this site has its own documentation — PRDs, architecture decisions, usage guides — because good work deserves to be understood, not just seen.
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ── Projects ── */
function Projects() {
  return (
    <Section id="projects" label="02 — Work" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group relative bg-bg-surface border border-border-subtle rounded-xl p-6 no-underline transition-all duration-base hover:border-border-mid hover:-translate-y-1 overflow-hidden"
          >
            {/* Inner glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top left, var(--accent-glow) 0%, transparent 60%)' }}
            />

            {/* Card number */}
            <span className="absolute top-5 right-5 font-mono text-[10px] text-text-disabled">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="relative">
              <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4 text-base border bg-[var(--accent-subtle)] border-[var(--accent-glow)]">
                {p.icon}
              </div>
              <p className="font-display text-md font-semibold text-text-primary mb-2">
                {p.docs.meta.title}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {p.docs.meta.description}
              </p>
              <span className="text-xs text-accent font-medium group-hover:text-accent-bright transition-colors duration-fast">
                View docs &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

/* ── Experience ── */
function Experience() {
  const jobs = [
    {
      role: 'Full-Stack Engineer',
      company: 'Freelance / Independent',
      period: '2025 — Present',
      description: 'Building personal infrastructure — reusable packages, services, and tools that power multiple projects. Shipping @adarsh_goswami/brand, this portfolio, and client work.',
      stack: ['TypeScript', 'React', 'Node.js', 'Tailwind', 'Radix UI'],
    },
    {
      role: 'Software Engineer',
      company: 'Company Name',
      period: '2023 — 2025',
      description: 'Worked on core product features, internal tooling, and API integrations. Led migration from legacy REST endpoints to a typed GraphQL layer.',
      stack: ['TypeScript', 'React', 'Go', 'PostgreSQL', 'Docker'],
    },
    {
      role: 'Junior Developer',
      company: 'Company Name',
      period: '2022 — 2023',
      description: 'Built and maintained customer-facing dashboards. Contributed to the design system and component library used across the product.',
      stack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    },
  ]

  return (
    <Section id="experience" label="03 — Career" title="Experience">
      <div className="flex flex-col gap-0">
        {jobs.map((job, i) => (
          <div key={i} className="relative pl-8 pb-10 last:pb-0 group">
            {/* Timeline line — gradient on first, subtle on rest */}
            {i < jobs.length - 1 && (
              <div
                className="absolute left-[7px] top-[10px] bottom-0 w-px"
                style={{
                  background: i === 0
                    ? 'linear-gradient(to bottom, var(--accent), var(--border-soft) 50%, transparent)'
                    : 'var(--border-soft)',
                }}
              />
            )}

            {/* Timeline dot */}
            <div
              className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2"
              style={i === 0 ? {
                borderColor: 'var(--accent)',
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 12px var(--accent)',
              } : {
                borderColor: 'var(--border-soft)',
                backgroundColor: 'var(--bg-base)',
              }}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <div>
                <p className="font-display text-md font-semibold text-text-primary">{job.role}</p>
                <p className="text-sm text-accent">{job.company}</p>
              </div>
              <span className="font-mono text-xs text-text-muted shrink-0">{job.period}</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-3 max-w-[560px]">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {job.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] bg-bg-overlay border border-border-subtle rounded-sm px-2 py-0.5 text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ── Skills ── */
function Skills() {
  const row1 = ['TypeScript', 'JavaScript', 'React', 'Node.js', 'Go', 'Python', 'Tailwind CSS', 'Radix UI', 'PostgreSQL', 'Redis']
  const row2 = ['Docker', 'Git', 'Vite', 'Next.js', 'Express', 'REST APIs', 'GraphQL', 'CI/CD', 'Linux', 'Figma']

  return (
    <Section id="skills" label="04 — Stack" title="Skills">
      <div className="relative overflow-hidden">
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-3">
          <div className="marquee-left gap-3">
            {[...row1, ...row1].map((s, i) => (
              <span
                key={i}
                className="font-mono text-xs bg-bg-overlay border border-border-subtle rounded px-3 py-1.5 text-text-secondary whitespace-nowrap mr-3"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="marquee-right gap-3">
            {[...row2, ...row2].map((s, i) => (
              <span
                key={i}
                className="font-mono text-xs bg-bg-raised border border-border-soft rounded px-3 py-1.5 text-text-muted whitespace-nowrap mr-3"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Edge fade — left */}
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }}
        />
        {/* Edge fade — right */}
        <div
          className="absolute inset-y-0 right-0 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }}
        />
      </div>
    </Section>
  )
}

/* ── Contact ── */
function Contact() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/adarsh-goswamii', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
    )},
    { label: 'LinkedIn', href: 'https://linkedin.com/in/adarshgoswami', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    )},
    { label: 'Twitter / X', href: 'https://x.com/adarshgoswami', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )},
    { label: 'Email', href: 'mailto:hello@adarshgoswami.dev', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    )},
  ]

  return (
    <Section id="contact" label="05 — Connect" title="Get in Touch">
      <p className="text-text-secondary max-w-md leading-loose mb-8">
        I'm always open to interesting projects and conversations. Drop me a line anywhere below.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[480px]">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-bg-surface border border-border-subtle rounded-xl p-5 flex flex-col items-center gap-3 no-underline text-text-muted transition-all duration-fast hover:text-accent hover:border-border-mid hover:-translate-y-0.5 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)' }}
            />
            <div className="relative">{l.icon}</div>
            <span className="relative text-xs text-text-secondary group-hover:text-accent transition-colors duration-fast">{l.label}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}

/* ── Page ── */
export default function HomePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}
