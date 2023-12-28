import { ARIA_LABEL } from '../const'
import { HeadingProps } from '../types'
import style from './H3.module.css'

export function H3({ children }: HeadingProps) {
  return (
    <h2 className={style.heading} aria-label={ARIA_LABEL.H3}>
      {children}
    </h2>
  )
}
