import { HamburgerMenuProps } from './HamburgerMenu.types'
import style from './HamburgerMenu.module.css'

export function HamburgerMenu({
  isViewSideNavigation,
  onClick,
}: HamburgerMenuProps) {
  return (
    <button onClick={onClick} className={style.button}>
      <div className={style.relativeDiv}>
        <span
          className={`${style.span} ${
            isViewSideNavigation ? style.span1Active : style.span1
          }`}
        />
        <span
          className={`${style.span} ${
            isViewSideNavigation ? style.span2Active : style.span2
          }`}
        />
        <span
          className={`${style.span} ${
            isViewSideNavigation ? style.span3Active : style.span3
          }`}
        />
      </div>
    </button>
  )
}
