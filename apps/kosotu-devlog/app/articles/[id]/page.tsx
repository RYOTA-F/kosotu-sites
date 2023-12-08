import { generateStaticParams } from './generateStaticParams'
import { useArticles } from 'hooks/useArticles'
import { ArticleDetailHeader } from 'ui/components/blogs/features/articles/ArticleDetailHeader/ArticleDetailHeader'
import { ARTICLE_DETAIL_HEADER } from 'const/article/contents'

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
      <ArticleDetailHeader
        article={article}
        welcomeMessage={ARTICLE_DETAIL_HEADER.WELCOME_MESSAGE}
        thanksMessage={ARTICLE_DETAIL_HEADER.THANKS_MESSAGE}
      />
    </>
  )
}

export { generateStaticParams }
