import { PaginationLogicArgs } from './paginationLogic.types'
/**
 * ページネーション用ロジック
 */
export class PaginationLogic {
  private readonly articleCount: PaginationLogicArgs['articleCount']
  private readonly maxPageCount: PaginationLogicArgs['maxPageCount']

  constructor(private readonly args: PaginationLogicArgs) {
    this.articleCount = this.args.articleCount
    this.maxPageCount = this.args.maxPageCount
  }

  /**
   * 総ページ数を取得
   */
  execute() {
    return Math.ceil(this.articleCount / this.maxPageCount)
  }
}
