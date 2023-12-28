import { Tag } from 'type/microCMS'

export interface UseTagsParams {
  apiKey: string
  baseEndpint: string
  tagEndpoint: string
}

export interface GetTagByIdParams {
  id: string
}

export interface GetTagByIdResponse {
  tag: Tag
}
