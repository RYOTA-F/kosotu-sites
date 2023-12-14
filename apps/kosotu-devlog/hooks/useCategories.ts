import { API } from 'const/microCms'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'

/**
 * カテゴリ取得用カスタムフック
 */
export const useCategories = () => {
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    categoryEndpoint: API.CATEGORY.END_POINT,
  })

  /**
   * IDを指定してカテゴリを一件取得
   */
  const getCategoryById = async (id: string) => {
    const { category } = await microCmsCategoryUsecase.getCategoryById({ id })

    return {
      category,
    }
  }

  return {
    getCategoryById,
  }
}
