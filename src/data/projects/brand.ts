import type { DocsConfig } from '@adarsh_goswami/brand'

export const brandProject: DocsConfig = {
  meta: {
    title: '@adarsh_goswami/brand',
    description: 'Single source of truth for personal brand — pre-themed Radix UI components, CSS tokens, and Tailwind preset.',
    version: 'v0.1.3-dev',
  },
  navigation: [
    {
      id: 'overview',
      label: 'Overview',
      items: [
        { id: 'about', label: 'About this project', slug: 'about', status: 'final' },
        { id: 'links', label: 'Links & resources', slug: 'links', status: 'final' },
      ],
    },
    {
      id: 'documents',
      label: 'Documents',
      items: [
        { id: 'prd', label: 'PRD', slug: 'prd', status: 'final' },
        { id: 'adr-001', label: 'ADR-001: Package structure', slug: 'adr-001', status: 'final' },
        { id: 'adr-003', label: 'ADR-003: Component strategy', slug: 'adr-003', status: 'final' },
        { id: 'adr-007', label: 'ADR-007: React as peer dep', slug: 'adr-007', status: 'final' },
      ],
    },
    {
      id: 'usage',
      label: 'Usage',
      items: [
        { id: 'installation', label: 'Installation', slug: 'installation', status: 'final' },
        { id: 'theming', label: 'Theming', slug: 'theming', status: 'final' },
        {
          id: 'components',
          label: 'Components',
          slug: 'components',
          status: 'final',
          children: [
            { id: 'docs-layout', label: 'DocsLayout', slug: 'docs-layout', status: 'final' },
          ],
        },
      ],
    },
  ],
  pages: {
    about: {
      title: 'About this project',
      type: 'guide',
      lastUpdated: 'April 2026',
      content: `
## What is @adarsh_goswami/brand?

\`@adarsh_goswami/brand\` is the **single source of truth** for Adarsh Goswami's personal brand. It ships pre-themed Radix UI components with the AG brand applied — consuming apps install it, import components, and get fully branded UI out of the box.

> **North star:** consuming apps assemble UIs, this package makes all design decisions.

## What this package ships

- **Pre-themed Radix UI components** — curated subset, branded and ready to use
- **\`dist/theme.css\`** — all design tokens as CSS custom properties under \`:root\`
- **\`dist/tailwind.config.css\`** — Tailwind v4 \`@theme\` block exposing brand tokens as utilities
- **\`dist/assets/logo.svg\`** — full wordmark

## Design principles

1. **Dark-first** — all tokens and components are designed for dark backgrounds
2. **Radix-based** — we theme Radix primitives, we don't reinvent them
3. **Token-driven** — every color, spacing, and font value is a CSS custom property
      `,
    },
    links: {
      title: 'Links & resources',
      type: 'reference',
      lastUpdated: 'April 2026',
      content: `
## Links

| Resource | URL |
|---|---|
| **npm** | [https://www.npmjs.com/package/@adarsh_goswami/brand](https://www.npmjs.com/package/@adarsh_goswami/brand) |
| **GitHub** | [github.com/adarsh-goswamii/UI-library](https://github.com/adarsh-goswamii/UI-library) |
| **Portfolio** | [Theme page — see the design system live](/theme) |

## Tech stack

- **Build:** tsup
- **Components:** Radix UI Themes
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Types:** TypeScript
- **Markdown:** react-markdown + remark-gfm + rehype-highlight
      `,
    },
    prd: {
      title: 'PRD — @adarsh_goswami/brand',
      type: 'prd',
      lastUpdated: 'April 2026',
      content: `
## Status

**In Progress**

## Problem

Every new project starts with the same decisions — colors, fonts, spacing, component styles. Without a shared package, these drift across projects, and maintaining visual consistency becomes a manual, error-prone process.

## Solution

A single npm package that owns all brand decisions. Consuming projects install it and get:

1. CSS tokens (\`:root\` custom properties)
2. Tailwind v4 theme configuration
3. Pre-themed Radix UI components
4. Brand assets (logo, mark)

## Goals

- **One install, full brand** — no manual token copying
- **Radix-based components** — accessible, unstyled primitives with AG theme applied
- **Dark-first** — designed for dark backgrounds, no light mode in v1
- **Dogfooded** — the portfolio website is the first real consumer

## Non-goals (v1)

- Light mode
- Component playground / Storybook
- CSS-in-JS runtime
- Framework-specific adapters (Next.js, Remix, etc.)
      `,
    },
    'adr-001': {
      title: 'ADR-001: Package structure',
      type: 'adr',
      lastUpdated: 'March 2026',
      content: `
## Status

**Accepted**

## Context

We need to decide whether to house the brand package in a monorepo alongside consuming projects, or as a standalone package with its own git history.

## Decision

Standalone npm package in its own repository.

## Consequences

- **Good:** Clean, independent git history per project
- **Good:** No tooling overhead (no Turborepo, no workspace symlinks to manage)
- **Good:** Clear package boundary — consuming apps treat it like any other npm dep
- **Bad:** No cross-project atomic commits (acceptable for a solo developer)
- **Neutral:** Local development uses \`npm link\` — slightly more friction than a workspace
      `,
    },
    'adr-003': {
      title: 'ADR-003: Component strategy',
      type: 'adr',
      lastUpdated: 'March 2026',
      content: `
## Status

**Accepted**

## Context

Should we build custom React components from scratch, or theme an existing component library?

## Decision

Pre-themed Radix UI components. We wrap Radix primitives with AG brand styles applied via Tailwind classes and CSS tokens.

## Rationale

- Owning accessibility and interaction for every component is an ongoing maintenance burden
- Radix is unstyled by design — it handles only behaviour and a11y, the brand theme applies cleanly
- We get keyboard navigation, ARIA roles, focus management for free

## Constraints

- **No custom components from scratch** — if Radix doesn't cover a pattern, use a Radix primitive directly in the consuming project
- **No other component libraries** — not MUI, Chakra, shadcn/ui
      `,
    },
    'adr-007': {
      title: 'ADR-007: React as peer dependency',
      type: 'adr',
      lastUpdated: 'March 2026',
      content: `
## Status

**Accepted**

## Context

Should React be bundled inside the package or declared as a peer dependency?

## Decision

React is a peer dependency. It must never be bundled inside \`@adarsh_goswami/brand\`.

## Rationale

Bundling React causes duplicate instances, which breaks the Rules of Hooks. When a consuming app and the package each bring their own React, hook calls from the package fail with:

> Invalid hook call. Hooks can only be called inside the body of a function component.

Declaring React as a peer dep ensures only one React instance exists at runtime — the one in the consuming app's \`node_modules\`.

## npm link note

When developing locally with \`npm link\`, Node may still resolve two React instances (one from each project's \`node_modules\`). Fix this with Vite's \`resolve.dedupe\` and \`resolve.alias\`:

\`\`\`ts
resolve: {
  dedupe: ['react', 'react-dom', '@radix-ui/themes'],
  alias: {
    react: path.resolve('./node_modules/react'),
    'react-dom': path.resolve('./node_modules/react-dom'),
  },
}
\`\`\`
      `,
    },
    installation: {
      title: 'Installation',
      type: 'guide',
      lastUpdated: 'April 2026',
      content: `
## Install via npm

\`\`\`bash
npm install @adarsh_goswami/brand
\`\`\`

## Required peer dependencies

\`\`\`bash
npm install react react-dom @radix-ui/themes tailwindcss
\`\`\`

## Setup

### 1. Import the theme CSS

\`\`\`ts
// main.tsx
import '@adarsh_goswami/brand/dist/theme.css'
\`\`\`

### 2. Configure Tailwind

\`\`\`css
/* index.css */
@import "tailwindcss";
@import "@adarsh_goswami/brand/dist/theme.css";
@import "@adarsh_goswami/brand/dist/tailwind.config.css";
\`\`\`

### 3. Wrap with Radix Theme

\`\`\`tsx
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

<Theme appearance="dark">
  <App />
</Theme>
\`\`\`
      `,
    },
    theming: {
      title: 'Theming',
      type: 'reference',
      lastUpdated: 'April 2026',
      content: `
## CSS Custom Properties

All tokens are exposed as CSS custom properties under \`:root\`.

### Color tokens

| Token | Value | Usage |
|---|---|---|
| \`--accent\` | \`#7C6EFA\` | Primary accent, CTAs |
| \`--accent-bright\` | \`#9B8FFB\` | Hover states, highlights |
| \`--accent-dim\` | \`#4A3FCC\` | Pressed states |
| \`--bg-base\` | \`#0A0A0B\` | Page background |
| \`--bg-surface\` | \`#111113\` | Card / panel backgrounds |
| \`--text-primary\` | \`#F0EEF8\` | Headings, primary text |
| \`--text-secondary\` | \`#9997AA\` | Body text, descriptions |
| \`--text-muted\` | \`#5C5A6E\` | Labels, metadata |

### Tailwind utilities

All tokens are available as Tailwind utilities:

\`\`\`html
<div class="bg-bg-surface text-text-primary border-border-subtle">
  <h1 class="font-display text-accent">Hello</h1>
</div>
\`\`\`
      `,
    },
    components: {
      title: 'Components',
      type: 'reference',
      lastUpdated: 'April 2026',
      content: `
## Component library

The brand package exports pre-themed Radix UI components. Each component wraps a Radix primitive with AG brand styles applied.

### Available components

| Component | Description | Status |
|---|---|---|
| \`DocsLayout\` | Full-page documentation layout with sidebar nav and markdown renderer | Final |

### Usage pattern

\`\`\`tsx
import { DocsLayout } from '@adarsh_goswami/brand'
import type { DocsConfig } from '@adarsh_goswami/brand'

const config: DocsConfig = { /* ... */ }

<DocsLayout
  data={config}
  activeSlug="introduction"
  onSlugChange={(slug) => setSlug(slug)}
/>
\`\`\`
      `,
    },
    'docs-layout': {
      title: 'DocsLayout',
      type: 'reference',
      lastUpdated: 'April 2026',
      content: `
## DocsLayout

A full-page documentation layout component with a sidebar nav and markdown content renderer.

\`\`\`tsx
import { DocsLayout } from '@adarsh_goswami/brand'

<DocsLayout
  data={docsConfig}
  activeSlug="introduction"
  onSlugChange={(slug) => setActiveSlug(slug)}
/>
\`\`\`

## Props

| Prop | Type | Description |
|---|---|---|
| \`data\` | \`DocsConfig\` | Full docs config — meta, navigation, pages |
| \`activeSlug\` | \`string\` | Currently visible page slug |
| \`onSlugChange\` | \`(slug: string) => void\` | Called when user clicks a nav item |

## DocsConfig shape

\`\`\`ts
interface DocsConfig {
  meta: {
    title: string
    description?: string
    version?: string
    logoUrl?: string
  }
  navigation: NavSection[]
  pages: Record<string, DocsPage>
}
\`\`\`
      `,
    },
  },
}
