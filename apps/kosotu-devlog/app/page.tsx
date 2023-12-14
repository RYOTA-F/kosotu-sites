import { useArticles } from 'hooks/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'

export default async function HomePage() {
  const { getArticles } = useArticles()
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
