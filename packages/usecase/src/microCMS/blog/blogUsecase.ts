import { ArticleFiltersLogic } from 'logic/blogs/articles/articleFilters'
import {
  MicroCmsBlogUsecaseArgs,
  MicroCmsBlogUsecaseGetBlogsParams,
  MicroCmsBlogUsecaseGetBlogsResponse,
  MicroCmsBlogUsecaseGetBlogByIdParams,
  MicroCmsBlogUsecaseGetBlogByIdResponse,
} from './blogUsecase.types'
import { METHOD_GET, X_API_KEY, FULL_ARTICEL_COUNT } from '../const'

/**
 * MicroCMSブログ記事の取得 Usecase
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
    const checkedLimit = limit ? maxArticleCount : FULL_ARTICEL_COUNT
    const checkedOffset = offset ? offset : 0

    const filters = new ArticleFiltersLogic({
      categoryId,
      tagId,
    }).execute()

    const res = await fetch(
      `${this.args.baseEndpint}${this.blogEndpoint}?${filters}&limit=${checkedLimit}&offset=${checkedOffset}`,
      {
        method: METHOD_GET,
        headers: {
          [X_API_KEY]: this.apiKey,
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
      method: METHOD_GET,
      headers: {
        [X_API_KEY]: this.apiKey,
      },
    })

    const blog = await res.json()

    return {
      blog,
    }
  }
}
