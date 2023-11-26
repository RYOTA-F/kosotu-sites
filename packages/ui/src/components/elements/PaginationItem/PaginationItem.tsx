import {
  PAGE,
  ARIA_LABEL,
  TOP_PAGE_NUM,
  TOP_PATH,
  PAGES_PATH,
} from './PaginationItem.const'
import { PaginationItemProps } from './PaginationItem.types'
import style from './PaginationItem.module.css'

export function PaginationItem({
  pageNumber,
  isCurrentPage,
  pathName,
  queryId,
}: PaginationItemProps) {
  const linkUrl = () => {
    switch (pathName) {
      case `${PAGE.CATEGORY}${TOP_PATH}`:
      case `${PAGE.CATEGORY}${PAGES_PATH}`:
        return pageNumber === TOP_PAGE_NUM
          ? `${PAGE.CATEGORY}${String(queryId)}`
          : `${PAGE.CATEGORY}${String(queryId)}/${pageNumber}`
      case `${PAGE.TAG}${TOP_PATH}`:
      case `${PAGE.TAG}${PAGES_PATH}`:
        return pageNumber === TOP_PAGE_NUM
          ? `${PAGE.TAG}${String(queryId)}`
          : `${PAGE.TAG}${String(queryId)}/${pageNumber}`
      default:
        return pageNumber === TOP_PAGE_NUM
          ? PAGE.ROOT
          : `${PAGE.PAGE}${pageNumber}`
    }
  }

  return (
    <div
      className={style.paginationItem}
      aria-label={ARIA_LABEL.PAGINATION_ITEM}
    >
      {isCurrentPage ? (
        <div className={style.currentPage}>{pageNumber}</div>
      ) : (
        <a href={linkUrl()} className={style.othersPage}>
          {pageNumber}
        </a>
      )}
    </div>
  )
}
