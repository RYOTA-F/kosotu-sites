import { Blog, Category, Tag, BreadCrumb } from 'type/microCMS'

export interface GetBreadCrumbMasterDataParams {
  apiKey: string
  baseEndpint: string
  blogEndpoint: string
  categoryEndpoint: string
  tagEndpoint: string
}

export interface GetBreadCrumbMasterDataResponse {
  blogs: Blog[]
  categories: Category[]
  tags: Tag[]
}

export interface GetBreadCrumbParams {
  path: string
  articles: Blog[]
  categories: Category[]
  tags: Tag[]
}

export interface GetBreadCrumbResponse {
  breadCrumb: BreadCrumb
}

export interface GetIsShowBreadCrumbParams {
  path: string
}

export interface GetIsShowBreadCrumbResponse {
  isShowBreadCrumb: boolean
}
