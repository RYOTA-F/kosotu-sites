import { GlobalMenu } from 'type/microCMS'

export interface UseMenuProps {
  apiKey: string
  baseEndpint: string
  categoryEndpoint: string
}

export type UseMenu = (props: UseMenuProps) => {
  /**
   * ヘッダーメニューを取得
   */
  getGlobalMenu: () => Promise<{ globalMenu: GlobalMenu[] }>
}
