import { API } from 'const/microCms'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'

/**
 * カテゴリ取得用カスタムフック
 */
export const useCategories = () => {
  /**
   * IDを指定してカテゴリを一件取得
   */
  const getCategoryById = async (id: string) => {
    const { category } = await new MicroCmsCategoryUsecase(
      process.env.NEXT_PUBLIC_API_KEY || '',
      process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      API.CATEGORY.END_POINT
    ).getCategoryById({ id })

    return {
      category,
    }
  }

  return {
    getCategoryById,
  }
}
