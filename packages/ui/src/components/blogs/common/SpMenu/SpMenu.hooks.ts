import { useState } from 'react'

export const useSpMenu = () => {
  const [isViewSideNavigation, setIsViewSideNavigation] = useState(false)

  /**
   * サイドナビゲーションの開閉状態を変更
   */
  const onChangeIsViewSideNavigation = () => {
    setIsViewSideNavigation(!isViewSideNavigation)
  }

  return {
    isViewSideNavigation,
    onChangeIsViewSideNavigation,
  }
}
