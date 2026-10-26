export interface Project {
  id: number
  link: string
  title: string
  description: string
  tags: string[]
}

export interface NavLink {
  label: string
  sectionId: string
}

export interface AboutFact {
  label: string
  value: string
}
export interface Skill {
  name: string
  level: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
}
