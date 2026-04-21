export interface About {
  id: string
  name: string
  tagline: string
  bio_paragraphs: string[]
  is_available: boolean
  years_exp: number
  projects_count: number
  oss_packages: number
  avatar_url: string | null
}

export interface Experience {
  id: string
  role: string
  company: string
  description: string
  tech_tags: string[]
  start_year: number
  end_year: number | null
  sort_order: number
}

export interface Skill {
  id: string
  name: string
  category: 'LANGUAGES' | 'FRAMEWORKS' | 'DATABASES' | 'CLOUD' | 'TOOLS' | 'OTHER'
  sort_order: number
}

export interface SocialLink {
  id: string
  platform: 'GITHUB' | 'LINKEDIN' | 'TWITTER' | 'EMAIL' | 'WEBSITE' | 'YOUTUBE' | 'LEETCODE' | 'OTHER'
  url: string
  label: string
}

export interface ProjectCard {
  id: string
  slug: string
  name: string
  short_description: string
  icon_url: string | null
  github_url: string | null
  live_url: string | null
  tags: string[]
  sort_order: number
}
