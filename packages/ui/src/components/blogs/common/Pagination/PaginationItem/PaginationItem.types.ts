import { PagePattern } from '../'

export interface PaginationItemProps {
  pageNumber: number
  isCurrentPage: boolean
  currentPagePattern?: PagePattern
  categoryId?: string
  tagId?: string
}
