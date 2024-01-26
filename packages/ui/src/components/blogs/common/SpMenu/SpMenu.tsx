'use client'

import { useSpMenu } from './SpMenu.hooks'
import { SpMenuProps } from './SpMenu.types'
import { HamburgerMenu } from '../HamburgerMenu'
import { SideNavigation } from '../SideNavigation'

export function SpMenu({ globalMenu }: SpMenuProps) {
  const { isViewSideNavigation, onChangeIsViewSideNavigation } = useSpMenu()

  return (
    <>
      <HamburgerMenu
        isViewSideNavigation={isViewSideNavigation}
        onClick={onChangeIsViewSideNavigation}
      />
      <SideNavigation
        globalMenu={globalMenu}
        isViewSideNavigation={isViewSideNavigation}
        onClick={onChangeIsViewSideNavigation}
      />
    </>
  )
}
