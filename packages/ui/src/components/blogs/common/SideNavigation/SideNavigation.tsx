import { ChevronRightSvg } from '../../../elements/Svg'
import { ARIA_LABEL, MENU_LABEL } from './SideNavigation.const'
import { SideNavigationProps } from './SideNavigation.types'
import style from './SideNavigation.module.css'

export function SideNavigation({
  globalMenu,
  isViewSideNavigation,
  onClick,
}: SideNavigationProps) {
  return (
    <nav
      className={`${style.nav} ${
        isViewSideNavigation ? style.navVisible : style.navHidden
      }`}
      aria-label={ARIA_LABEL}
    >
      <div className={style.container}>
        <h2 className={style.title}>{MENU_LABEL}</h2>
        <ul className={style.menu}>
          {globalMenu.map((parent) => (
            <div key={parent.label}>
              <li className={style.menuItem}>
                <a
                  href={parent.url}
                  className={`${style.link} ${style.linkHover}`}
                  onClick={onClick}
                >
                  <span className={style.icon}>
                    <ChevronRightSvg height={12} width={12} />
                  </span>
                  {parent.label}
                </a>
              </li>

              {parent.children.map((children) => (
                <li key={children.label} className={style.subMenuItem}>
                  <a
                    href={children.url}
                    className={`${style.link} ${style.linkHover}`}
                    onClick={onClick}
                  >
                    <span className={style.icon}>
                      <ChevronRightSvg height={12} width={12} />
                    </span>
                    {children.label}
                  </a>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  )
}
