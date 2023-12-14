import { Blog } from 'type/microCMS'

export class ArticlePathsLogic {
  constructor(private blogs: Blog[]) {}

  execute() {
    return this.blogs.map((blog) => ({ id: blog.id }))
  }
}
