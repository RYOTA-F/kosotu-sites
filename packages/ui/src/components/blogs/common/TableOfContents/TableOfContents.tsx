import { ARIA_LABEL, TABLE_OF_CONTENTS, SVG } from './TableOfContents.const'
import { TableOfContentsProps } from './TableOfContents.types'
import { ListSvg } from '../../../elements/Svg'
import style from './TableOfContents.module.css'

export function TableOfContents({ tableOfContents }: TableOfContentsProps) {
  return (
    <div aria-label={ARIA_LABEL.TABLE_OF_CONTENTS} className={style.container}>
      <h2 className={style.title}>
        <span className={style.icon}>
          <ListSvg height={SVG.SIZE} width={SVG.SIZE} />
        </span>
        {TABLE_OF_CONTENTS.TITLE}
      </h2>
      <ul className={style.list}>
        {tableOfContents.map((v) => {
          if (v.type === TABLE_OF_CONTENTS.H2)
            return (
              <li key={v.id} className={style.listItemH2}>
                <span className={style.bullet}>・| </span>
                <span className={style.link}>
                  <a href={`#${v.id}`} className={style.link}>
                    {v.text}
                  </a>
                </span>
              </li>
            )
          if (v.type === TABLE_OF_CONTENTS.H3)
            return (
              <li key={v.id} className={style.listItemH3}>
                <span className={style.bullet}>・| </span>
                <span className={style.link}>
                  <a href={`#${v.id}`}>{v.text}</a>
                </span>
              </li>
            )
        })}
      </ul>
    </div>
  )
}
