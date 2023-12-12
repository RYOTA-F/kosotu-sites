import { ARIA_LABEL } from './CategoryLabel.const'
import { CategoryLabelProps } from './CategoryLabel.types'
import style from './CategoryLabel.module.css'

export function CategoryLabel({ name }: CategoryLabelProps) {
  return (
    <div className={style.categoryLabel} aria-label={ARIA_LABEL.CATEGORY_LABEL}>
      {name}
    </div>
  )
}
