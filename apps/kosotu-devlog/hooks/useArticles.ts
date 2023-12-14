import { API, MAX_ARTICEL_COUNT } from 'const/microCms'
import { PaginationLogic } from 'logic/blogs/articles/pagination'
import { ArticleCardListLogic } from 'logic/blogs/articles/cardList'
import { ArticleOffsetCountLogic } from 'logic/blogs/articles/offsetCount'
import { PerseArticleBodyLogic } from 'logic/blogs/articles/articleBody/convertBody'
import { TableOfContentsLogic } from 'logic/blogs/articles/tableOfContants/tableOfContentsLogic'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'

/**
 * ブログ記事取得用カスタムフック
 */
export const useArticles = () => {
  /**
   * ブログ記事一覧を取得
   */
  const getArticles = async (id?: string) => {
    const offset = new ArticleOffsetCountLogic(id, MAX_ARTICEL_COUNT).execute()

    const { blogs, totalCount } = await new MicroCmsBlogUsecase(
      process.env.NEXT_PUBLIC_API_KEY || '',
      process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      API.BLOG.END_POINT
    ).getBlogs({
      limit: true,
      offset,
      maxArticleCount: MAX_ARTICEL_COUNT,
    })

    const articles = new ArticleCardListLogic(blogs).execute()

    const totalPageCount = new PaginationLogic(
      totalCount,
      MAX_ARTICEL_COUNT
    ).execute()

    return { articles, totalPageCount }
  }

  /**
   * カテゴリに紐づくブログ記事一覧を取得
   */
  const getArticlesByCategoryId = async (
    categoryId: string,
    pageId?: string
  ) => {
    const offset = new ArticleOffsetCountLogic(
      pageId,
      MAX_ARTICEL_COUNT
    ).execute()

    const { blogs, totalCount } = await new MicroCmsBlogUsecase(
      process.env.NEXT_PUBLIC_API_KEY || '',
      process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      API.BLOG.END_POINT
    ).getBlogs({
      limit: true,
      offset,
      maxArticleCount: MAX_ARTICEL_COUNT,
      categoryId,
    })

    const articles = new ArticleCardListLogic(blogs).execute()

    const totalPageCount = new PaginationLogic(
      totalCount,
      MAX_ARTICEL_COUNT
    ).execute()

    return { articles, totalPageCount }
  }

  /**
   * タグに紐づくブログ記事一覧を取得
   */
  const getArticlesByTagId = async (tagId: string, pageId?: string) => {
    const offset = new ArticleOffsetCountLogic(
      pageId,
      MAX_ARTICEL_COUNT
    ).execute()

    const { blogs, totalCount } = await new MicroCmsBlogUsecase(
      process.env.NEXT_PUBLIC_API_KEY || '',
      process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      API.BLOG.END_POINT
    ).getBlogs({
      limit: true,
      offset,
      maxArticleCount: MAX_ARTICEL_COUNT,
      tagId,
    })

    const articles = new ArticleCardListLogic(blogs).execute()

    const totalPageCount = new PaginationLogic(
      totalCount,
      MAX_ARTICEL_COUNT
    ).execute()

    return { articles, totalPageCount }
  }

  /**
   * IDを指定してブログ記事を一件取得
   */
  const getArticleById = async (id: string) => {
    const { blog } = await new MicroCmsBlogUsecase(
      process.env.NEXT_PUBLIC_API_KEY || '',
      process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      API.BLOG.END_POINT
    ).getBlogById({ id })

    const { body } = await new PerseArticleBodyLogic(blog.body).execute()

    const { tableOfContents } = new TableOfContentsLogic(blog.body).execute()

    return {
      article: {
        ...blog,
        body,
      },
      tableOfContents,
    }
  }

  return {
    getArticles,
    getArticleById,
    getArticlesByCategoryId,
    getArticlesByTagId,
  }
}
