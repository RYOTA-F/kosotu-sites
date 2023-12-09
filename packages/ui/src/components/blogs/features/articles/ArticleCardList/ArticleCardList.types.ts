export interface ArticleCardListProps {
  articles: ArticleCard[]
}

export interface ArticleCard {
  id: string
  title: string
  image: ArticleCardImage
}

export interface ArticleCardImage {
  url: string
  height: number
  width: number
}
