import { ARIA_LABEL, ROOT_PATH } from './ArticleCard.const'
import { ArticleCardProps } from './ArticleCard.types'
import style from './ArticleCard.module.css'

export function ArticleCard({ id, title, image }: ArticleCardProps) {
  return (
    <div className={style.articleCard} aria-label={ARIA_LABEL.ARTICLE_CARD}>
      <a href={`${ROOT_PATH}${id}`}>
        <div className={style.imageContainer}>
          {/* eslint-disable-next-line */}
          <img
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            className={style.image}
          />
        </div>
      </a>
    </div>
  )
}
