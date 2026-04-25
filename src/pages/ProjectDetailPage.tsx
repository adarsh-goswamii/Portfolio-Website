import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import { DocsLayout, useTheme } from '@adarsh_goswami/brand'
import type { DocsConfig } from '@adarsh_goswami/brand'
import { api } from '../lib/api'
import type { ProjectDetail } from '../types/api'

function buildDocsConfig(project: ProjectDetail): DocsConfig {
  const sectionMap = new Map<string, { id: string; label: string; items: Map<string, { id: string; label: string; slug: string; status: 'final' | 'draft'; children: { id: string; label: string; slug: string; status: 'final' | 'draft' }[] }> }>()

  for (const doc of project.documents) {
    const c = doc.content
    if (!sectionMap.has(c.nav_section_id)) {
      sectionMap.set(c.nav_section_id, { id: c.nav_section_id, label: c.nav_section_label, items: new Map() })
    }
    const section = sectionMap.get(c.nav_section_id)!
    if (!c.nav_parent_slug) {
      section.items.set(c.nav_slug, {
        id: c.nav_slug, label: c.nav_label, slug: c.nav_slug,
        status: doc.status === 'published' ? 'final' : 'draft',
        children: [],
      })
    }
  }

  // attach children
  for (const doc of project.documents) {
    const c = doc.content
    if (c.nav_parent_slug) {
      const section = sectionMap.get(c.nav_section_id)
      const parent = section?.items.get(c.nav_parent_slug)
      if (parent) {
        parent.children.push({ id: c.nav_slug, label: c.nav_label, slug: c.nav_slug, status: doc.status === 'published' ? 'final' : 'draft' })
      }
    }
  }

  const navigation = Array.from(sectionMap.values()).map(s => ({
    id: s.id, label: s.label,
    items: Array.from(s.items.values()).map(item => ({
      ...item,
      ...(item.children.length ? { children: item.children } : {}),
    })),
  }))

  const pages: DocsConfig['pages'] = {}
  for (const doc of project.documents) {
    const c = doc.content
    pages[c.nav_slug] = {
      title: doc.title,
      type: doc.type as 'guide' | 'reference' | 'prd' | 'adr',
      lastUpdated: c.last_updated,
      content: c.markdown,
    }
  }

  return {
    meta: {
      title: project.name,
      description: project.short_description,
    },
    navigation,
    pages,
  }
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { theme } = useTheme()
  const [project, setProject] = useState<ProjectDetail | null>(null)
  const [docsConfig, setDocsConfig] = useState<DocsConfig | null>(null)
  const [activeSlug, setActiveSlug] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return
    api.project(slug)
      .then(data => {
        setProject(data)
        const config = buildDocsConfig(data)
        setDocsConfig(config)
        const first = config.navigation[0]?.items[0]
        const firstSlug = first?.children?.[0]?.slug ?? first?.slug ?? ''
        setActiveSlug(firstSlug)
      })
      .catch(() => setError(true))
  }, [slug])

  if (error) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="font-display text-2xl font-bold text-text-primary mb-4">Project not found</p>
        <Link to="/" className="text-sm text-accent no-underline hover:text-accent-bright">
          &larr; Back to home
        </Link>
      </div>
    )
  }

  if (!project || !docsConfig) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="text-text-muted text-sm">Loading...</p>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: 'calc(100dvh - var(--navbar-height))' }}
    >
      <div className="shrink-0 border-b border-border-subtle bg-bg-base" style={{ height: 'var(--breadcrumb-height)' }}>
        <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-text-muted no-underline hover:text-text-secondary transition-colors duration-fast">
              Home
            </Link>
            <span className="text-text-disabled">/</span>
            <Link to="/#projects" className="text-text-muted no-underline hover:text-text-secondary transition-colors duration-fast">
              Projects
            </Link>
            <span className="text-text-disabled">/</span>
            <span className="text-text-primary font-medium">{project.name}</span>
          </div>
        </div>
      </div>

      <div className="docs-layout-wrapper">
        <div className="max-w-[1100px] mx-auto">
          <Theme appearance={theme}>
            <DocsLayout
              data={docsConfig}
              activeSlug={activeSlug}
              onSlugChange={setActiveSlug}
            />
          </Theme>
        </div>
      </div>
    </div>
  )
}
