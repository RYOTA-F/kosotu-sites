import { ArticleCard } from '../ArticleCard'
import { ARIA_LABEL } from './ArticleCardList.const'
import { ArticleCardListProps } from './ArticleCardList.types'
import style from './ArticleCardList.module.css'

export function ArticleCardList({ articles }: ArticleCardListProps) {
  return (
    <article aria-label={ARIA_LABEL.ARTICLE_CARD_LIST}>
      <ul className={style.article}>
        {articles.map((article) => (
          <li key={article.title} className={style.listItem}>
            <ArticleCard
              title={article.title}
              id={article.id}
              image={article.image}
            />
          </li>
        ))}
      </ul>
    </article>
  )
}
