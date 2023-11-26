export class ArticleOffsetCountLogic {
  constructor(private id: string | undefined, private maxPageCount: number) {}

  execute() {
    if (!this.id) return 0
    return parseInt(this.id) * this.maxPageCount - this.maxPageCount
  }
}
