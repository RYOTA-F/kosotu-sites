import { ARIA_LABEL } from './Label.const'
import { LabelProps } from './Label.types'
import style from './Label.module.css'

export function Label({ children }: LabelProps) {
  return (
    <p className={style.label} aria-label={ARIA_LABEL.LABEL}>
      {children}
    </p>
  )
}
