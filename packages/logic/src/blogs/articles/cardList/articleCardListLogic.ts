import {
  ArticleCardListLogicArgs,
  ArticleCardListLogicResponse,
} from './articleCardListLogic.types'

/**
 * 記事一覧リスト生成 Logic
 */
export class ArticleCardListLogic {
  private readonly blogs: ArticleCardListLogicArgs['blogs']

  constructor(private readonly args: ArticleCardListLogicArgs) {
    this.blogs = this.args.blogs
  }

  /**
   * 加工された記事一覧を取得
   */
  execute(): ArticleCardListLogicResponse {
    return this.blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      image: blog.image,
    }))
  }
}
