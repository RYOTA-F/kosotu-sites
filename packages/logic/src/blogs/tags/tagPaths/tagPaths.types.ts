import { Tag } from 'type/microCMS'

export interface TagPathsLogicArgs {
  tags: Tag[]
}

export type TagPathsLogicResponse = {
  id: string
}[]
