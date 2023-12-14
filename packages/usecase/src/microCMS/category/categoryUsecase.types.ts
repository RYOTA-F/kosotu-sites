import { Category } from 'type/microCMS'

export interface MicroCmsCategoryUsecaseArgs {
  apiKey: string
  baseEndpint: string
  categoryEndpoint: string
}

export interface MicroCmsCategoryUsecaseGetCategoriesResponse {
  categories: Category[]
}

export interface MicroCmsCategoryUsecaseGetCategoryByIdParams {
  id: string
}

export interface MicroCmsCategoryUsecaseGetCategoryByIdResponse {
  category: Category
}
