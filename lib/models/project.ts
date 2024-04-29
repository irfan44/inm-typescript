export type ProjectsModel = ProjectModel[]

export interface ProjectModel {
  id?: string
  isFeatured?: boolean
  name: string
  type?: 'Work' | 'Personal'
  company?: string
  description: string
  techStack: string[]
  sourceCode?: string
  url?: string
  responsibility?: string[]
  image?: {
    url: string
  }
  overview?: string
  date?: string
  role?: string
}