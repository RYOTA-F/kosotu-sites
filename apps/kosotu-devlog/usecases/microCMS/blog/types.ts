import { IBlog, ITableOfContents, IBreadCrumb, ISeo } from 'type/microCMS'

export interface IGetBlogsParams {
  limit?: boolean
  offset?: number
}

export interface IGetBlogsResponse {
  blogs: IBlog[]
  totalCount: number
}

export type TGetBlogByIdParams = string

export interface IGetBlogByIdResponse {
  blog: IBlog
  tableOfContents: ITableOfContents[]
  breadCrumb: IBreadCrumb
  seo: ISeo
}

export interface IMicroCmsUsecaseBlog {
  getBlogs: (params?: IGetBlogsParams) => Promise<IGetBlogsResponse>
  // getBlogByID: (id: TGetBlogByIdParams) => Promise<IGetBlogByIdResponse>
}
