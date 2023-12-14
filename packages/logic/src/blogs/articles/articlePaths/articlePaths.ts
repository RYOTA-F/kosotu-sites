import { ArticlePathsLogicArgs } from './articlePaths.types'

export class ArticlePathsLogic {
  private readonly blogs: ArticlePathsLogicArgs['blogs']

  constructor(private readonly args: ArticlePathsLogicArgs) {
    this.blogs = this.args.blogs
  }

  execute() {
    return this.blogs.map((blog) => ({ id: blog.id }))
  }
}
