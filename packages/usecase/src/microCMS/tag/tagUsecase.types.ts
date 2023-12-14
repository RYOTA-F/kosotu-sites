import { Tag } from 'type/microCMS'

export interface MicroCmsTagUsecaseArgs {
  apiKey: string
  baseEndpint: string
  tagEndpoint: string
}

export interface MicroCmsTagUsecaseGetTagsResponse {
  tags: Tag[]
}

export interface MicroCmsTagUsecaseGetTagByIdParams {
  id: string
}

export interface MicroCmsTagUsecaseGetTagByIdResponse {
  tag: Tag
}
