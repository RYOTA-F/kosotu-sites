import { ARIA_LABEL, TITLE } from './TagDetailHeader.const'
import { TagDetailHeaderProps } from './TagDetailHeader.types'
import { H1 } from '../../../../elements/Heading'
import style from './TagDetailHeader.module.css'

export function TagDetailHeader({ tag }: TagDetailHeaderProps) {
  return (
    <div className={style.h1} aria-label={ARIA_LABEL.TAG_DETAIL_HEADER}>
      <div className={style.headerContainer}>
        <H1>
          {tag.name}
          <span className={style.tag}>
            <span className={style.hypen}>{TITLE.HYPHEN}</span>
            {TITLE.TEXT}
            {TITLE.HYPHEN}
          </span>
        </H1>
      </div>
    </div>
  )
}
