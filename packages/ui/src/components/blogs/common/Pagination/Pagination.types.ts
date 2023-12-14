import { PagePattern } from '.'

export interface PaginationProps {
  totalPage: number
  currentPageNumber: number
  currentPagePattern: PagePattern
  cagegoryId?: string
  tagId?: string
}
