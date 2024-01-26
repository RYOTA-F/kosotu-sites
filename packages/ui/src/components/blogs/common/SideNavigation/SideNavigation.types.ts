import { GlobalMenu } from 'type/microCMS'

export interface SideNavigationProps {
  globalMenu: GlobalMenu[]
  isViewSideNavigation: boolean
  onClick: () => void
}
