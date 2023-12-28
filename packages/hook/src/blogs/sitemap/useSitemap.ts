import { CreateSitemapDataLogic } from 'logic/blogs/sitemaps/sitemapData/createSitemapData'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog/blogUsecase'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'
import { UseSitemapProps } from './useSitemap.types'

/**
 * サイトマップ取得用 Custom Hooks
 */
export const useSitemap = ({
  apiKey,
  baseEndpint,
  blogEndpoint,
  categoryEndpoint,
}: UseSitemapProps) => {
  const microCmsBlogUsecase = new MicroCmsBlogUsecase({
    apiKey,
    baseEndpint,
    blogEndpoint,
  })

  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase({
    apiKey,
    baseEndpint,
    categoryEndpoint,
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
