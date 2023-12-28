import { API, MAX_ARTICEL_COUNT, API_KEY, API_BASE_ENDPOINT } from 'const'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'

export default async function HomePage() {
  const { getArticles } = useArticles({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
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
