import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category'
import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'
import {
  CreateBreadCrumbDataLogic,
  PAGE_TYPE,
} from 'logic/blogs/breadCrumb/breadCrumbData/createBreadCrumbData'
import {
  UseBreadCrumb,
  GetBreadCrumbMasterDataProps,
  GetBreadCrumbMasterDataResponse,
  GetBreadCrumbProps,
  GetBreadCrumbResponse,
  GetIsShowBreadCrumbProps,
  GetIsShowBreadCrumbResponse,
} from './useBreadCrumb.types'

/**
 * パンクズ取得用 Custom Hooks
 */
export const useBreadCrumb: UseBreadCrumb = () => {
  /**
   * パンクズに必要なマスターデータを取得
   */
  const getBreadCrumbMasterData = async ({
    apiKey,
    baseEndpint,
    blogEndpoint,
    categoryEndpoint,
    tagEndpoint,
  }: GetBreadCrumbMasterDataProps): Promise<GetBreadCrumbMasterDataResponse> => {
    const { blogs } = await new MicroCmsBlogUsecase({
      apiKey,
      baseEndpint,
      blogEndpoint,
    }).getBlogs({
      limit: false,
      offset: 0,
      maxArticleCount: 9999,
    })

    const { categories } = await new MicroCmsCategoryUsecase({
      apiKey,
      baseEndpint,
      categoryEndpoint,
    }).getCategories()

    const { tags } = await new MicroCmsTagUsecase({
      apiKey,
      baseEndpint,
      tagEndpoint,
    }).getTags()

    return {
      blogs,
      categories,
      tags,
    }
  }

  /**
   * パンクズ情報を取得
   */
  const getBreadCrumb = ({
    path,
    articles,
    categories,
    tags,
  }: GetBreadCrumbProps): GetBreadCrumbResponse => {
    return new CreateBreadCrumbDataLogic({
      path,
      articles,
      categories,
      tags,
    }).execute()
  }

  /**
   * パンクズの表示条件を取得
   */
  const getIsShowBreadCrumb = ({
    path,
  }: GetIsShowBreadCrumbProps): GetIsShowBreadCrumbResponse => {
    const isRoot = path === PAGE_TYPE.ROOT
    const isPages = path.includes(PAGE_TYPE.PAGES)
    const isCategory = path.includes(PAGE_TYPE.CATEGORY)
    const isTag = path.includes(PAGE_TYPE.TAG)

    const isShowBreadCrumb = !(isRoot || isPages) || isCategory || isTag

    return {
      isShowBreadCrumb,
    }
  }

  return {
    getBreadCrumbMasterData,
    getBreadCrumb,
    getIsShowBreadCrumb,
  }
}
