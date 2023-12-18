import { ARIA_LABEL } from './List.const'
import { ListProps } from './List.types'
import style from './List.module.css'

export function List({ list }: ListProps) {
  return (
    <ul className={style.list} aria-label={ARIA_LABEL.LIST}>
      {list.map((v) => (
        <li key={v} className={style.listItem}>
          <span className={style.listItemDot}>○</span>
          {v}
        </li>
      ))}
    </ul>
  )
}
