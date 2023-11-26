import { ARIA_LABEL } from './Pagination.const'
import { PaginationProps } from './Pagination.types'
import style from './Pagination.module.css'
import { PaginationItem } from '../../../elements/PaginationItem'

export function Pagination({
  currentPage,
  totalPage,
  pathName,
  queryId,
}: PaginationProps) {
  const pages = [...new Array(totalPage)].map((_, i) => i)

  return (
    <section className={style.pagination} aria-label={ARIA_LABEL.PAGINATION}>
      {pages.map((v) => (
        <div key={v} className={style.paginationItem}>
          <PaginationItem
            pageNumber={v + 1}
            isCurrentPage={currentPage === v + 1}
            pathName={pathName ?? '/'}
            queryId={queryId}
          />
        </div>
      ))}
    </section>
  )
}
