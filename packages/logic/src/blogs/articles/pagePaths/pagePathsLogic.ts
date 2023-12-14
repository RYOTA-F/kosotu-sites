import { PAGE, PAGE_TYPE } from './pagePathsLogic.const'
import { PagePathsLogicArgs } from './pagePathsLogic.types'

export class PagePathsLogic {
  private readonly totalPage: PagePathsLogicArgs['totalPage']
  private readonly type: PagePathsLogicArgs['type']
  private readonly slug: PagePathsLogicArgs['slug']

  constructor(private readonly args: PagePathsLogicArgs) {
    this.totalPage = this.args.totalPage
    this.type = this.args.type
    this.slug = this.args.slug
  }

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
