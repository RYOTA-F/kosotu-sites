import { Category } from 'type/microCMS'

export interface UseCategoriesParams {
  apiKey: string
  baseEndpint: string
  categoryEndpoint: string
}

export interface GetCategoryByIdParams {
  id: string
}

export interface GetCategoryByIdResponse {
  category: Category
}
