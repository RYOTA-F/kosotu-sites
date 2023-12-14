import { PAGE_PATTERN, TOP_PAGE_NUM } from './paginationLogic.const'
import { PaginationLogicData } from './paginationLogic.types'

export class PaginationLogic {
  constructor(private readonly data: PaginationLogicData) {}

  execute() {
    return {
      linkUrl: this.getPaginationLink(),
    }
  }

  private getPaginationLink() {
    switch (this.data.currentPagePattern) {
      // トップページ
      case PAGE_PATTERN.ROOT:
      case PAGE_PATTERN.PAGES:
        return this.data.pageNumber === TOP_PAGE_NUM
          ? PAGE_PATTERN.ROOT
          : `${PAGE_PATTERN.PAGES}${this.data.pageNumber}`
      // カテゴリページ
      case PAGE_PATTERN.CATEGORIES:
      case PAGE_PATTERN.CATEGORY_PAGES:
        return this.data.pageNumber === TOP_PAGE_NUM
          ? `${PAGE_PATTERN.CATEGORIES}${this.data.categoryId}`
          : `${PAGE_PATTERN.CATEGORIES}${this.data.categoryId}${PAGE_PATTERN.PAGES}${this.data.pageNumber}`
      // タグページ
      case PAGE_PATTERN.TAGS:
      case PAGE_PATTERN.TAG_PAGES:
        return this.data.pageNumber === TOP_PAGE_NUM
          ? `${PAGE_PATTERN.TAGS}${this.data.tagId}`
          : `${PAGE_PATTERN.TAGS}${this.data.tagId}${PAGE_PATTERN.PAGES}${this.data.pageNumber}`
      default:
        return this.data.pageNumber === TOP_PAGE_NUM
          ? PAGE_PATTERN.ROOT
          : `${PAGE_PATTERN.PAGES}${this.data.pageNumber}`
    }
  }
}
