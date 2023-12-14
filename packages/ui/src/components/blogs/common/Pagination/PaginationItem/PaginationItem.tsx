import { ARIA_LABEL } from './PaginationItem.const'
import { PaginationItemProps } from './PaginationItem.types'
import style from './PaginationItem.module.css'
import { PaginationLogic } from 'logic/blogs/common/pagination'

export function PaginationItem({
  pageNumber,
  isCurrentPage,
  currentPagePattern,
  categoryId,
  tagId,
}: PaginationItemProps) {
  const { linkUrl } = new PaginationLogic({
    pageNumber,
    currentPagePattern,
    categoryId,
    tagId,
  }).execute()

  return (
    <div
      className={style.paginationItem}
      aria-label={ARIA_LABEL.PAGINATION_ITEM}
    >
      {isCurrentPage ? (
        <div className={style.currentPage}>{pageNumber}</div>
      ) : (
        <a href={linkUrl} className={style.othersPage}>
          {pageNumber}
        </a>
      )}
    </div>
  )
}
