import { Category } from 'type/microCMS'

export interface MicroCmsCategoryUsecaseGetCategoriesResponse {
  categories: Category[]
}

export interface MicroCmsCategoryUsecaseGetCategoryByIdParams {
  id: string
}

export interface MicroCmsCategoryUsecaseGetCategoryByIdResponse {
  category: Category
}
