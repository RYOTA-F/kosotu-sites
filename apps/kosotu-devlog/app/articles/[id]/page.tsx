import {
  API,
  MAX_ARTICEL_COUNT,
  ARTICLE_DETAIL_HEADER,
  API_KEY,
  API_BASE_ENDPOINT,
} from 'const'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { ArticleDetailHeader } from 'ui/components/blogs/features/articles/ArticleDetailHeader/ArticleDetailHeader'
import { ArticleDetailBody } from 'ui/components/blogs/features/articles/ArticleDetailBody/ArticleDetailBody'
import { TableOfContents } from 'ui/components/blogs/common/TableOfContents'
import { generateStaticParams } from './generateStaticParams'

interface ArticlePageParams {
  params: {
    id: string
  }
}

export default async function ArticlePage({
  params: { id },
}: ArticlePageParams) {
  const { getArticleById } = useArticles({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
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
