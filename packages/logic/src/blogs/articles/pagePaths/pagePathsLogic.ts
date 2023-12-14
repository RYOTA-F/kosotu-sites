import { PAGE, PAGE_TYPE } from './pagePathsLogic.const'
import { PagePathsLogicType } from './pagePathsLogic.types'

export class PagePathsLogic {
  constructor(
    private totalPage: number,
    private type: PagePathsLogicType,
    private slug?: string
  ) {}

  execute() {
    if (this.totalPage <= 0) return []

    const pageCount = this.totalPage - 1
    const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 2)

    switch (this.type) {
      case PAGE_TYPE.HOME:
        return pageNumbers.map((id) => ({
          id: id.toString(),
        }))
      case PAGE_TYPE.CATEGORY:
        return pageNumbers.map((id) => ({
          id: this.slug,
          pageId: id.toString(),
        }))
      case PAGE_TYPE.TAG:
        return pageNumbers.map((id) => `${PAGE.TAG}${this.slug}/${id}`)
      default:
        return []
    }
  }
}
