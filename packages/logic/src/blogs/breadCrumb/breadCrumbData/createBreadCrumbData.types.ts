import { Blog, Category, Tag, BreadCrumb } from 'type/microCMS'
import { PAGE_TYPE } from './createBreadCrumbData.const'

export interface CreateBreadCrumbDataLogicArgs {
  path: string
  articles: Blog[]
  categories: Category[]
  tags: Tag[]
}

export interface CreateBreadCrumbDataLogicResponse {
  breadCrumb: BreadCrumb
}

export type PageType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]

export interface CheckPageTypeResponse {
  pageType: PageType
}

export interface CheckIsFixedPageResponse {
  isFixedPage: boolean
}
