import { generateStaticParams } from './generateStaticParams'
import { useArticles } from 'hooks/useArticles'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination } from 'ui/components/blogs/common/Pagination'

interface PagesPageParams {
  params: {
    id: string
  }
}

export default async function PagesPage({ params: { id } }: PagesPageParams) {
  const { getArticles } = useArticles()
  const { articles, totalPageCount } = await getArticles(id)

  return (
    <>
      <ArticleCardList articles={articles} />
      <Pagination currentPage={Number(id)} totalPage={totalPageCount} />
    </>
  )
}

export { generateStaticParams }
