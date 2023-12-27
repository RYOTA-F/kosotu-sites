import { API } from 'const/microCms'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog/blogUsecase'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'
import { CreateSitemapDataLogic } from 'logic/blogs/sitemaps/sitemapData/createSitemapData'

/**
 * サイトマップ取得用カスタムフック
 */
export const useSitemap = () => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
  })

  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    categoryEndpoint: API.CATEGORY.END_POINT,
  })

  /**
   * サイトマップを取得
   */
  const getSitemaps = async () => {
    // 全投稿を取得
    const { blogs } = await microCmsBlogUsecase.getBlogs({
      limit: false,
      offset: 0,
      maxArticleCount: 9999,
    })
    // 全カテゴリを取得
    const { categories } = await microCmsCategoryUsecase.getCategories()

    // サイトマップを生成
    return new CreateSitemapDataLogic({
      blogs,
      categories,
    }).execute()
  }

  return {
    getSitemaps,
  }
}
