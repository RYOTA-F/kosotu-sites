export class PaginationLogic {
  constructor(private articleCount: number, private maxPageCount: number) {}

  execute() {
    return Math.ceil(this.articleCount / this.maxPageCount)
  }
}
