import { ArticleOffsetCountLogicArgs } from './articleOffsetCountLogic.types'

export class ArticleOffsetCountLogic {
  private readonly id: ArticleOffsetCountLogicArgs['id']
  private readonly maxPageCount: ArticleOffsetCountLogicArgs['maxPageCount']

  constructor(private readonly args: ArticleOffsetCountLogicArgs) {
    this.id = this.args.id
    this.maxPageCount = this.args.maxPageCount
  }

  execute() {
    if (!this.id) return 0
    return parseInt(this.id) * this.maxPageCount - this.maxPageCount
  }
}
