import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category'
import { CreateGlobalMenuLogic } from 'logic/blogs/menus/globalMenu/createGlobalMenu'
import { UseMenu } from './useMenu.types'

/**
 * メニュー取得用カスタムフック
 */
export const useMenu: UseMenu = ({ apiKey, baseEndpint, categoryEndpoint }) => {
  const microCmsCategoryUsecase = new MicroCmsCategoryUsecase({
    apiKey,
    baseEndpint,
    categoryEndpoint,
  })

  /**
   * ヘッダーメニューを取得
   */
  const getGlobalMenu = async () => {
    const { categories } = await microCmsCategoryUsecase.getCategories()

    return new CreateGlobalMenuLogic({ categories }).execute()
  }

  return {
    getGlobalMenu,
  }
}
