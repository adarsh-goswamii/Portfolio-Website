import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../lib/api'
import type { BlogPost } from '../types/api'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    api.blogs()
      .then(data => { setPosts(data); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  if (loading) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Failed to load posts
        </p>
        <Link to="/" className="text-sm no-underline" style={{ color: 'var(--accent)' }}>
          &larr; Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-3">
        <p className="font-mono text-xs font-medium tracking-[0.12em] uppercase shrink-0" style={{ color: 'var(--accent)' }}>
          Writing
        </p>
        <div
          className="h-px w-20"
          style={{ background: 'linear-gradient(to right, var(--accent-glow), transparent)' }}
        />
      </div>
      <h1 className="font-display text-2xl font-bold mb-10" style={{ color: 'var(--text-primary)' }}>Blog</h1>

      {posts.length === 0 ? (
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>No posts yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-xl p-6 no-underline transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <p
                  className="font-display text-base font-semibold transition-colors duration-150"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {post.title}
                </p>
                <span className="font-mono text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                  {formatDate(post.date)}
                </span>
              </div>
              {post.summary && (
                <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {post.summary}
                </p>
              )}
              {(post.reading_time !== null || post.tags.length > 0) && (
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  {post.reading_time !== null && (
                    <span className="font-mono text-[11px]" style={{ color: 'var(--text-disabled)' }}>
                      {post.reading_time} min read
                    </span>
                  )}
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] rounded-sm px-2 py-0.5"
                      style={{
                        background: 'var(--bg-overlay)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
