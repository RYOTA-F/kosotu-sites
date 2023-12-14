import { Category, CategoryRelation } from 'type/microCMS'

export interface CategoryRelationLogicArgs {
  relation: CategoryRelation
}

export interface CategoryRelationLogicResponse {
  isParent: boolean
  categoryParent: Category | null
  categoryChildren: Category | null
}
