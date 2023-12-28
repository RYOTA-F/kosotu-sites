import { Blog, Category, Tag, BreadCrumb } from 'type/microCMS'

export interface GetBreadCrumbMasterDataProps {
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

export interface GetBreadCrumbProps {
  path: string
  articles: Blog[]
  categories: Category[]
  tags: Tag[]
}

export interface GetBreadCrumbResponse {
  breadCrumb: BreadCrumb
}

export type UseBreadCrumb = () => {
  /**
   * パンクズに必要なマスターデータを取得
   */
  getBreadCrumbMasterData: (
    props: GetBreadCrumbMasterDataProps
  ) => Promise<GetBreadCrumbMasterDataResponse>

  /**
   * パンクズ情報を取得
   */
  getBreadCrumb: (props: GetBreadCrumbProps) => GetBreadCrumbResponse
}
