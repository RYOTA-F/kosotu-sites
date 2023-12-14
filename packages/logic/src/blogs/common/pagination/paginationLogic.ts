import { PAGE_PATTERN, TOP_PAGE_NUM } from './paginationLogic.const'
import {
  PaginationLogicArgs,
  PaginationLogicResponse,
} from './paginationLogic.types'

export class PaginationLogic {
  private readonly pageNumber: PaginationLogicArgs['pageNumber']
  private readonly currentPagePattern: PaginationLogicArgs['currentPagePattern']
  private readonly categoryId: PaginationLogicArgs['categoryId']
  private readonly tagId: PaginationLogicArgs['tagId']

  constructor(private readonly args: PaginationLogicArgs) {
    this.pageNumber = this.args.pageNumber
    this.currentPagePattern = this.args.currentPagePattern
    this.categoryId = this.args.categoryId
    this.tagId = this.args.tagId
  }

  execute(): PaginationLogicResponse {
    return {
      linkUrl: this.getPaginationLink(),
    }
  }

  private getPaginationLink(): string {
    switch (this.currentPagePattern) {
      // トップページ
      case PAGE_PATTERN.ROOT:
      case PAGE_PATTERN.PAGES:
        return this.pageNumber === TOP_PAGE_NUM
          ? PAGE_PATTERN.ROOT
          : `${PAGE_PATTERN.PAGES}${this.pageNumber}`
      // カテゴリページ
      case PAGE_PATTERN.CATEGORIES:
      case PAGE_PATTERN.CATEGORY_PAGES:
        return this.pageNumber === TOP_PAGE_NUM
          ? `${PAGE_PATTERN.CATEGORIES}${this.categoryId}`
          : `${PAGE_PATTERN.CATEGORIES}${this.categoryId}${PAGE_PATTERN.PAGES}${this.pageNumber}`
      // タグページ
      case PAGE_PATTERN.TAGS:
      case PAGE_PATTERN.TAG_PAGES:
        return this.pageNumber === TOP_PAGE_NUM
          ? `${PAGE_PATTERN.TAGS}${this.tagId}`
          : `${PAGE_PATTERN.TAGS}${this.tagId}${PAGE_PATTERN.PAGES}${this.pageNumber}`
      default:
        return this.pageNumber === TOP_PAGE_NUM
          ? PAGE_PATTERN.ROOT
          : `${PAGE_PATTERN.PAGES}${this.pageNumber}`
    }
  }
}
