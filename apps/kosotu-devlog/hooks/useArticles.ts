import { MicroCmsUsecaseBlog } from '../usecases/microCMS/blog'
import { PaginationLogic } from 'logic/blogs/articles/pagination'
import { ArticleCardListLogic } from 'logic/blogs/articles/cardList'
import { MAX_ARTICEL_COUNT } from 'const/microCms'

export const useArticles = () => {
  /**
   * ブログ一覧取得
   */
  const getArticles = async () => {
    const { blogs, totalCount } = await new MicroCmsUsecaseBlog().getBlogs({
      limit: true,
    })

    const articles = new ArticleCardListLogic(blogs).execute()

    const totalPageCount = new PaginationLogic(
      totalCount,
      MAX_ARTICEL_COUNT
    ).execute()

    return { articles, totalPageCount }
  }

  return {
    getArticles,
  }
}
