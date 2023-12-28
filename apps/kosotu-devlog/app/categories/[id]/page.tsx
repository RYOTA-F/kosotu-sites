import { API, MAX_ARTICEL_COUNT, API_KEY, API_BASE_ENDPOINT } from 'const'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { useCategories } from 'hook/blogs/categories/useCategories'
import { CategoryDetailHeader } from 'ui/components/blogs/features/categories/CategoryDetailHeader/CategoryDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'
import { generateStaticParams } from './generateStaticParams'

interface CategoryPageParams {
  params: {
    id: string
  }
}

export default async function CategoryPage({
  params: { id },
}: CategoryPageParams) {
  const { getArticlesByCategoryId } = useArticles({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { getCategoryById } = useCategories({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    categoryEndpoint: API.CATEGORY.END_POINT,
  })
  const { category } = await getCategoryById(id)
  const { articles, totalPageCount } = await getArticlesByCategoryId(id)

  return (
    <>
      <CategoryDetailHeader category={category} />
      <div className="mt-5">
        <ArticleCardList articles={articles} />
      </div>
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={TOP_PAGE_NUM}
        currentPagePattern={PAGE_PATTERN.CATEGORIES}
        cagegoryId={id}
      />
    </>
  )
}

export { generateStaticParams }
