import { COPY_MARK, FooterProps, ARIA_LABEL } from '.'
import style from './Footer.module.css'

export function Footer({ siteName, menuList }: FooterProps) {
  return (
    <footer className={style.container} aria-label={ARIA_LABEL.FOOTER}>
      <ul className={style.menu}>
        {menuList.map((menu) => (
          <li key={menu.url} className={style.menuItem}>
            <a href={menu.url} target="_blank">
              <span className={style.linkText}>{menu.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className={style.copyContainer}>
        <span className={style.copyMark}>{COPY_MARK}</span>
        <span className={style.copyText}>{siteName}</span>
      </div>
    </footer>
  )
}
