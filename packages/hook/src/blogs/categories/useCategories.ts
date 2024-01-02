import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'
import {
  UseCategoriesParams,
  GetCategoryByIdParams,
  GetCategoryByIdResponse,
} from './useCategories.types'

/**
 * カテゴリ取得用 Custom Hooks
 */
export const useCategories = ({
  apiKey,
  baseEndpint,
  categoryEndpoint,
}: UseCategoriesParams) => {
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase({
    apiKey,
    baseEndpint,
    categoryEndpoint,
  })

  /**
   * IDを指定してカテゴリを一件取得
   */
  const getCategoryById = async ({
    id,
  }: GetCategoryByIdParams): Promise<GetCategoryByIdResponse> => {
    const { category } = await microCmsCategoryUsecase.getCategoryById({ id })

    return {
      category,
    }
  }

  return {
    getCategoryById,
  }
}
