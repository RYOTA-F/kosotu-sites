import { generateStaticParams } from './generateStaticParams'
import { useArticles } from 'hooks/useArticles'
import { ArticleDetailHeader } from 'ui/components/blogs/features/articles/ArticleDetailHeader/ArticleDetailHeader'

interface ArticlePageParams {
  params: {
    id: string
  }
}

export default async function ArticlePage({
  params: { id },
}: ArticlePageParams) {
  const { getArticleById } = useArticles()
  const { article } = await getArticleById(id)

  return (
    <>
      <ArticleDetailHeader article={article} />
    </>
  )
}

export { generateStaticParams }
