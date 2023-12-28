import { Blog, Category, Sitemap, ChildrenCategories } from 'type/microCMS'
import { PAGE } from './createSitemapData.const'
import {
  CreateSitemapDataLogicArgs,
  CreateSitemapDataLogicResponse,
} from './createSitemapData.types'

/**
 * サイトマップ情報を作成する Logic
 */
export class CreateSitemapDataLogic {
  constructor(private args: CreateSitemapDataLogicArgs) {}

  /**
   * サイトマップ情報作成を実行
   */
  execute(): CreateSitemapDataLogicResponse {
    const convertedBlogs = this.convertBlogsData(this.args.blogs)
    const convertedParentCategories = this.convertParentCategoriesData(
      this.args.categories
    )
    const convertedChildCategories = this.convertChildrenCategoriesData(
      this.args.categories
    )

    return this.createSitemaps({
      convertedBlogs,
      convertedParentCategories,
      convertedChildCategories,
    })
  }

  /**
   * 「投稿」を必要な情報に加工
   */
  private convertBlogsData(blogs: Blog[]) {
    return blogs.map((v) => ({
      title: v.title,
      url: `${PAGE.ARTICLES}${v.id}`,
      category: v.categories[0].id,
    }))
  }

  /**
   * 「親カテゴリ」を必要な情報に加工
   */
  private convertParentCategoriesData(categories: Category[]) {
    const filterCategories = categories.filter((v) => v.relation.isParent)

    return filterCategories.map(
      (v) =>
        ({
          id: v.id,
          name: v.name,
          url: `${PAGE.CATEGORY}${v.id}`,
          children: [],
        } as Sitemap)
    )
  }

  /**
   * 「子カテゴリ」を必要な情報に加工
   */
  private convertChildrenCategoriesData = (categories: Category[]) => {
    const filterCategories = categories.filter((v) => !v.relation.isParent)

    return filterCategories.map(
      (v) =>
        ({
          id: v.id,
          name: v.name,
          url: `${PAGE.CATEGORY}${v.id}`,
          parent: v.relation.parent[0].id,
          blogs: [],
        } as ChildrenCategories)
    )
  }

  /**
   * サイトマップを作成
   */
  private createSitemaps({
    convertedBlogs,
    convertedParentCategories,
    convertedChildCategories,
  }: {
    convertedBlogs: ChildrenCategories['blogs']
    convertedParentCategories: Sitemap[]
    convertedChildCategories: ChildrenCategories[]
  }) {
    // 子カテゴリに紐づく投稿一覧を格納
    convertedChildCategories.forEach((v) => {
      v.blogs = convertedBlogs.filter((blog) => blog.category === v.id)
    })

    // 親カテゴリに紐づく子カテゴリ一覧を取得
    convertedParentCategories.forEach((v) => {
      v.children = convertedChildCategories.filter(
        (category) => category.parent === v.id
      )
    })

    return { sitemaps: convertedParentCategories }
  }
}
