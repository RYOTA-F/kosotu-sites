import { Blog, TableOfContents } from 'type/microCMS'
import { ArticleCardListLogicResponse } from 'logic/blogs/articles/cardList/articleCardListLogic.types'

export interface UseArticlesProps {
  apiKey: string
  baseEndpint: string
  blogEndpoint: string
  maxPageArticleCount: number
}

export type UseArticles = (props: UseArticlesProps) => {
  /**
   * ブログ記事一覧を取得
   */
  getArticles: (id?: string) => Promise<{
    articles: ArticleCardListLogicResponse
    totalPageCount: number
  }>

  /**
   * IDを指定してブログ記事を一件取得
   */
  getArticleById: (id: string) => Promise<{
    article: Blog
    tableOfContents: TableOfContents[]
  }>

  /**
   * カテゴリに紐づくブログ記事一覧を取得
   */
  getArticlesByCategoryId: (
    categoryId: string,
    pageId?: string
  ) => Promise<{
    articles: ArticleCardListLogicResponse
    totalPageCount: number
  }>

  /**
   * タグに紐づくブログ記事一覧を取得
   */
  getArticlesByTagId: (
    tagId: string,
    pageId?: string
  ) => Promise<{
    articles: ArticleCardListLogicResponse
    totalPageCount: number
  }>
}
