import { ArticleOffsetCountLogicArgs } from './articleOffsetCountLogic.types'

/**
 * 投稿のオフセット量を生成する Logic
 */
export class ArticleOffsetCountLogic {
  private readonly id: ArticleOffsetCountLogicArgs['id']
  private readonly maxPageCount: ArticleOffsetCountLogicArgs['maxPageCount']

  constructor(private readonly args: ArticleOffsetCountLogicArgs) {
    this.id = this.args.id
    this.maxPageCount = this.args.maxPageCount
  }

  /**
   * オフセット量生成を実行
   */
  execute(): number {
    if (!this.id) return 0
    return parseInt(this.id) * this.maxPageCount - this.maxPageCount
  }
}
