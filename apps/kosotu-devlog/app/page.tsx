import { API, MAX_ARTICEL_COUNT } from 'const'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'

export default async function HomePage() {
  const { getArticles } = useArticles({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { articles, totalPageCount } = await getArticles()

  return (
    <>
      <ArticleCardList articles={articles} />
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={TOP_PAGE_NUM}
        currentPagePattern={PAGE_PATTERN.ROOT}
      />
    </>
  )
}
