import {
  ArticlePathsLogicArgs,
  ArticlePathsLogicResponse,
} from './articlePaths.types'

/**
 * 投稿のパスを生成する Logic
 */
export class ArticlePathsLogic {
  private readonly blogs: ArticlePathsLogicArgs['blogs']

  constructor(private readonly args: ArticlePathsLogicArgs) {
    this.blogs = this.args.blogs
  }

  /**
   * パス生成を実行
   */
  execute(): ArticlePathsLogicResponse {
    return this.blogs.map((blog) => ({ id: blog.id }))
  }
}
