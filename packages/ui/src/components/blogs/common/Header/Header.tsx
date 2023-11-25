import { ARIA_LABEL, ICON } from './Header.const'
import { HeaderProps } from './Header.types'
import style from './Header.module.css'
import { AccordionMenu } from '../AccordionMenu'
import { TwitterSvg } from '../../../elements/Svg'

export function Header({
  siteName,
  catchPhrase,
  twitterUrl,
  globalMenu,
}: HeaderProps) {
  return (
    <>
      <div className={style.container}>
        <span className={style.catchPhrase}>{catchPhrase}</span>
        <ul className={style.socialLinks}>
          <li className={style.socialLinkItem}>
            {twitterUrl && (
              <a href={twitterUrl} target="_blank">
                <TwitterSvg
                  height={ICON.SIZE}
                  width={ICON.SIZE}
                  color={ICON.COLOR}
                />
              </a>
            )}
          </li>
        </ul>
      </div>

      <header className={style.header} aria-label={ARIA_LABEL.HEADER}>
        <a href="/">
          <h1 className={style.headerTitle}>{siteName}</h1>
        </a>
        {!!globalMenu.length && (
          <ul className={style.menu}>
            {globalMenu.map((v) => (
              <li key={v.label}>
                <AccordionMenu
                  label={v.label}
                  path={v.url}
                  menuList={v.children.map((children) => ({
                    label: children.label,
                    path: children.url,
                  }))}
                />
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  )
}

export default Header
