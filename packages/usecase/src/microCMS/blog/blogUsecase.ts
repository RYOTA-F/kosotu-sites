import {
  MicroCmsUsecaseBlogGetBlogsParams,
  MicroCmsUsecaseBlogGetBlogsResponse,
} from './blogUsecase.types'

export class MicroCmsUsecaseBlog {
  constructor(
    private apiKey: string,
    private baseEndpint: string,
    private blogEndpoint: string
  ) {}

  getBlogs = async ({
    limit,
    offset,
    maxArticleCount,
  }: MicroCmsUsecaseBlogGetBlogsParams): Promise<MicroCmsUsecaseBlogGetBlogsResponse> => {
    const checkedLimit = limit ? maxArticleCount : 9999
    const checkedOffset = offset ? offset : 0

    const res = await fetch(
      `${this.baseEndpint}${this.blogEndpoint}?limit=${checkedLimit}&offset=${checkedOffset}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey || '',
        },
      }
    )

    const blogs = await res.json()

    return {
      blogs: blogs.contents,
      totalCount: blogs.totalCount,
    }
  }
}
