import { API, MAX_ARTICEL_COUNT } from 'const/microCms'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { useCategories } from 'hook/blogs/categories/useCategories'
import { generateStaticParams } from './generateStaticParams'
import { CategoryDetailHeader } from 'ui/components/blogs/features/categories/CategoryDetailHeader/CategoryDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'

interface CategoryPageParams {
  params: {
    id: string
  }
}

export default async function CategoryPage({
  params: { id },
}: CategoryPageParams) {
  const { getArticlesByCategoryId } = useArticles({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { getCategoryById } = useCategories({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
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
