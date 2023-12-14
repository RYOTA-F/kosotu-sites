import { ARIA_LABEL, IMAGE, ICON } from './ArticleDetailHeader.const'
import { ArticleDetailHeaderProps } from './ArticleDetailHeader.types'
import style from './ArticleDetailHeader.module.css'
import { TimeSvg } from '../../../../elements/Svg'
import { CategoryList } from '../../categories/CategoryList'
import { TagList } from '../../tags/TagList'
import { DateFormatLogic } from 'logic/blogs/common/date/formatDateLogic'

export function ArticleDetailHeader({
  article,
  welcomeMessage,
  thanksMessage,
}: ArticleDetailHeaderProps) {
  return (
    <section
      className={style.section}
      aria-label={ARIA_LABEL.ARTICLE_DETAIL_HEADER}
    >
      <h1 className={style.h1}>{article.title}</h1>

      <div className={style.detailContainer}>
        <div className={style.categoryContainer}>
          <CategoryList categories={[article.categories[0]]} />
        </div>
        <div className={style.tagContainer}>
          <TagList tags={article.tags} />
        </div>
        <div className={style.timeContainer}>
          <TimeSvg height={ICON.TIME_ICON_SIZE} width={ICON.TIME_ICON_SIZE} />
          <time
            dateTime={
              article.oldPublishedAt
                ? new DateFormatLogic({
                    date: article.oldPublishedAt,
                  }).formatYYYYMMDD()
                : new DateFormatLogic({
                    date: article.publishedAt,
                  }).formatYYYYMMDD()
            }
            className={style.timeItem}
          >
            {article.oldPublishedAt
              ? new DateFormatLogic({
                  date: article.oldPublishedAt,
                }).formatYYYYMMDD()
              : new DateFormatLogic({
                  date: article.publishedAt,
                }).formatYYYYMMDD()}
          </time>
        </div>
      </div>

      <figure className={style.figure}>
        <img
          src={article.image.url}
          alt={IMAGE.ALT}
          width={article.image.width}
          height={article.image.height}
          className={style.img}
        />
      </figure>
      <div className={style.message}>
        {welcomeMessage && (
          <p className={style.welcomeMessage}>{welcomeMessage}</p>
        )}
        {thanksMessage && (
          <p className={style.thanksMessage}>{thanksMessage}</p>
        )}
        <p className={style.description}>{article.description}</p>
      </div>
    </section>
  )
}
