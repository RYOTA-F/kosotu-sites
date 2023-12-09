import {
  MicroCmsUsecaseBlogGetBlogsParams,
  MicroCmsUsecaseBlogGetBlogsResponse,
  MicroCmsUsecaseBlogGetBlogByIdParams,
  MicroCmsUsecaseBlogGetBlogByIdResponse,
} from './blogUsecase.types'

/**
 * MicroCMSブログ記事の取得クラス
 */
export class MicroCmsUsecaseBlog {
  constructor(
    private apiKey: string,
    private baseEndpint: string,
    private blogEndpoint: string
  ) {}

  /**
   * ブログ記事一覧を取得
   */
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
  getBlogById = async ({
    id,
  }: MicroCmsUsecaseBlogGetBlogByIdParams): Promise<MicroCmsUsecaseBlogGetBlogByIdResponse> => {
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
