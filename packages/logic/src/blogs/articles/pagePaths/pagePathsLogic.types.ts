import { PAGE_TYPE } from './pagePathsLogic.const'

export type PagePathsLogicType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
