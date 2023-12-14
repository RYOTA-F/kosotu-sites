import { PagePattern } from './paginationLogic.const'

export interface PaginationLogicArgs {
  pageNumber: number
  currentPagePattern?: PagePattern
  categoryId?: string
  tagId?: string
}
