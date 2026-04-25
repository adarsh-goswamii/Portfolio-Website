import type { DocsConfig } from '@adarsh_goswami/design'
import { brandProject } from './brand'
import { portfolioProject } from './portfolio'

export interface ProjectEntry {
  slug: string
  icon: string
  docs: DocsConfig
}

export const projects: ProjectEntry[] = [
  {
    slug: 'brand',
    icon: '📦',
    docs: brandProject,
  },
  {
    slug: 'portfolio',
    icon: '🌐',
    docs: portfolioProject,
  },
]

export function getProject(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug)
}
