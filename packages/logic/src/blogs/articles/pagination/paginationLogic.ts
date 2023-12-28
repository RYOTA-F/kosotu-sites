import { PaginationLogicArgs } from './paginationLogic.types'
/**
 * ページネーション  Logic
 */
export class PaginationLogic {
  private readonly articleCount: PaginationLogicArgs['articleCount']
  private readonly maxPageCount: PaginationLogicArgs['maxPageCount']

  constructor(private readonly args: PaginationLogicArgs) {
    this.articleCount = this.args.articleCount
    this.maxPageCount = this.args.maxPageCount
  }

  /**
   * 総ページ数取得を実行
   */
  execute(): number {
    return Math.ceil(this.articleCount / this.maxPageCount)
  }
}
