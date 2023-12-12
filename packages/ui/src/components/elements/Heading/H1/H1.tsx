import { ARIA_LABEL } from '../const'
import { IHeadingDefault } from '../types'
import style from './H1.module.css'

export function H1({ children }: IHeadingDefault) {
  return (
    <h1 className={style.h1} aria-label={ARIA_LABEL.H1}>
      {children}
      <div className={style.border} />
    </h1>
  )
}
