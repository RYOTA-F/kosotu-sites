import { CategoryRelation } from 'type/microCMS'

export class CategoryRelationLogic {
  constructor(private relation: CategoryRelation) {}

  execute() {
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
