import { IBlog } from 'type/microCMS'

export class ArticlePathsLogic {
  constructor(private blogs: IBlog[]) {}

  execute() {
    return this.blogs.map((blog) => ({ id: blog.id }))
  }
}
