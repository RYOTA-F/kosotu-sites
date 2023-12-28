import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'
import { UseCategories } from './useCategories.types'

/**
 * カテゴリ取得用 Custom Hooks
 */
export const useCategories: UseCategories = ({
  apiKey,
  baseEndpint,
  categoryEndpoint,
}) => {
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase({
    apiKey,
    baseEndpint,
    categoryEndpoint,
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
