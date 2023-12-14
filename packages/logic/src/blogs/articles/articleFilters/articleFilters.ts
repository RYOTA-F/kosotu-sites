import { ArticleFiltersLogicData } from './articleFilters.types'

export class ArticleFiltersLogic {
  constructor(private readonly data: ArticleFiltersLogicData) {}

  execute() {
    return this.getFiltersString()
  }

  private getFiltersString() {
    switch (true) {
      case !this.data.categoryId && !this.data.tagId:
        return ''
      case this.data.categoryId !== undefined:
        return `filters=categories[contains]${this.data.categoryId}`
      case this.data.tagId !== undefined:
        return `filters=tags[contains]${this.data.tagId}`
      default:
        return ''
    }
  }
}
