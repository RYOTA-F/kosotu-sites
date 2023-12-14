import {
  MicroCmsCategoryUsecaseGetCategoriesResponse,
  MicroCmsCategoryUsecaseGetCategoryByIdParams,
  MicroCmsCategoryUsecaseGetCategoryByIdResponse,
} from './categoryUsecase.types'

/**
 * MicroCMSカテゴリの取得クラス
 */
export class MicroCmsCategoryUsecase {
  constructor(
    private apiKey: string,
    private baseEndpint: string,
    private categoryEndpoint: string
  ) {}

  /**
   * カテゴリ一覧を取得
   */
  async getCategories(): Promise<MicroCmsCategoryUsecaseGetCategoriesResponse> {
    const limit = 9999

    const res = await fetch(
      `${this.baseEndpint}${this.categoryEndpoint}?limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
        },
      }
    )

    const categories = await res.json()

    return {
      categories: categories.contents,
    }
  }

  /**
   * IDを指定してカテゴリを一件取得
   */
  async getCategoryById({
    id,
  }: MicroCmsCategoryUsecaseGetCategoryByIdParams): Promise<MicroCmsCategoryUsecaseGetCategoryByIdResponse> {
    const res = await fetch(
      `${this.baseEndpint}${this.categoryEndpoint}/${id}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
        },
      }
    )

    const category = await res.json()

    return {
      category,
    }
  }
}
