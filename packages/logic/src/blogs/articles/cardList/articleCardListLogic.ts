import { IBlog } from 'type/microCMS'

/**
 * 記事一覧リスト生成ロジック
 */
export class ArticleCardListLogic {
  constructor(private blogs: IBlog[]) {}

  /**
   * 加工された記事一覧を取得
   */
  execute() {
    return this.blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      image: blog.image,
    }))
  }
}
