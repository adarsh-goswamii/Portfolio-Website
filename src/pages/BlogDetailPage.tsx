import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogPost } from '@adarsh_goswami/design'
import { api } from '../lib/api'
import type { BlogPostDetail } from '../types/api'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostDetail | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) return
    api.blog(slug)
      .then(setPost)
      .catch(() => setError(true))
  }, [slug])

  if (error) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="font-display text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Post not found
        </p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-24 text-center">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Loading...</p>
      </div>
    )
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <BlogPost content={post.content} />
    </div>
  )
}
