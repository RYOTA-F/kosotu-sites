import { useArticles } from 'hooks/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/blogs/ArticleCardList'

export default async function Index() {
  const { getArticles } = useArticles()
  const { articles, totalPageCount } = await getArticles()

  return <ArticleCardList articles={articles} />
}
