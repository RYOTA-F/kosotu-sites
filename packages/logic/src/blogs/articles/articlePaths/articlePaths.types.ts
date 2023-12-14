import { Blog } from 'type/microCMS'

export interface ArticlePathsLogicArgs {
  blogs: Blog[]
}

export type ArticlePathsLogicResponse = {
  id: string
}[]
