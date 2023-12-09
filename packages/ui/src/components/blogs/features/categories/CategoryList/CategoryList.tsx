import { ARIA_LABEL, SVG } from './CategoryList.const'
import { CategoryListProps } from './CategoryList.types'
import style from './CategoryList.module.css'
import { CategoryItem } from '../CategoryItem'
import { FolderSvg } from '../../../../elements/Svg'

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <ul className={style.container} aria-label={ARIA_LABEL.CATEGORY_LIST}>
      <div className={style.iconContainer}>
        <FolderSvg
          height={SVG.SIZE}
          width={SVG.SIZE}
          color={SVG.COLOR}
          fill={SVG.COLOR}
        />
      </div>
      {categories.map((category) => (
        <li key={category.id} className={style.listItem}>
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  )
}
