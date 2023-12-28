import { API, MAX_ARTICEL_COUNT } from 'const'
import { PagePathsLogic, PAGE_TYPE } from 'logic/blogs/articles/pagePaths'
import { PaginationLogic } from 'logic/blogs/articles/pagination'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog/blogUsecase'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'

export async function generateStaticParams() {
  const { categories } = await new MicroCmsCategoryUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    categoryEndpoint: API.CATEGORY.END_POINT,
  }).getCategories()

  // ページパス生成
  const paths = await Promise.all(
    categories.map(async (category) => {
      // カテゴリ毎の記事総数
      const { totalCount } = await new MicroCmsBlogUsecase({
        apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
        baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
        blogEndpoint: API.BLOG.END_POINT,
      }).getBlogs({
        limit: false,
        offset: 0,
        maxArticleCount: 9999,
        categoryId: category.id,
      })

      // カテゴリ毎のページ数
      const totalPageCount = new PaginationLogic({
        articleCount: totalCount,
        maxPageCount: MAX_ARTICEL_COUNT,
      }).execute()

      // カテゴリ×ページ数のパス
      const pagePaths = new PagePathsLogic({
        totalPage: totalPageCount,
        type: PAGE_TYPE.CATEGORY,
        slug: category.id,
      }).execute()

      return pagePaths
    })
  )

  return paths.flat()
}
