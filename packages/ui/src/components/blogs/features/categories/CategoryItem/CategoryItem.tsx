import { ARIA_LABEL, CATEGORY_ROOT_PATH } from './CategoryItem.const'
import { CategoryItemProps } from './CategoryItem.types'
import style from './CategoryItem.module.css'

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className={style.categoryItem} aria-label={ARIA_LABEL.CATEGORY_ITEM}>
      <a
        href={`${CATEGORY_ROOT_PATH}${category.id}`}
        className={style.categoryLink}
      >
        {category.name}
      </a>
    </div>
  )
}
