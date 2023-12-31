import {
  MicroCmsCategoryUsecaseArgs,
  MicroCmsCategoryUsecaseGetCategoriesResponse,
  MicroCmsCategoryUsecaseGetCategoryByIdParams,
  MicroCmsCategoryUsecaseGetCategoryByIdResponse,
} from './categoryUsecase.types'
import { METHOD_GET, X_API_KEY, FULL_ARTICEL_COUNT } from '../const'

/**
 * MicroCMSカテゴリの取得 Usecase
 */
export class MicroCmsCategoryUsecase {
  private readonly apiKey: MicroCmsCategoryUsecaseArgs['apiKey']
  private readonly baseEndpint: MicroCmsCategoryUsecaseArgs['baseEndpint']
  private readonly categoryEndpoint: MicroCmsCategoryUsecaseArgs['categoryEndpoint']

  constructor(private readonly args: MicroCmsCategoryUsecaseArgs) {
    this.apiKey = this.args.apiKey
    this.baseEndpint = this.args.baseEndpint
    this.categoryEndpoint = this.args.categoryEndpoint
  }

  /**
   * カテゴリ一覧を取得
   */
  async getCategories(): Promise<MicroCmsCategoryUsecaseGetCategoriesResponse> {
    const res = await fetch(
      `${this.baseEndpint}${this.categoryEndpoint}?limit=${FULL_ARTICEL_COUNT}`,
      {
        method: METHOD_GET,
        headers: {
          [X_API_KEY]: this.apiKey,
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
        method: METHOD_GET,
        headers: {
          [X_API_KEY]: this.apiKey,
        },
      }
    )

    const category = await res.json()

    return {
      category,
    }
  }
}
