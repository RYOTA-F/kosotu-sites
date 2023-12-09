import { useArticles } from 'hooks/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination } from 'ui/components/blogs/common/Pagination'

export default async function HomePage() {
  const TOP_PAGE_NUMBER = 1 as const
  const { getArticles } = useArticles()
  const { articles, totalPageCount } = await getArticles()

  return (
    <>
      <ArticleCardList articles={articles} />
      <Pagination currentPage={TOP_PAGE_NUMBER} totalPage={totalPageCount} />
    </>
  )
}
