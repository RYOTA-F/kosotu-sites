import { PAGE, PAGE_TYPE } from './pagePathsLogic.const'
import {
  PagePathsLogicArgs,
  PagePathsLogicResponse,
} from './pagePathsLogic.types'

/**
 * ページのパスを生成する Logic
 */
export class PagePathsLogic {
  private readonly totalPage: PagePathsLogicArgs['totalPage']
  private readonly type: PagePathsLogicArgs['type']
  private readonly slug: PagePathsLogicArgs['slug']

  constructor(private readonly args: PagePathsLogicArgs) {
    this.totalPage = this.args.totalPage
    this.type = this.args.type
    this.slug = this.args.slug
  }

  /**
   * パス生成を実行
   */
  execute(): PagePathsLogicResponse {
    if (this.totalPage <= 0) return []

    const pageCount = this.totalPage - 1
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 2)

    switch (this.type) {
      case PAGE_TYPE.HOME:
        return pageNumbers.map((id) => ({
          id: id.toString(),
        }))
      case PAGE_TYPE.CATEGORY:
      case PAGE_TYPE.TAG:
        return pageNumbers.map((id) => ({
          id: this.slug,
          pageId: id.toString(),
        }))
      default:
        return []
    }
  }
}
