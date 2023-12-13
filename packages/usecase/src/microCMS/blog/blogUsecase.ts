import {
  MicroCmsBlogUsecaseGetBlogsParams,
  MicroCmsBlogUsecaseGetBlogsResponse,
  MicroCmsBlogUsecaseGetBlogByIdParams,
  MicroCmsBlogUsecaseGetBlogByIdResponse,
} from './blogUsecase.types'

/**
 * MicroCMSブログ記事の取得クラス
 */
export class MicroCmsBlogUsecase {
  constructor(
    private apiKey: string,
    private baseEndpint: string,
    private blogEndpoint: string
  ) {}

  /**
   * ブログ記事一覧を取得
   */
  async getBlogs({
    limit,
    offset,
    maxArticleCount,
    categoryId,
  }: MicroCmsBlogUsecaseGetBlogsParams): Promise<MicroCmsBlogUsecaseGetBlogsResponse> {
    const checkedLimit = limit ? maxArticleCount : 9999
    const checkedOffset = offset ? offset : 0

    const filters = categoryId
      ? `filters=categories[contains]${categoryId}`
      : ''

    const res = await fetch(
      `${this.baseEndpint}${this.blogEndpoint}?${filters}&limit=${checkedLimit}&offset=${checkedOffset}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
        },
      }
    )

    const blogs = await res.json()

    return {
      blogs: blogs.contents,
      totalCount: blogs.totalCount,
    }
  }

  /**
   * IDを指定してブログ記事を一件取得
   */
  async getBlogById({
    id,
  }: MicroCmsBlogUsecaseGetBlogByIdParams): Promise<MicroCmsBlogUsecaseGetBlogByIdResponse> {
    const res = await fetch(`${this.baseEndpint}${this.blogEndpoint}/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': this.apiKey,
      },
    })

    const blog = await res.json()

    return {
      blog,
    }
  }
}
