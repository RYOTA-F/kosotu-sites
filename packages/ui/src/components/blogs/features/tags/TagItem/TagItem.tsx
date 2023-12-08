import { ARIA_LABEL, TAG_ROOT_PATH } from './TagItem.const'
import { TagItemProps } from './TagItem.types'
import style from './TagItem.module.css'

export function TagItem({ tag }: TagItemProps) {
  return (
    <div className={style.tagItem} aria-label={ARIA_LABEL.TAG_ITEM}>
      <a href={`${TAG_ROOT_PATH}${tag.id}`} className={style.tagLink}>
        {tag.name}
      </a>
    </div>
  )
}
