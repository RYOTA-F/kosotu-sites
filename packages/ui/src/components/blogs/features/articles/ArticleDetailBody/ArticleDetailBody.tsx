import { ARIA_LABEL } from './ArticleDetailBody.const'
import { ArticleDetailBodyProps } from './ArticleDetailBody.types'
import 'highlight.js/styles/base16/onedark.css'
import style from './ArticleDetailBody.module.css'
import './blogCard.css'

export function ArticleDetailBody({ articleBody }: ArticleDetailBodyProps) {
  return (
    <div
      className={style.blogBody}
      dangerouslySetInnerHTML={{ __html: articleBody }}
      aria-label={ARIA_LABEL.ARTICLE_DETAIL_BODY}
    />
  )
}
