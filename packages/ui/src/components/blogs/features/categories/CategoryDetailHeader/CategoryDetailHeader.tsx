import { ARIA_LABEL, TITLE, SVG } from './CategoryDetailHeader.const'
import { CategoryDetailHeaderProps } from './CategoryDetailHeader.types'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { CategoryLabel } from '../CategoryLabel/CategoryLabel'
import { ChevronRightSvg, FolderSvg } from '../../../../elements/Svg'
import { H1 } from '../../../../elements/Heading'
import style from './CategoryDetailHeader.module.css'
import { CategoryRelationLogic } from 'logic/blogs/categories/categoryRelation/categoryRelation'

export function CategoryDetailHeader({ category }: CategoryDetailHeaderProps) {
  const { isParent, categoryParent } = new CategoryRelationLogic(
    category.relation
  ).execute()

  return (
    <div className={style.h1} aria-label={ARIA_LABEL.CATEGORY_DETAIL_HEADER}>
      <div className={style.headerContainer}>
        <H1>
          {category.name}
          <span className={style.category}>
            <span className={style.hypen}>{TITLE.HYPHEN}</span>
            {TITLE.TEXT}
            {TITLE.HYPHEN}
          </span>
        </H1>
      </div>
      <div className={style.categoryContainer}>
        <div className={style.folderContainer}>
          <FolderSvg
            height={SVG.SIZE}
            width={SVG.SIZE}
            color={SVG.COLOR}
            fill={SVG.FILL}
          />
        </div>
        {/* 親カテゴリの場合 親カテゴリのラベルを表示 */}
        {isParent && <CategoryLabel name={category.name} />}
        {/* 子カテゴリの場合 親カテゴリへのリンクを表示 */}
        {!isParent && categoryParent && (
          <CategoryItem
            category={{
              id: categoryParent.id,
              name: categoryParent.name,
            }}
          />
        )}
        {/* 子カテゴリの場合 子カテゴリのラベルを表示 */}
        {!isParent && (
          <>
            <div className={style.chevronContainer}>
              <ChevronRightSvg
                height={SVG.SIZE}
                width={SVG.SIZE}
                color={SVG.COLOR}
              />
            </div>
            <CategoryLabel name={category.name} />
          </>
        )}
      </div>
    </div>
  )
}
