import { Blog } from './blog'

export interface Tag {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  blogs: Blog[]
}

export interface TagApiResponse {
  contents: Tag[]
  totalCount: number
  offset: number
  limit: number
}
