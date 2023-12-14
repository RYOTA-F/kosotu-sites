import {
  CategoryRelationLogicArgs,
  CategoryRelationLogicResponse,
} from './categoryRelation.types'

export class CategoryRelationLogic {
  private readonly relation: CategoryRelationLogicArgs['relation']

  constructor(private readonly args: CategoryRelationLogicArgs) {
    this.relation = this.args.relation
  }

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
