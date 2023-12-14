import { Blog } from './blog'

export interface Category {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  relation: CategoryRelation
  blogs: Blog[]
}

export interface CategoryRelation {
  fieldId: string
  isParent: boolean
  children: Category[]
  parent: Category[]
}

export interface CategoryApiResponse {
  contents: Category[]
  totalCount: number
  offset: number
  limit: number
}
