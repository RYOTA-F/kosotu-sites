export interface ArticleCardProps {
  id: string
  title: string
  image: ArticleCardImage
}

export interface ArticleCardImage {
  url: string
  height: number
  width: number
}
