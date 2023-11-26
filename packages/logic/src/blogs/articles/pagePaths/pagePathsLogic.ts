import { PAGE } from './pagePathsLogic.const'
import { PagePathsLogicType } from './pagePathsLogic.types'

export class PagePathsLogic {
  constructor(
    private totalArticleCount: number,
    private type: PagePathsLogicType,
    private slug?: string
  ) {}

  execute() {
    if (this.totalArticleCount <= 0) return []

    const pageCount = this.totalArticleCount - 1
    const pageNumbers = [...new Array(pageCount).keys()].map((_, i) => i + 2)

    switch (this.type) {
      case 'home':
        return pageNumbers.map((id) => ({ id: id.toString() }))
      case 'category':
        return pageNumbers.map((id) => `${PAGE.CATEGORY}${this.slug}/${id}`)
      case 'tag':
        return pageNumbers.map((id) => `${PAGE.TAG}${this.slug}/${id}`)
      default:
        return []
    }
  }
}
