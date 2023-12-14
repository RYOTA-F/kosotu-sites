import {
  MicroCmsCategoryUsecaseArgs,
  MicroCmsCategoryUsecaseGetCategoriesResponse,
  MicroCmsCategoryUsecaseGetCategoryByIdParams,
  MicroCmsCategoryUsecaseGetCategoryByIdResponse,
} from './categoryUsecase.types'

/**
 * MicroCMSカテゴリの取得クラス
 */
export class MicroCmsCategoryUsecase {
  constructor(private readonly args: MicroCmsCategoryUsecaseArgs) {}

  /**
   * カテゴリ一覧を取得
   */
  async getCategories(): Promise<MicroCmsCategoryUsecaseGetCategoriesResponse> {
    const limit = 9999

    const res = await fetch(
      `${this.args.baseEndpint}${this.args.categoryEndpoint}?limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.args.apiKey,
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
      `${this.args.baseEndpint}${this.args.categoryEndpoint}/${id}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.args.apiKey,
        },
      }
    )

    const category = await res.json()

    return {
      category,
    }
  }
}
