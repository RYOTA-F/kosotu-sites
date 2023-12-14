import { ARIA_LABEL } from './Pagination.const'
import { PaginationProps } from './Pagination.types'
import { PaginationItem } from './PaginationItem'
import { PAGE_PATTERN, PagePattern } from 'logic/blogs/common/pagination'
import style from './Pagination.module.css'

export function Pagination({
  totalPage,
  currentPageNumber,
  currentPagePattern,
  cagegoryId,
  tagId,
}: PaginationProps) {
  const pages = [...new Array(totalPage)].map((_, i) => i)

  return (
    <section className={style.pagination} aria-label={ARIA_LABEL.PAGINATION}>
      {pages.map((v) => (
        <div key={v} className={style.paginationItem}>
          <PaginationItem
            pageNumber={v + 1}
            isCurrentPage={currentPageNumber === v + 1}
            currentPagePattern={currentPagePattern}
            categoryId={cagegoryId}
            tagId={tagId}
          />
        </div>
      ))}
    </section>
  )
}

export { PAGE_PATTERN }
export type { PagePattern }
