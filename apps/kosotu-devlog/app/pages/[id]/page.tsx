import { API, MAX_ARTICEL_COUNT } from 'const'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination, PAGE_PATTERN } from 'ui/components/blogs/common/Pagination'
import { generateStaticParams } from './generateStaticParams'

interface PagesPageParams {
  params: {
    id: string
  }
}

export default async function PagesPage({ params: { id } }: PagesPageParams) {
  const { getArticles } = useArticles({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { articles, totalPageCount } = await getArticles(id)

  return (
    <>
      <ArticleCardList articles={articles} />
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={Number(id)}
        currentPagePattern={PAGE_PATTERN.PAGES}
      />
    </>
  )
}

export { generateStaticParams }
