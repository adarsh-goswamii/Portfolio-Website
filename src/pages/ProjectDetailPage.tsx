import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import { DocsLayout, useTheme } from '@adarsh_goswami/brand'
import { getProject } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { theme } = useTheme()
  const project = slug ? getProject(slug) : undefined
  const [activeSlug, setActiveSlug] = useState(() => {
    const firstSection = project?.docs.navigation[0]
    const firstItem = firstSection?.items[0]
    return firstItem?.slug ?? firstItem?.children?.[0]?.slug ?? ''
  })

  if (!project) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="font-display text-2xl font-bold text-text-primary mb-4">Project not found</p>
        <Link to="/" className="text-sm text-accent no-underline hover:text-accent-bright">
          &larr; Back to home
        </Link>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: 'calc(100dvh - var(--navbar-height))' }}
    >
      {/* Breadcrumb — height must match --breadcrumb-height (44px) */}
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
            <span className="text-text-primary font-medium">{project.docs.meta.title}</span>
          </div>
        </div>
      </div>

      {/* DocsLayout — constrained to same max-width as the rest of the app */}
      <div className="docs-layout-wrapper">
        <div className="max-w-[1100px] mx-auto">
          <Theme appearance={theme}>
            <DocsLayout
              data={project.docs}
              activeSlug={activeSlug}
              onSlugChange={setActiveSlug}
            />
          </Theme>
        </div>
      </div>
    </div>
  )
}
