import { Tag } from 'type/microCMS'

export interface MicroCmsTagUsecaseGetTagsResponse {
  tags: Tag[]
}

export interface MicroCmsTagUsecaseGetTagByIdParams {
  id: string
}

export interface MicroCmsTagUsecaseGetTagByIdResponse {
  tag: Tag
}
