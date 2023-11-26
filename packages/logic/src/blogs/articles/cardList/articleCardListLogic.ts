import { IBlog } from 'type/microCMS'

export class ArticleCardListLogic {
  constructor(private blogs: IBlog[]) {}

  execute() {
    return this.blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      image: blog.image,
    }))
  }
}
