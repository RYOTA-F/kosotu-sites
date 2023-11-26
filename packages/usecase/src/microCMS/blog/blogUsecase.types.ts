import { IBlog } from 'type/microCMS'

export interface MicroCmsUsecaseBlogGetBlogsParams {
  limit: boolean
  offset: number
  maxArticleCount: number
}

export interface MicroCmsUsecaseBlogGetBlogsResponse {
  blogs: IBlog[]
  totalCount: number
}
