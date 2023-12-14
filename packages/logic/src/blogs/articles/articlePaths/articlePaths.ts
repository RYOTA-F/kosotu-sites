import {
  ArticlePathsLogicArgs,
  ArticlePathsLogicResponse,
} from './articlePaths.types'

export class ArticlePathsLogic {
  private readonly blogs: ArticlePathsLogicArgs['blogs']

  constructor(private readonly args: ArticlePathsLogicArgs) {
    this.blogs = this.args.blogs
  }

  execute(): ArticlePathsLogicResponse {
    return this.blogs.map((blog) => ({ id: blog.id }))
  }
}
