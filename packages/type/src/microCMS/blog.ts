import { Category } from './category'
import { Tag } from './tag'

export interface Blog {
  id: string
  title: string
  description: string
  body: string
  image: BlogImage
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  categories: Category[]
  tags: Tag[]
  oldPublishedAt?: string
}

export interface BlogsApiResponse {
  contents: Blog[]
  totalCount: number
  offset: number
  limit: number
}

export interface BlogDetailApiResponse {
  contents: Blog[]
}

export interface BlogCardData {
  url: string
  title: string
  description: string
  image: string
  site: string
}

export interface TableOfContents {
  id: string
  text: string
  type: string
}

export interface IBreadCrumb {
  categoryParentId: string | null
  categoryParentName: string | null
  categoryChildId: string | null
  categoryChildName: string | null
  currentName: string | null
}

export interface ISeo {
  title: string
  description: string
  url: string
  image: string
}

export interface BlogImage {
  url: string
  height: number
  width: number
}
