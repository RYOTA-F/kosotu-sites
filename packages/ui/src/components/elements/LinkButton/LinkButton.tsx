import { LinkButtonProps } from './LinkButton.types'
import { ARIA_LABEL } from './LinkButton.const'
import style from './LinkButton.module.css'

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <a
      href={href}
      className={style.linkButton}
      aria-label={ARIA_LABEL.LINK_BUTTON}
    >
      {children}
    </a>
  )
}
