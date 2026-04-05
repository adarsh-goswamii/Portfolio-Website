export default function ThemePage() {
  return (
    <div
      className="bg-bg-base text-text-primary font-body text-base leading-relaxed"
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      <div className="max-w-[1100px] mx-auto px-8 py-16">

        {/* ── HERO ── */}
        <div className="relative overflow-hidden pb-16 pt-20">
          <div
            className="pointer-events-none absolute"
            style={{
              top: '-80px', left: '-120px',
              width: '600px', height: '400px',
              background: 'radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)',
            }}
          />
          <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-6 flex items-center gap-3 before:content-[''] before:w-6 before:h-px before:bg-border-mid">
            Design System v1.0
          </p>
          <h1 className="font-display font-extrabold leading-none tracking-tighter mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
            <span className="text-text-primary">Adarsh<br /></span>
            <span className="text-accent">Goswami</span>
          </h1>
          <p className="text-md text-text-secondary font-light max-w-[420px] leading-loose">
            A minimal, dark-first design system for web apps, mobile, developer tools, and APIs.
          </p>
          <div className="mt-10 flex items-center gap-6 font-mono text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Dark-first
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Syne + DM Sans
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              8px grid
            </span>
          </div>
        </div>

        {/* ── 01 LOGO & MARK ── */}
        <Section label="01 — Identity" title="Logo & Mark" desc="The AG monogram is built from geometric forms — two interlocked letterforms on a contained grid.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Primary Dark */}
            <div className="bg-bg-surface border border-border-subtle rounded-xl flex flex-col items-center justify-center gap-4 p-6 min-h-[160px]">
              <svg viewBox="0 0 64 64" width="72" height="72" fill="none">
                <rect width="64" height="64" rx="14" className="fill-bg-surface" />
                <path d="M14 46 L24 20 L34 46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
                <line x1="18" y1="37" x2="30" y2="37" strokeWidth="2.5" strokeLinecap="round" className="stroke-accent" />
                <path d="M38 28 C38 23 42 20 47 20 C52 20 55 23 55 28 L55 32 L49 32 L49 29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
                <path d="M38 28 C38 33 38 38 38 40 C38 43.5 42 46 47 46 C52 46 55 43.5 55 40 L55 32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
              </svg>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Primary — Dark</span>
            </div>

            {/* Glow Variant */}
            <div className="rounded-xl flex flex-col items-center justify-center gap-4 p-6 min-h-[160px] border border-[var(--accent-glow)]" style={{ background: '#0D0C1A' }}>
              <svg viewBox="0 0 64 64" width="72" height="72" fill="none">
                <defs>
                  <radialGradient id="grad1" cx="30%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#1A1630" />
                    <stop offset="100%" stopColor="#0D0C1A" />
                  </radialGradient>
                </defs>
                <rect width="64" height="64" rx="14" fill="url(#grad1)" />
                <path d="M14 46 L24 20 L34 46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent-bright" />
                <line x1="18" y1="37" x2="30" y2="37" strokeWidth="2.5" strokeLinecap="round" className="stroke-accent-bright" />
                <path d="M38 28 C38 23 42 20 47 20 C52 20 55 23 55 28 L55 32 L49 32 L49 29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
                <path d="M38 28 C38 33 38 38 38 40 C38 43.5 42 46 47 46 C52 46 55 43.5 55 40 L55 32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
              </svg>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Glow Variant</span>
            </div>

            {/* Light Variant */}
            <div className="rounded-xl flex flex-col items-center justify-center gap-4 p-6 min-h-[160px] border" style={{ background: '#E8E6F0', borderColor: '#D0CDE0' }}>
              <svg viewBox="0 0 64 64" width="72" height="72" fill="none">
                <rect width="64" height="64" rx="14" className="fill-text-primary" />
                <path d="M14 46 L24 20 L34 46" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent-dim" />
                <line x1="18" y1="37" x2="30" y2="37" strokeWidth="2.5" strokeLinecap="round" className="stroke-accent-dim" />
                <path d="M38 28 C38 23 42 20 47 20 C52 20 55 23 55 28 L55 32 L49 32 L49 29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-bg-base" />
                <path d="M38 28 C38 33 38 38 38 40 C38 43.5 42 46 47 46 C52 46 55 43.5 55 40 L55 32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-bg-base" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Light Variant</span>
            </div>

            {/* Wordmark */}
            <div className="bg-bg-surface border border-border-subtle rounded-xl flex flex-col items-center justify-center gap-4 p-6 min-h-[160px]">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 36 36" width="36" height="36" fill="none">
                  <rect width="36" height="36" rx="8" className="fill-bg-raised" />
                  <path d="M6 26 L13 10 L20 26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
                  <line x1="9" y1="20.5" x2="17" y2="20.5" strokeWidth="2" strokeLinecap="round" className="stroke-accent" />
                  <path d="M23 16.5 C23 13.5 25.5 12 28 12 C30.5 12 32 13.5 32 16.5 L32 18.5 L28.5 18.5 L28.5 16.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
                  <path d="M23 16.5 C23 19 23 21.5 23 23 C23 25 25.5 26 28 26 C30.5 26 32 25 32 23 L32 18.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
                </svg>
                <span className="font-display font-bold text-lg text-text-primary tracking-tight">
                  Adarsh<span className="text-accent">.</span>
                </span>
              </div>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Wordmark</span>
            </div>
          </div>
        </Section>

        {/* ── 02 COLOR SYSTEM ── */}
        <Section label="02 — Color" title="Color System" desc="Dark-first palette anchored by a violet-indigo accent. All colors meet WCAG AA contrast on dark backgrounds.">
          <ColorGroup title="Accent" swatches={[
            { bg: '#9B8FFB', name: 'Bright', hex: '#9B8FFB' },
            { bg: '#7C6EFA', name: 'Base', hex: '#7C6EFA' },
            { bg: '#4A3FCC', name: 'Dim', hex: '#4A3FCC' },
            { bg: 'rgba(124,110,250,0.15)', name: 'Glow', hex: '15% opacity', border: 'rgba(124,110,250,0.3)' },
          ]} />
          <ColorGroup title="Background" swatches={[
            { bg: '#0A0A0B', name: 'Base', hex: '#0A0A0B', border: '#1E1E24' },
            { bg: '#111113', name: 'Surface', hex: '#111113' },
            { bg: '#18181C', name: 'Raised', hex: '#18181C' },
            { bg: '#1F1F25', name: 'Overlay', hex: '#1F1F25' },
          ]} />
          <ColorGroup title="Text" swatches={[
            { bg: '#F0EEF8', name: 'Primary', hex: '#F0EEF8' },
            { bg: '#9997AA', name: 'Secondary', hex: '#9997AA' },
            { bg: '#5C5A6E', name: 'Muted', hex: '#5C5A6E' },
            { bg: '#3A3848', name: 'Disabled', hex: '#3A3848' },
          ]} />
          <ColorGroup title="Semantic" swatches={[
            { bg: '#3DD68C', name: 'Success', hex: '#3DD68C' },
            { bg: '#F5A623', name: 'Warning', hex: '#F5A623' },
            { bg: '#F2546A', name: 'Error', hex: '#F2546A' },
            { bg: '#4AA8FF', name: 'Info', hex: '#4AA8FF' },
          ]} />
        </Section>

        {/* ── 03 TYPE SYSTEM ── */}
        <Section label="03 — Typography" title="Type System" desc="Syne for display and headings. DM Sans for body. DM Mono for code, labels, and data.">
          <div className="border border-border-subtle rounded-xl overflow-hidden">
            <TypeRow size="80px / 5xl" name="display">
              <span className="font-display font-extrabold leading-none tracking-tighter text-text-primary" style={{ fontSize: '5rem' }}>Adarsh.</span>
            </TypeRow>
            <TypeRow size="44px / 3xl" name="h1">
              <span className="font-display font-bold tracking-tight" style={{ fontSize: '2.75rem' }}>Build fast, ship clean.</span>
            </TypeRow>
            <TypeRow size="32px / 2xl" name="h2">
              <span className="font-display font-bold" style={{ fontSize: '2rem' }}>Personal infrastructure.</span>
            </TypeRow>
            <TypeRow size="24px / xl" name="h3">
              <span className="font-display font-semibold" style={{ fontSize: '1.5rem' }}>Reusable services, zero rework.</span>
            </TypeRow>
            <TypeRow size="20px / lg" name="h4">
              <span className="font-display font-semibold text-text-secondary" style={{ fontSize: '1.25rem' }}>Authentication · Payments · Notifications</span>
            </TypeRow>
            <TypeRow size="15px / base" name="body">
              <span className="text-text-secondary leading-loose max-w-[480px] block" style={{ fontSize: '0.9375rem' }}>
                A minimal design system that scales across projects. Built on an 8px grid with consistent tokens for color, spacing, and type. Designed to be copy-pasted and extended.
              </span>
            </TypeRow>
            <TypeRow size="13px / sm" name="caption">
              <span className="text-text-muted" style={{ fontSize: '0.8125rem' }}>Last updated March 2026 · Version 1.0.0</span>
            </TypeRow>
            <TypeRow size="13px / mono" name="code" last>
              <span className="font-mono text-accent-bright" style={{ fontSize: '0.8125rem' }}>
                npm install @ag/ui · const {'{'} auth {'}'} = require('@ag/auth')
              </span>
            </TypeRow>
          </div>
        </Section>

        {/* ── 04 SPACING ── */}
        <Section label="04 — Spacing" title="Spacing Scale" desc="8px base grid. All values are multiples of 4px for sub-grid alignment.">
          <div className="flex flex-col gap-3">
            {[
              { label: 'sp-1',  px: 4,  w: 4  },
              { label: 'sp-2',  px: 8,  w: 8  },
              { label: 'sp-3',  px: 12, w: 12 },
              { label: 'sp-4',  px: 16, w: 16 },
              { label: 'sp-5',  px: 20, w: 20 },
              { label: 'sp-6',  px: 24, w: 24 },
              { label: 'sp-8',  px: 32, w: 32 },
              { label: 'sp-10', px: 40, w: 40 },
              { label: 'sp-12', px: 48, w: 48 },
              { label: 'sp-16', px: 64, w: 64 },
              { label: 'sp-20', px: 80, w: 80 },
              { label: 'sp-24', px: 96, w: 96 },
            ].map(({ label, px, w }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-mono text-xs text-text-muted w-12 shrink-0">{label}</span>
                <div className="flex-1 flex items-center">
                  <div className="h-2 rounded-sm bg-accent" style={{ width: `${w}px` }} />
                </div>
                <span className="font-mono text-xs text-text-disabled w-10 text-right">{px}px</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 05 BORDER RADIUS ── */}
        <Section label="05 — Shape" title="Border Radius" desc="Consistent corner radii for a cohesive, modern feel across all components.">
          <div className="flex flex-wrap gap-4 items-end">
            {[
              { label: 'sm · 4',   r: 4,    size: 56 },
              { label: 'md · 8',   r: 8,    size: 64 },
              { label: 'lg · 12',  r: 12,   size: 72 },
              { label: 'xl · 16',  r: 16,   size: 80 },
              { label: '2xl · 24', r: 24,   size: 88 },
              { label: 'full',     r: 9999, size: 64 },
            ].map(({ label, r, size }) => (
              <div
                key={label}
                className="bg-bg-raised border border-border-soft flex flex-col items-center justify-center gap-2 p-4"
                style={{ borderRadius: `${r}px`, width: `${size}px`, height: `${size}px` }}
              >
                <span className="font-mono text-[10px] text-text-muted text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 06 COMPONENTS ── */}
        <Section label="06 — Components" title="UI Components" desc="Core interactive elements built from the token system above.">
          <div className="flex flex-col gap-10">

            {/* Buttons */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3 mt-6 first:mt-0">Buttons</p>
              <div className="flex flex-wrap gap-3 items-center">
                <BtnPrimary>Deploy service</BtnPrimary>
                <BtnSecondary>View source</BtnSecondary>
                <BtnGhost>Cancel</BtnGhost>
                <BtnDanger>Delete</BtnDanger>
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-3">
                <BtnPrimary size="sm">Small</BtnPrimary>
                <BtnPrimary>Default</BtnPrimary>
                <BtnPrimary size="lg">Large</BtnPrimary>
              </div>
            </div>

            {/* Badges */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Badges</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="default">Default</Badge>
                <Badge variant="accent">● Live</Badge>
                <Badge variant="success">● Active</Badge>
                <Badge variant="warning">● Degraded</Badge>
                <Badge variant="error">● Offline</Badge>
              </div>
            </div>

            {/* Cards */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Cards</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: '🔐', title: 'Auth Service', body: 'JWT-based auth with refresh tokens, OAuth2, and session management.' },
                  { icon: '💳', title: 'Payments',     body: 'Stripe-powered billing with webhooks, subscriptions, and invoicing.' },
                  { icon: '📨', title: 'Notifications', body: 'Email, push, and in-app notification service with templates.' },
                ].map(({ icon, title, body }) => (
                  <div
                    key={title}
                    className="bg-bg-surface border border-border-subtle rounded-xl p-6 transition-all duration-base hover:border-border-mid hover:-translate-y-0.5"
                  >
                    <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4 text-base border bg-[var(--accent-subtle)] border-[var(--accent-glow)]">
                      {icon}
                    </div>
                    <p className="font-display text-md font-semibold text-text-primary mb-2">{title}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Inputs */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Form Inputs</p>
              <div className="flex flex-col gap-4 max-w-sm">
                <Field label="Project name">
                  <input
                    type="text"
                    placeholder="my-awesome-app"
                    className="w-full bg-bg-raised border border-border-soft rounded-md px-3 py-2 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-fast"
                  />
                </Field>
                <Field label="API Key" hint="Keep this secret. Rotate from the dashboard.">
                  <input
                    type="text"
                    defaultValue="ag_live_••••••••••••3fa2"
                    className="w-full bg-bg-raised border border-border-soft rounded-md px-3 py-2 text-sm text-text-primary font-mono outline-none focus:border-accent transition-colors duration-fast"
                  />
                </Field>
                <Field label="Status" error="Only lowercase letters, numbers, and hyphens.">
                  <input
                    type="text"
                    defaultValue="invalid-slug!"
                    className="w-full bg-bg-raised border border-error rounded-md px-3 py-2 text-sm text-text-primary outline-none"
                  />
                </Field>
              </div>
            </div>

            {/* Code Block */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Code Block</p>
              <div className="bg-bg-surface border border-border-subtle rounded-lg p-5 font-mono text-sm text-text-secondary overflow-x-auto leading-loose">
                <span className="text-text-muted">// Initialize AG Auth</span>{'\n'}
                <span className="text-accent-bright">import</span>{' '}{'{ createClient }'}{' '}
                <span className="text-accent-bright">from</span>{' '}
                <span className="text-success">'@ag/auth'</span>{'\n\n'}
                <span className="text-accent-bright">const</span>{' auth = '}
                <span className="text-info">createClient</span>{'({'}{'\n'}
                {'  projectId: '}<span className="text-success">'proj_xxxxxxxx'</span>,{'\n'}
                {'  secret:    process.env.'}<span className="text-info">AG_SECRET</span>,{'\n'}
                {'  ttl:       '}<span className="text-warning">3600</span>,{'\n'}
                {'})'}{'\n\n'}
                <span className="text-accent-bright">export default</span>{' auth'}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Navigation</p>
              <div className="border border-border-subtle rounded-xl px-5 py-3 flex items-center justify-between bg-bg-base/80 backdrop-blur-[12px]">
                <div className="font-display font-bold text-md text-text-primary flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M4 18 L9 6 L14 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
                    <line x1="6" y1="14" x2="12" y2="14" strokeWidth="2" strokeLinecap="round" className="stroke-accent" />
                    <path d="M16 10C16 8 17.5 7 19 7C20.5 7 22 8 22 10L22 12L19.5 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
                    <path d="M16 10C16 12 16 14 16 15C16 16.5 17.5 17 19 17C20.5 17 22 16.5 22 15L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-text-primary" />
                  </svg>
                  Adarsh
                </div>
                <ul className="flex gap-6 list-none">
                  {['Work', 'Services', 'Blog', 'Contact'].map((item, i) => (
                    <li key={item}>
                      <a
                        href="#"
                        className={`text-sm no-underline transition-colors duration-fast ${i === 0 ? 'text-accent-bright' : 'text-text-secondary hover:text-text-primary'}`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <BtnPrimary size="sm">Hire me</BtnPrimary>
              </div>
            </div>

            {/* Tooltip */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Tooltip</p>
              <div className="relative inline-block group">
                <BtnSecondary>Hover me</BtnSecondary>
                <div
                  className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-bg-overlay border border-border-soft rounded-md px-3 py-2 text-[11px] text-text-secondary whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-fast shadow-md"
                >
                  Triggers on hover · 120ms delay
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="font-display text-sm font-semibold text-text-primary mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {['typescript', 'react', 'node.js', 'postgres', 'redis', 'docker'].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-bg-overlay border border-border-subtle rounded-sm px-2 py-0.5 text-text-muted inline-block"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Section>

        {/* ── 07 ANIMATION TOKENS ── */}
        <Section label="07 — Motion" title="Animation Tokens" desc="Subtle, purposeful motion. Never decorative — always communicates state or hierarchy.">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[600px]">
            {[
              { name: 'ease-out',      value: 'cubic-bezier(0.16, 1, 0.3, 1)', hint: 'Entrances, expansions' },
              { name: 'ease-in-out',   value: 'cubic-bezier(0.4, 0, 0.2, 1)',   hint: 'State transitions' },
              { name: 'fast · 120ms',  value: 'Hover states, focus rings',       hint: null },
              { name: 'base · 220ms',  value: 'Most interactive elements',       hint: null },
              { name: 'slow · 400ms',  value: 'Page transitions, overlays',      hint: null },
            ].map(({ name, value, hint }) => (
              <div key={name} className="bg-bg-surface border border-border-subtle rounded-md p-4">
                <p className="text-sm font-medium text-text-primary mb-1">{name}</p>
                <p className="font-mono text-[11px] text-text-muted">{value}</p>
                {hint && <p className="text-[10px] text-text-disabled mt-1">{hint}</p>}
              </div>
            ))}
          </div>
        </Section>

        {/* ── FOOTER ── */}
        <div className="pt-16 pb-8 border-t border-border-subtle flex justify-between items-center flex-wrap gap-4">
          <span className="font-display font-bold text-md text-text-primary">
            Adarsh<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-xs text-text-disabled">
            Design System v1.0 · March 2026
          </span>
        </div>

      </div>
    </div>
  )
}

// ── helpers ──────────────────────────────────────────────────────────────────

function Section({ label, title, desc, children }: {
  label: string
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-24 pt-24 border-t border-border-subtle first:border-t-0 first:pt-0">
      <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase text-accent mb-2">{label}</p>
      <h2 className="font-display text-2xl font-bold text-text-primary mb-2">{title}</h2>
      <p className="text-sm text-text-secondary mb-8 max-w-[480px]">{desc}</p>
      {children}
    </div>
  )
}

function ColorGroup({ title, swatches }: {
  title: string
  swatches: { bg: string; name: string; hex: string; border?: string }[]
}) {
  return (
    <>
      <p className="font-display text-sm font-semibold text-text-primary mt-6 mb-3 first:mt-0">{title}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {swatches.map(({ bg, name, hex, border }) => (
          <div key={name} className="bg-bg-surface border border-border-subtle rounded-lg overflow-hidden">
            <div className="h-12" style={{ background: bg, borderBottom: `1px solid ${border ?? 'transparent'}` }} />
            <div className="p-3">
              <p className="text-sm font-medium text-text-primary">{name}</p>
              <p className="font-mono text-[11px] text-text-muted mt-0.5">{hex}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function TypeRow({ size, name, children, last }: {
  size: string
  name: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div className={`flex items-start gap-6 p-6 ${last ? '' : 'border-b border-border-subtle'}`}>
      <div className="w-28 shrink-0">
        <p className="font-mono text-[11px] text-text-muted">{size}</p>
        <p className="font-mono text-[11px] text-accent mt-0.5">{name}</p>
      </div>
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}

function Field({ label, hint, error, children }: {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-text-secondary font-medium">{label}</label>
      {children}
      {hint && <span className="text-[11px] text-text-muted">{hint}</span>}
      {error && <span className="text-[11px] text-error">{error}</span>}
    </div>
  )
}

function BtnPrimary({ children, size }: { children: React.ReactNode; size?: 'sm' | 'lg' }) {
  const pad = size === 'sm' ? 'px-3 py-1.5 text-xs' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'
  return (
    <button
      className={`${pad} font-body font-medium bg-accent text-accent-contrast rounded-md cursor-pointer transition-colors duration-fast hover:bg-accent-bright shadow-accent`}
    >
      {children}
    </button>
  )
}

function BtnSecondary({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 text-sm font-body font-medium bg-bg-raised border border-border-soft text-text-secondary rounded-md cursor-pointer transition-colors duration-fast hover:text-text-primary hover:border-border-mid">
      {children}
    </button>
  )
}

function BtnGhost({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 text-sm font-body font-medium bg-transparent text-text-secondary rounded-md cursor-pointer transition-colors duration-fast hover:text-text-primary hover:bg-bg-raised">
      {children}
    </button>
  )
}

function BtnDanger({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="px-4 py-2 text-sm font-body font-medium bg-transparent rounded-md cursor-pointer transition-colors duration-fast border text-error border-error/20"
    >
      {children}
    </button>
  )
}

function Badge({ children, variant }: {
  children: React.ReactNode
  variant: 'default' | 'accent' | 'success' | 'warning' | 'error'
}) {
  const styles: Record<string, string> = {
    default: 'bg-bg-overlay border-border-subtle text-text-secondary',
    accent:  'bg-[var(--accent-subtle)] border-accent/20 text-accent-bright',
    success: 'bg-[var(--success-bg)] border-success/20 text-success',
    warning: 'bg-[var(--warning-bg)] border-warning/20 text-warning',
    error:   'bg-[var(--error-bg)] border-error/20 text-error',
  }
  return (
    <span
      className={`font-mono text-xs font-medium px-2 py-1 rounded-full inline-flex items-center border ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
