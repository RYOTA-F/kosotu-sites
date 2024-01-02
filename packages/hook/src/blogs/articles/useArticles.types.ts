import { Blog, TableOfContents } from 'type/microCMS'
import { ArticleCardListLogicResponse } from 'logic/blogs/articles/cardList/articleCardListLogic.types'

export interface UseArticlesParams {
  apiKey: string
  baseEndpint: string
  blogEndpoint: string
  maxPageArticleCount: number
}

export interface GetArticlesParams {
  id?: string
}

export interface GetArticlesResponse {
  articles: ArticleCardListLogicResponse
  totalPageCount: number
}

export interface GetArticleByIdParams {
  id: string
}

export interface GetArticleByIdResponse {
  article: Blog
  tableOfContents: TableOfContents[]
}

export interface GetArticlesByCategoryIdParams {
  categoryId: string
  pageId?: string
}

export interface GetArticlesByCategoryIdResponse {
  articles: ArticleCardListLogicResponse
  totalPageCount: number
}

export interface GetArticlesByTagIdParams {
  tagId: string
  pageId?: string
}

export interface GetArticlesByTagIdResponse {
  articles: ArticleCardListLogicResponse
  totalPageCount: number
}
