import { useArticles } from 'hooks/useArticles'
import { useCategories } from 'hooks/useCategories'
import { CategoryDetailHeader } from 'ui/components/blogs/features/categories/CategoryDetailHeader/CategoryDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination, PAGE_PATTERN } from 'ui/components/blogs/common/Pagination'
import { generateStaticParams } from './generateStaticParams'

interface CategoryPagesPageParams {
  params: {
    id: string
    pageId: string
  }
}

export default async function CategoryPagesPage({
  params: { id, pageId },
}: CategoryPagesPageParams) {
  const { getArticlesByCategoryId } = useArticles()
  const { getCategoryById } = useCategories()
  const { category } = await getCategoryById(id)
  const { articles, totalPageCount } = await getArticlesByCategoryId(id, pageId)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-5">
        <ArticleCardList articles={articles} />
      </div>
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={Number(pageId)}
        currentPagePattern={PAGE_PATTERN.CATEGORY_PAGES}
        cagegoryId={id}
      />
    </>
  )
}

export { generateStaticParams }
