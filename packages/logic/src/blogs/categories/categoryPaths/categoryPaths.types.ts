import { Category } from 'type/microCMS'

export interface CategoryPathsLogicArgs {
  categories: Category[]
}

export type CategoryPathsLogicResponse = {
  id: string
}[]
