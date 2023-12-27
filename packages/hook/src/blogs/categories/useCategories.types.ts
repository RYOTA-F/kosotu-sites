import { Category } from 'type/microCMS'

export interface UseCategoriesProps {
  apiKey: string
  baseEndpint: string
  categoryEndpoint: string
}

export type UseCategories = (props: UseCategoriesProps) => {
  /**
   * IDを指定してカテゴリを一件取得
   */
  getCategoryById: (id: string) => Promise<{ category: Category }>
}
