import { PAGE_TYPE } from './pagePathsLogic.const'

export interface PagePathsLogicArgs {
  totalPage: number
  type: PagePathsLogicType
  slug?: string
}

export type PagePathsLogicType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
