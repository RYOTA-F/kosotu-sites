'use client'

import { usePathname } from 'next/navigation'
import { useBreadCrumb } from 'hook/blogs/breadCrumb/useBreadCrumb'
import { ARIA_LABEL, HOME, PAGE } from './BreadCrumb.const'
import { BreadCrumbProps } from './BreadCrumb.types'
import style from './BreadCrumb.module.css'
import { HomeSvg, FolderSvg } from '../../../elements/Svg'

export function BreadCrumb({ articles, categories, tags }: BreadCrumbProps) {
  const path = usePathname()

  const { getBreadCrumb, getIsShowBreadCrumb } = useBreadCrumb()
  const { isShowBreadCrumb } = getIsShowBreadCrumb({ path })
  const { breadCrumb } = getBreadCrumb({
    path,
    articles,
    categories,
    tags,
  })

  return (
    <>
      {isShowBreadCrumb && (
        <ol className={style.breadCrumb} aria-label={ARIA_LABEL.BREAD_CRUMB}>
          <li>
            <a href={PAGE.ROOT} className={style.breadCrumbLink}>
              <HomeSvg width={HOME.SVG.SIZE} height={HOME.SVG.SIZE} />
              <span className={style.text}>{HOME.TEXT}</span>
            </a>
          </li>

          {breadCrumb.categoryParentId && breadCrumb.categoryParentName && (
            <li className={style.breadCrumbItem}>
              <span className={style.breadCrumbArrow}>{' >'}</span>
              <a
                href={`${PAGE.CATEGORY}${breadCrumb.categoryParentId}`}
                className={style.breadCrumbLink}
              >
                <FolderSvg width={HOME.SVG.SIZE} height={HOME.SVG.SIZE} />
                <span className={style.text}>
                  {breadCrumb.categoryParentName}
                </span>
              </a>
            </li>
          )}

          {breadCrumb.categoryChildId && breadCrumb.categoryChildName && (
            <li className={style.breadCrumbItem}>
              <span className={style.breadCrumbArrow}>{' >'}</span>
              <a
                href={`${PAGE.CATEGORY}${breadCrumb.categoryChildId}`}
                className={style.breadCrumbLink}
              >
                <FolderSvg width={HOME.SVG.SIZE} height={HOME.SVG.SIZE} />
                <span className={style.text}>
                  {breadCrumb.categoryChildName}
                </span>
              </a>
            </li>
          )}

          {breadCrumb?.currentName && (
            <li className={style.breadCrumbItem}>
              <span className={style.breadCrumbArrow}>{' >'}</span>
              {breadCrumb.currentName}
            </li>
          )}
        </ol>
      )}
    </>
  )
}
