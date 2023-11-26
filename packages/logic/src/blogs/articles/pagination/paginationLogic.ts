/**
 * ページネーション用ロジック
 */
export class PaginationLogic {
  constructor(private articleCount: number, private maxPageCount: number) {}

  /**
   * 総ページ数を取得
   */
  execute() {
    return Math.ceil(this.articleCount / this.maxPageCount)
  }
}
