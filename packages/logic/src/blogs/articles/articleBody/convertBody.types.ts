import { Blog, BlogCardData } from 'type/microCMS'

export interface PerseArticleBodyLogicArgs {
  articleBody: Blog['body']
}

export interface PerseArticleBodyLogicResponse {
  body: string
}
