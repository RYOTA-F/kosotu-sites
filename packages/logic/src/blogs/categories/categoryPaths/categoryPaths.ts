import {
  CategoryPathsLogicArgs,
  CategoryPathsLogicResponse,
} from './categoryPaths.types'

/**
 * カテゴリのパスを生成する Logic
 */
export class CategoryPathsLogic {
  private readonly categories: CategoryPathsLogicArgs['categories']

  constructor(private readonly args: CategoryPathsLogicArgs) {
    this.categories = this.args.categories
  }

  /**
   * パス生成を実行
   */
  execute(): CategoryPathsLogicResponse {
    return this.categories.map((category) => ({ id: category.id }))
  }
}
