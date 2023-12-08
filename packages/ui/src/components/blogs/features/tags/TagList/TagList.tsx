import { ARIA_LABEL, SVG } from './TagList.const'
import { TagListProps } from './TagList.types'
import { TagItem } from '../TagItem/TagItem'
import { TagSvg } from '../../../../elements/Svg'
import style from './TagList.module.css'

export function TagList({ tags }: TagListProps) {
  return (
    <ul aria-label={ARIA_LABEL.TAG_LIST} className={style.tagList}>
      <div className={style.svgContainer}>
        <TagSvg height={SVG.SIZE} width={SVG.SIZE} color={SVG.COLOR} />
      </div>
      {tags.map((v) => (
        <li key={v.id} className={v.id !== tags[0].id ? style.tagItem : ''}>
          <TagItem tag={v} />
        </li>
      ))}
    </ul>
  )
}
