import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import type { About, Experience, Skill, SocialLink, ProjectCard } from '../types/api'

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
function Hero({ about }: { about: About | null }) {
  const stats = about
    ? [
        { n: `${about.years_exp}+`,      label: 'Years building'   },
        { n: `${about.projects_count}+`, label: 'Projects shipped'  },
        { n: `${about.oss_packages}+`,   label: 'Open source pkgs'  },
      ]
    : [
        { n: '—', label: 'Years building'   },
        { n: '—', label: 'Projects shipped'  },
        { n: '—', label: 'Open source pkgs'  },
      ]

  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Dot grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Orb 1 */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: '-80px', left: '-120px',
          width: '700px', height: '500px',
          background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />
      {/* Orb 2 */}
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
        <span
          className="w-2 h-2 rounded-full availability-dot"
          style={{ backgroundColor: about?.is_available ? 'var(--success)' : 'var(--text-muted)' }}
        />
        {about?.is_available ? 'Available for new projects' : 'Not currently available'}
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
        {about?.tagline ?? 'I build tools, systems, and brands. Clean code, thoughtful design, shipped fast.'}
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
        {stats.map(({ n, label }) => (
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
function About({ about }: { about: About | null }) {
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
            {about?.avatar_url
              ? <img src={about.avatar_url} alt={about.name} className="relative z-10 w-full h-full object-cover" />
              : <span className="font-display text-5xl font-extrabold text-accent relative z-10">AG</span>
            }
          </div>
        </div>

        <div className="max-w-[520px]">
          {about
            ? about.bio_paragraphs.map((p, i) => (
                <p key={i} className="text-base text-text-secondary leading-loose mb-4">{p}</p>
              ))
            : null
          }
        </div>
      </div>
    </Section>
  )
}

/* ── Projects ── */
function Projects({ projects }: { projects: ProjectCard[] }) {
  if (projects.length === 0) return null

  return (
    <Section id="projects" label="02 — Work" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group relative bg-bg-surface border border-border-subtle rounded-xl p-6 no-underline transition-all duration-base hover:border-border-mid hover:-translate-y-1 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top left, var(--accent-glow) 0%, transparent 60%)' }}
            />

            <span className="absolute top-5 right-5 font-mono text-[10px] text-text-disabled">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="relative">
              <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4 text-base border bg-[var(--accent-subtle)] border-[var(--accent-glow)]">
                {p.icon_url ?? '📁'}
              </div>
              <p className="font-display text-md font-semibold text-text-primary mb-2">{p.name}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{p.short_description}</p>
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
function ExperienceSection({ experience }: { experience: Experience[] }) {
  if (experience.length === 0) return null

  return (
    <Section id="experience" label="03 — Career" title="Experience">
      <div className="flex flex-col gap-0">
        {experience.map((job, i) => {
          const period = job.end_year
            ? `${job.start_year} — ${job.end_year}`
            : `${job.start_year} — Present`

          return (
            <div key={job.id} className="relative pl-8 pb-10 last:pb-0 group">
              {i < experience.length - 1 && (
                <div
                  className="absolute left-[7px] top-[10px] bottom-0 w-px"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(to bottom, var(--accent), var(--border-soft) 50%, transparent)'
                      : 'var(--border-soft)',
                  }}
                />
              )}

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
                <span className="font-mono text-xs text-text-muted shrink-0">{period}</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3 max-w-[560px]">{job.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {job.tech_tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] bg-bg-overlay border border-border-subtle rounded-sm px-2 py-0.5 text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

/* ── Skills ── */
function Skills({ skills }: { skills: Skill[] }) {
  const names = skills.map(s => s.name)
  const mid = Math.ceil(names.length / 2)
  const row1 = names.slice(0, mid)
  const row2 = names.slice(mid)

  if (names.length === 0) return null

  return (
    <Section id="skills" label="04 — Stack" title="Skills">
      <div className="relative overflow-hidden">
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

        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }}
        />
      </div>
    </Section>
  )
}

/* ── Contact ── */
const PLATFORM_ICONS: Record<SocialLink['platform'], React.ReactNode> = {
  GITHUB: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
  ),
  LINKEDIN: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  ),
  TWITTER: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  EMAIL: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  LEETCODE: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
  ),
  WEBSITE: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  YOUTUBE: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  OTHER: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  ),
}

function Contact({ socialLinks }: { socialLinks: SocialLink[] }) {
  if (socialLinks.length === 0) return null

  return (
    <Section id="contact" label="05 — Connect" title="Get in Touch">
      <p className="text-text-secondary max-w-md leading-loose mb-8">
        I'm always open to interesting projects and conversations. Drop me a line anywhere below.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[480px]">
        {socialLinks.map((l) => (
          <a
            key={l.id}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-bg-surface border border-border-subtle rounded-xl p-5 flex flex-col items-center gap-3 no-underline text-text-muted transition-all duration-fast hover:text-accent hover:border-border-mid hover:-translate-y-0.5 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-base pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)' }}
            />
            <div className="relative">{PLATFORM_ICONS[l.platform]}</div>
            <span className="relative text-xs text-text-secondary group-hover:text-accent transition-colors duration-fast">{l.label}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}

/* ── Page ── */
export default function HomePage() {
  const [about, setAbout] = useState<About | null>(null)
  const [experience, setExperience] = useState<Experience[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])
  const [projects, setProjects] = useState<ProjectCard[]>([])

  useEffect(() => {
    Promise.all([
      api.about(),
      api.experience(),
      api.skills(),
      api.socialLinks(),
      api.projects(),
    ]).then(([a, exp, sk, sl, proj]) => {
      setAbout(a)
      setExperience(exp)
      setSkills(sk)
      setSocialLinks(sl)
      setProjects(proj)
    }).catch(console.error)
  }, [])

  return (
    <div className="max-w-[1100px] mx-auto px-6">
      <Hero about={about} />
      <About about={about} />
      <Projects projects={projects} />
      <ExperienceSection experience={experience} />
      <Skills skills={skills} />
      <Contact socialLinks={socialLinks} />
    </div>
  )
}
