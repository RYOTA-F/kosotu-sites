import { PagePattern } from './paginationLogic.const'

export interface PaginationLogicData {
  pageNumber: number
  currentPagePattern?: PagePattern
  categoryId?: string
  tagId?: string
}
