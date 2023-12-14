import { CategoryPathsLogicArgs } from './categoryPaths.types'

export class CategoryPathsLogic {
  private readonly categories: CategoryPathsLogicArgs['categories']

  constructor(private readonly args: CategoryPathsLogicArgs) {
    this.categories = this.args.categories
  }

  execute() {
    return this.categories.map((category) => ({ id: category.id }))
  }
}
