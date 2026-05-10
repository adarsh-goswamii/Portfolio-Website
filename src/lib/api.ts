import type { About, BlogPost, BlogPostDetail, Experience, Skill, SocialLink, ProjectCard, ProjectDetail } from '../types/api'

const BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`)
  if (!res.ok) throw new Error(`${path} → ${res.status}`)
  return res.json() as Promise<T>
}

export const api = {
  about:       () => get<About>('/api/about'),
  experience:  () => get<Experience[]>('/api/experience'),
  skills:      () => get<Skill[]>('/api/skills'),
  socialLinks: () => get<SocialLink[]>('/api/social-links'),
  projects:    () => get<ProjectCard[]>('/api/projects'),
  project:     (slug: string) => get<ProjectDetail>(`/api/projects/${slug}`),
  blogs:       () => get<BlogPost[]>('/api/blogs'),
  blog:        (slug: string) => get<BlogPostDetail>(`/api/blogs/${slug}`),
}
