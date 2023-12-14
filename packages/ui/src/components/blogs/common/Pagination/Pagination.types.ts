import { PagePattern } from './Pagination.const'

export interface PaginationProps {
  totalPage: number
  currentPageNumber: number
  currentPagePattern: PagePattern
  cagegoryId?: string
  tagId?: string
}
