import { ArticleFiltersLogicArgs } from './articleFilters.types'

/**
 * 投稿取得のフィルターを生成する Logic
 */
export class ArticleFiltersLogic {
  private readonly categoryId: ArticleFiltersLogicArgs['categoryId']
  private readonly tagId: ArticleFiltersLogicArgs['tagId']

  constructor(private readonly args: ArticleFiltersLogicArgs) {
    this.categoryId = this.args.categoryId
    this.tagId = this.args.tagId
  }

  /**
   * フィルター生成を実行
   */
  execute(): string {
    return this.getFiltersString()
  }

  private getFiltersString(): string {
    switch (true) {
      case !this.categoryId && !this.tagId:
        return ''
      case this.categoryId !== undefined:
        return `filters=categories[contains]${this.categoryId}`
      case this.tagId !== undefined:
        return `filters=tags[contains]${this.tagId}`
      default:
        return ''
    }
  }
}
