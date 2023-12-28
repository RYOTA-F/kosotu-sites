import {
  CategoryRelationLogicArgs,
  CategoryRelationLogicResponse,
} from './categoryRelation.types'

/**
 * カテゴリの親子関係を生成する Logic
 */
export class CategoryRelationLogic {
  private readonly relation: CategoryRelationLogicArgs['relation']

  constructor(private readonly args: CategoryRelationLogicArgs) {
    this.relation = this.args.relation
  }

  /**
   * 親子関係生成を実行
   */
  execute(): CategoryRelationLogicResponse {
    const isParent = this.relation.isParent
    const categoryParent =
      !isParent && this.relation.parent ? this.relation.parent[0] : null
    const categoryChildren =
      isParent && this.relation.children ? this.relation.children[0] : null

    return {
      isParent,
      categoryParent,
      categoryChildren,
    }
  }
}
