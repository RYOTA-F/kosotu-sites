import { Blog } from 'type/microCMS'

export interface MicroCmsUsecaseBlogGetBlogsParams {
  limit: boolean
  offset: number
  maxArticleCount: number
}

export interface MicroCmsUsecaseBlogGetBlogsResponse {
  blogs: Blog[]
  totalCount: number
}

export interface MicroCmsUsecaseBlogGetBlogByIdParams {
  id: string
}

export interface MicroCmsUsecaseBlogGetBlogByIdResponse {
  blog: Blog
}
