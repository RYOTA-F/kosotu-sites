import { BreadCrumb } from 'type/microCMS'
import {
  PAGE_TYPE,
  PAGE_NAME,
  EMPTY_STRING,
} from './createBreadCrumbData.const'
import {
  CreateBreadCrumbDataLogicArgs,
  CreateBreadCrumbDataLogicResponse,
  CheckPageTypeResponse,
  CheckIsFixedPageResponse,
  PageType,
} from './createBreadCrumbData.types'

/**
 * パンクズデータ作成 Logic
 */
export class CreateBreadCrumbDataLogic {
  private readonly path: CreateBreadCrumbDataLogicArgs['path']
  private readonly articles: CreateBreadCrumbDataLogicArgs['articles']
  private readonly categories: CreateBreadCrumbDataLogicArgs['categories']
  private readonly tags: CreateBreadCrumbDataLogicArgs['tags']

  constructor(public readonly args: CreateBreadCrumbDataLogicArgs) {
    this.path = this.args.path
    this.articles = this.args.articles
    this.categories = this.args.categories
    this.tags = this.args.tags
  }

  /**
   * パンクズデータ作成を実行
   */
  execute(): CreateBreadCrumbDataLogicResponse {
    // ページタイプを判定
    const { pageType } = this.checkPageType()

    // 固定ページの場合
    const { isFixedPage } = this.checkIsFixedPage({ pageType })
    if (isFixedPage) return this.getFixedPageBreadCrumbData({ pageType })

    // 記事ページの場合
    if (pageType === PAGE_TYPE.ARTICLE)
      return this.getArticlePageBreadCrumbData()

    // カテゴリページの場合
    if (pageType === PAGE_TYPE.CATEGORY)
      return this.getCategoryPageBreadCrumbData()

    // タグページの場合
    if (pageType === PAGE_TYPE.TAG) return this.getTagPageBreadCrumbData()

    return { breadCrumb: this.getDefaultBreadCrumbData() }
  }

  /**
   * ページタイプを判定
   */
  private checkPageType(): CheckPageTypeResponse {
    const getType = () => {
      switch (true) {
        case this.path.includes(PAGE_TYPE.ARTICLE):
          return PAGE_TYPE.ARTICLE
        case this.path.includes(PAGE_TYPE.CATEGORY):
          return PAGE_TYPE.CATEGORY
        case this.path.includes(PAGE_TYPE.TAG):
          return PAGE_TYPE.TAG
        case this.path.includes(PAGE_TYPE.PROFILE):
          return PAGE_TYPE.PROFILE
        case this.path.includes(PAGE_TYPE.SITE_MAP):
          return PAGE_TYPE.SITE_MAP
        case this.path.includes(PAGE_TYPE.PRIVACY_POLICY):
          return PAGE_TYPE.PRIVACY_POLICY
        case this.path.includes(PAGE_TYPE.DISCLAIMER):
          return PAGE_TYPE.DISCLAIMER
        default:
          return PAGE_TYPE.ROOT
      }
    }

    return {
      pageType: getType(),
    }
  }

  /**
   * 固定ページか判定
   */
  private checkIsFixedPage({
    pageType,
  }: {
    pageType: PageType
  }): CheckIsFixedPageResponse {
    switch (pageType) {
      case PAGE_TYPE.PROFILE:
      case PAGE_TYPE.SITE_MAP:
      case PAGE_TYPE.PRIVACY_POLICY:
      case PAGE_TYPE.DISCLAIMER:
        return { isFixedPage: true }
      default:
        return { isFixedPage: false }
    }
  }

  /**
   * 記事ページのパンクズデータを取得
   */
  private getArticlePageBreadCrumbData(): CreateBreadCrumbDataLogicResponse {
    // 記事
    const currentArticle = this.articles.find((article) =>
      this.path.includes(article.id)
    )
    // 子カテゴリ
    const childCategory = currentArticle?.categories[0]
    // カテゴリの依存関係
    const relation = childCategory?.relation
    // 親カテゴリ
    const parentCategory = this.categories.find(
      (category) => category.id === relation?.parent[0].id
    )

    // 記事タイトル
    const currentName = currentArticle?.title ?? EMPTY_STRING
    // 子カテゴリID
    const categoryChildId = childCategory?.id ?? EMPTY_STRING
    // 子カテゴリ名
    const categoryChildName = childCategory?.name ?? EMPTY_STRING
    // 親カテゴリID
    const categoryParentId = parentCategory ? parentCategory?.id : EMPTY_STRING
    // 親カテゴリ名
    const categoryParentName = parentCategory
      ? parentCategory?.name
      : EMPTY_STRING

    return {
      breadCrumb: {
        currentName,
        categoryParentId,
        categoryParentName,
        categoryChildId,
        categoryChildName,
      },
    }
  }

  /**
   * カテゴリページのパンクズデータを取得
   */
  private getCategoryPageBreadCrumbData(): CreateBreadCrumbDataLogicResponse {
    const currentCategory = this.categories.find((category) =>
      this.path.includes(category.id)
    )
    const relation = currentCategory?.relation
    const isParent = relation?.isParent

    const categoryParentId = isParent
      ? EMPTY_STRING
      : relation?.parent[0].id ?? EMPTY_STRING

    const categoryParentName = isParent
      ? EMPTY_STRING
      : relation?.parent[0].name ?? EMPTY_STRING

    return {
      breadCrumb: {
        ...this.getDefaultBreadCrumbData(),
        currentName: currentCategory?.name ?? EMPTY_STRING,
        categoryParentId,
        categoryParentName,
      },
    }
  }

  /**
   * タグページのパンクズデータを取得
   */
  private getTagPageBreadCrumbData(): CreateBreadCrumbDataLogicResponse {
    const currentTag = this.tags.find((tag) => this.path.includes(tag.id))
    const tagName = currentTag?.name || 'タグ'

    return {
      breadCrumb: {
        ...this.getDefaultBreadCrumbData(),
        currentName: tagName,
      },
    }
  }

  /**
   * 固定ページのパンクズデータを取得
   */
  private getFixedPageBreadCrumbData({
    pageType,
  }: {
    pageType: PageType
  }): CreateBreadCrumbDataLogicResponse {
    const getCurrentName = () => {
      switch (pageType) {
        case PAGE_TYPE.PROFILE:
          return PAGE_NAME.PROFILE
        case PAGE_TYPE.SITE_MAP:
          return PAGE_NAME.SITE_MAP
        case PAGE_TYPE.PRIVACY_POLICY:
          return PAGE_NAME.PRIVACY_POLICY
        case PAGE_TYPE.DISCLAIMER:
          return PAGE_NAME.DISCLAIMER
        default:
          return EMPTY_STRING
      }
    }

    return {
      breadCrumb: {
        ...this.getDefaultBreadCrumbData(),
        currentName: getCurrentName(),
      },
    }
  }

  /**
   * デフォルトのパンクズデータを取得
   */
  private getDefaultBreadCrumbData(): BreadCrumb {
    return {
      currentName: EMPTY_STRING,
      categoryParentId: EMPTY_STRING,
      categoryParentName: EMPTY_STRING,
      categoryChildId: EMPTY_STRING,
      categoryChildName: EMPTY_STRING,
    }
  }
}

export { PAGE_TYPE }
