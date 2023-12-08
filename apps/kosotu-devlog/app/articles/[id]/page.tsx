import { generateStaticParams } from './generateStaticParams'
import { useArticles } from 'hooks/useArticles'
import { ArticleDetailHeader } from 'ui/components/blogs/features/articles/ArticleDetailHeader/ArticleDetailHeader'
import { ArticleDetailBody } from 'ui/components/blogs/features/articles/ArticleDetailBody/ArticleDetailBody'
import { TableOfContents } from 'ui/components/blogs/common/TableOfContents'
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
  const { article, tableOfContents } = await getArticleById(id)

  return (
    <>
      <ArticleDetailHeader
        article={article}
        welcomeMessage={ARTICLE_DETAIL_HEADER.WELCOME_MESSAGE}
        thanksMessage={ARTICLE_DETAIL_HEADER.THANKS_MESSAGE}
      />
      <div className="mt-8 mx-[10%]">
        <TableOfContents tableOfContents={tableOfContents} />
      </div>
      <div className="mt-10">
        <ArticleDetailBody articleBody={article.body} />
      </div>
    </>
  )
}

export { generateStaticParams }
