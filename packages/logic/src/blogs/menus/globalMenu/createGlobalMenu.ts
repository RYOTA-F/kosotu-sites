import { GlobalMenu } from 'type/microCMS'
import { PAGE } from './createGlobalMenu.const'
import {
  CreateGlobalMenuLogicArgs,
  CreateGlobalMenuLogicResponse,
} from './createGlobalMenu.types'

/**
 * グローバルメニューを作成する Logic
 */
export class CreateGlobalMenuLogic {
  private readonly categories: CreateGlobalMenuLogicArgs['categories']

  constructor(private readonly args: CreateGlobalMenuLogicArgs) {
    this.categories = this.args.categories
  }

  /**
   * グローバルメニュー作成を実行
   */
  execute(): CreateGlobalMenuLogicResponse {
    return {
      globalMenu: [...this.createCategoryMenu(), ...this.getFixedMenu()],
    }
  }

  /**
   * カテゴリメニューを作成
   */
  private createCategoryMenu = (): GlobalMenu[] => {
    // 親カテゴリ一覧
    const parentCategoryMenu: GlobalMenu[] = this.categories
      .filter((v) => v.relation.isParent)
      .map((v) => ({
        label: v.name,
        url: v.id,
        children: [],
      }))

    // 子カテゴリを格納
    parentCategoryMenu.forEach((parent) =>
      this.categories.forEach((children) => {
        if (children.relation.parent[0]?.id === parent.url) {
          parent.children.push({
            label: children.name,
            url: `${PAGE.CATEGORY}${children.id}`,
          })
        }
      })
    )

    // 親カテゴリのURLを変換
    return parentCategoryMenu.map((v) => ({
      label: v.label,
      url: `${PAGE.CATEGORY}${v.url}`,
      children: v.children,
    }))
  }

  /**
   * 固定メニューを取得
   */
  private getFixedMenu = (): GlobalMenu[] => {
    return [
      {
        label: PAGE.SITE_MAP.LABEL,
        url: PAGE.SITE_MAP.URL,
        children: [],
      },
      {
        label: PAGE.PROFILE.LABEL,
        url: PAGE.PROFILE.URL,
        children: [],
      },
    ]
  }
}
