import {
  MicroCmsBlogUsecaseArgs,
  MicroCmsBlogUsecaseGetBlogsParams,
  MicroCmsBlogUsecaseGetBlogsResponse,
  MicroCmsBlogUsecaseGetBlogByIdParams,
  MicroCmsBlogUsecaseGetBlogByIdResponse,
} from './blogUsecase.types'
import { ArticleFiltersLogic } from 'logic/blogs/articles/articleFilters'

/**
 * MicroCMSブログ記事の取得クラス
 */
export class MicroCmsBlogUsecase {
  private apiKey: MicroCmsBlogUsecaseArgs['apiKey']
  private baseEndpint: MicroCmsBlogUsecaseArgs['baseEndpint']
  private blogEndpoint: MicroCmsBlogUsecaseArgs['blogEndpoint']

  constructor(private readonly args: MicroCmsBlogUsecaseArgs) {
    this.apiKey = this.args.apiKey
    this.baseEndpint = this.args.baseEndpint
    this.blogEndpoint = this.args.blogEndpoint
  }

  /**
   * ブログ記事一覧を取得
   */
  async getBlogs({
    limit,
    offset,
    maxArticleCount,
    categoryId,
    tagId,
  }: MicroCmsBlogUsecaseGetBlogsParams): Promise<MicroCmsBlogUsecaseGetBlogsResponse> {
    const checkedLimit = limit ? maxArticleCount : 9999
    const checkedOffset = offset ? offset : 0

    const filters = new ArticleFiltersLogic({
      categoryId,
      tagId,
    }).execute()

    const res = await fetch(
      `${this.args.baseEndpint}${this.blogEndpoint}?${filters}&limit=${checkedLimit}&offset=${checkedOffset}`,
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
