import { API, MAX_ARTICEL_COUNT } from 'const/microCms'
import { PaginationLogic } from 'logic/blogs/articles/pagination'
import { ArticleCardListLogic } from 'logic/blogs/articles/cardList'
import { MicroCmsUsecaseBlog } from 'usecase/microCMS/blog'

/**
 * ブログ記事取得用カスタムフック
 */
export const useArticles = () => {
  /**
   * ブログ一覧取得
   */
  const getArticles = async () => {
    const { blogs, totalCount } = await new MicroCmsUsecaseBlog(
      process.env.NEXT_PUBLIC_API_KEY || '',
      process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      API.BLOG.END_POINT
    ).getBlogs({
      limit: true,
      offset: 0,
      maxArticleCount: MAX_ARTICEL_COUNT,
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
