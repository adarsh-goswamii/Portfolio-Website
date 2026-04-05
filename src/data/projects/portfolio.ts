import type { DocsConfig } from '@adarsh_goswami/brand'

export const portfolioProject: DocsConfig = {
  meta: {
    title: 'Portfolio Website',
    description: 'Personal portfolio — single-page scroll with project docs powered by DocsLayout.',
    version: 'v0.1',
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
        { id: 'adr-stack', label: 'ADR: Tech stack', slug: 'adr-stack', status: 'final' },
      ],
    },
  ],
  pages: {
    about: {
      title: 'About this project',
      type: 'guide',
      lastUpdated: 'April 2026',
      content: `
## What is this?

The personal portfolio website for Adarsh Goswami. A single-page scroll site with a dedicated project detail route per project.

Each project detail page uses the \`DocsLayout\` organism from \`@adarsh_goswami/brand\` to render structured documentation — PRDs, ADRs, usage guides — in a consistent, branded layout.

## Key decisions

- **Self-contained** — all content lives in the codebase, no external CMS
- **DocsLayout-powered** — every project gets a full docs experience
- **Brand-first** — everything flows through \`@adarsh_goswami/brand\` tokens
- **Zero-friction maintenance** — adding a project = adding a folder
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
| **GitHub** | github.com/adarsh-goswamii/portfolio-website |
| **Live** | adarshgoswami.dev |
| **Brand package** | npm: @adarsh_goswami/brand |

## Tech stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4 + @adarsh_goswami/brand tokens
- **Components:** Radix UI Themes (via brand package)
- **Routing:** React Router v7
- **Types:** TypeScript
      `,
    },
    prd: {
      title: 'PRD — Portfolio Website',
      type: 'prd',
      lastUpdated: 'April 2026',
      content: `
## Status

**In Progress**

## Problem

Most developer portfolios are static card grids with a title, screenshot, and a GitHub link. They don't communicate depth — how a project was thought through, what decisions were made, or how to actually use it.

There's also no standard place to surface project documentation. PRDs and ADRs live in Notion, disconnected from the public-facing project showcase.

## Solution

A clean public surface that links to rich, browsable project docs — powered by the same \`DocsLayout\` already built into \`@adarsh_goswami/brand\`.

## Goals

- Present work in a clean, professional, distinctly branded way
- Give each project a dedicated docs experience via \`DocsLayout\`
- Make adding a new project zero-friction — drop a file, it appears
- Dogfood \`@adarsh_goswami/brand\` as a real production consumer
- Resume download available from the hero section

## In scope — v1

- Hero, About, Projects grid, Skills, Contact sections
- Resume PDF download
- Sticky navbar with section anchor links
- \`/projects/[slug]\` route per project
- \`DocsLayout\` rendering PRD, ADR, usage docs per project
- Status badges, breadcrumb navigation

## Out of scope — v1

- Blog, dark mode toggle, scroll animations, analytics, contact form
      `,
    },
    'adr-stack': {
      title: 'ADR: Tech stack',
      type: 'adr',
      lastUpdated: 'April 2026',
      content: `
## Status

**Accepted**

## Context

Need to choose a framework for a portfolio site that consumes \`@adarsh_goswami/brand\` (a React component library with Radix UI and Tailwind).

## Decision

**React + Vite** (SPA with client-side routing via React Router).

## Rationale

- Brand package is React-only — no framework adapter needed
- No server-side data fetching required (all content is static, in-repo)
- Vite provides fast HMR and optimized builds
- React Router v7 handles \`/projects/[slug]\` routing cleanly
- Simpler deployment — static files on Vercel/Netlify

## Alternatives considered

- **Next.js App Router** — overkill for a fully static site with no API routes or SSR needs
- **Astro** — good for static sites, but adds complexity for React component interop
      `,
    },
  },
}
