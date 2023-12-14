import { Category } from 'type/microCMS'

export class CategoryPathsLogic {
  constructor(private categories: Category[]) {}

  execute() {
    return this.categories.map((category) => ({ id: category.id }))
  }
}
