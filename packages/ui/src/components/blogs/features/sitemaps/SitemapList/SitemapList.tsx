import { ARIA_LABEL } from './SitemapList.const'
import { SitemapListProps } from './SitemapList.types'
import { SitemapItem, SITEMAP_TYPE } from '../SitemapItem'
import style from './SitemapList.module.css'

export function SitemapList({ sitemap, topText, topUrl }: SitemapListProps) {
  if (!sitemap.length) return null

  return (
    <div aria-label={ARIA_LABEL.SITEMAP_LIST}>
      <ul className={style.top}>
        <SitemapItem type={SITEMAP_TYPE.TOP} label={topText} url={topUrl} />
        {/* 親カテゴリ */}
        {sitemap.map((parent) => (
          <li key={parent.id} className={style.parent}>
            <SitemapItem
              type={SITEMAP_TYPE.PARENT}
              label={parent.name}
              url={parent.url}
            />

            {/* 子カテゴリ */}
            {parent.children.length ? (
              <ul>
                {parent.children.map((children) => (
                  <li key={children.id} className={style.children}>
                    <SitemapItem
                      type={SITEMAP_TYPE.CHILDREN}
                      label={children.name}
                      url={children.url}
                    />

                    {/* 投稿 */}
                    {children.blogs.length ? (
                      <ul>
                        {children.blogs.map((blog) => (
                          <li key={blog.title} className={style.blog}>
                            <SitemapItem
                              type={SITEMAP_TYPE.BLOG}
                              label={blog.title}
                              url={blog.url}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
