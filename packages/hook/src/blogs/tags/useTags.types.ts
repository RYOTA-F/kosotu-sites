import { Tag } from 'type/microCMS'

export interface UseTagsProps {
  apiKey: string
  baseEndpint: string
  tagEndpoint: string
}

export type UseTags = (props: UseTagsProps) => {
  /**
   * IDを指定してタグを一件取得
   */
  getTagById: (id: string) => Promise<{ tag: Tag }>
}
