import { PaginationLogic } from 'logic/blogs/articles/pagination'
import { ArticleCardListLogic } from 'logic/blogs/articles/cardList'
import { ArticleOffsetCountLogic } from 'logic/blogs/articles/offsetCount'
import { PerseArticleBodyLogic } from 'logic/blogs/articles/articleBody/convertBody'
import { TableOfContentsLogic } from 'logic/blogs/articles/tableOfContants/tableOfContentsLogic'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'
import {
  UseArticlesParams,
  GetArticlesParams,
  GetArticlesResponse,
  GetArticleByIdParams,
  GetArticleByIdResponse,
  GetArticlesByCategoryIdParams,
  GetArticlesByCategoryIdResponse,
  GetArticlesByTagIdParams,
  GetArticlesByTagIdResponse,
} from './useArticles.types'

/**
 * ブログ記事取得用 Custom Hooks
 */
export const useArticles = ({
  apiKey,
  baseEndpint,
  blogEndpoint,
  maxPageArticleCount,
}: UseArticlesParams) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase({
    apiKey,
    baseEndpint,
    blogEndpoint,
  })

  /**
   * ブログ記事一覧を取得
   */
  const getArticles = async ({
    id,
  }: GetArticlesParams): Promise<GetArticlesResponse> => {
    const offset = new ArticleOffsetCountLogic({
      id: id,
      maxPageCount: maxPageArticleCount,
    }).execute()

    const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
      limit: true,
      offset,
      maxArticleCount: maxPageArticleCount,
    })

    const articles = new ArticleCardListLogic({ blogs }).execute()

    const totalPageCount = new PaginationLogic({
      articleCount: totalCount,
      maxPageCount: maxPageArticleCount,
    }).execute()

    return { articles, totalPageCount }
  }

  /**
   * IDを指定してブログ記事を一件取得
   */
  const getArticleById = async ({
    id,
  }: GetArticleByIdParams): Promise<GetArticleByIdResponse> => {
    const { blog } = await microCmsBlogUsecase.getBlogById({ id })

    const { body } = await new PerseArticleBodyLogic({
      articleBody: blog.body,
    }).execute()

    const { tableOfContents } = new TableOfContentsLogic({
      blogBody: blog.body,
    }).execute()

    return {
      article: {
        ...blog,
        body,
      },
      tableOfContents,
    }
  }

  /**
   * カテゴリに紐づくブログ記事一覧を取得
   */
  const getArticlesByCategoryId = async ({
    categoryId,
    pageId,
  }: GetArticlesByCategoryIdParams): Promise<GetArticlesByCategoryIdResponse> => {
    const offset = new ArticleOffsetCountLogic({
      id: pageId,
      maxPageCount: maxPageArticleCount,
    }).execute()

    const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
      limit: true,
      offset,
      maxArticleCount: maxPageArticleCount,
      categoryId,
    })

    const articles = new ArticleCardListLogic({ blogs }).execute()

    const totalPageCount = new PaginationLogic({
      articleCount: totalCount,
      maxPageCount: maxPageArticleCount,
    }).execute()

    return { articles, totalPageCount }
  }

  /**
   * タグに紐づくブログ記事一覧を取得
   */
  const getArticlesByTagId = async ({
    tagId,
    pageId,
  }: GetArticlesByTagIdParams): Promise<GetArticlesByTagIdResponse> => {
    const offset = new ArticleOffsetCountLogic({
      id: pageId,
      maxPageCount: maxPageArticleCount,
    }).execute()

    const { blogs, totalCount } = await microCmsBlogUsecase.getBlogs({
      limit: true,
      offset,
      maxArticleCount: maxPageArticleCount,
      tagId,
    })

    const articles = new ArticleCardListLogic({ blogs }).execute()

    const totalPageCount = new PaginationLogic({
      articleCount: totalCount,
      maxPageCount: maxPageArticleCount,
    }).execute()

    return { articles, totalPageCount }
  }

  return {
    getArticles,
    getArticleById,
    getArticlesByCategoryId,
    getArticlesByTagId,
  }
}
