import { ARIA_LABEL } from './SitemapItem.const'
import { SitemapItemProps } from './SitemapItem.types'
import style from './SitemapItem.module.css'

export function SitemapItem({ type, label, url }: SitemapItemProps) {
  return (
    <>
      {type === 'top' && (
        <div className={style.top} aria-label={ARIA_LABEL.SITEMAP}>
          <a href={url}>{label}</a>
          <div className={style.topBar} />
        </div>
      )}

      {type === 'parent' && (
        <div className={style.parent} aria-label={ARIA_LABEL.SITEMAP}>
          <a href={url}>{label}</a>
        </div>
      )}

      {type === 'children' && (
        <div className={style.children} aria-label={ARIA_LABEL.SITEMAP}>
          <a href={url}>{label}</a>
        </div>
      )}

      {type === 'blog' && (
        <div className={style.blog} aria-label={ARIA_LABEL.SITEMAP}>
          <a href={url}>{label}</a>
        </div>
      )}
    </>
  )
}
