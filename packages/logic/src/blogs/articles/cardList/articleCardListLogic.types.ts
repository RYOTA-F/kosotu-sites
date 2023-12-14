import { Blog } from 'type/microCMS'

export interface ArticleCardListLogicArgs {
  blogs: Blog[]
}

export type ArticleCardListLogicResponse = {
  id: string
  title: string
  image: Blog['image']
}[]
