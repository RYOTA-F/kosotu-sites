import { useArticles } from 'hooks/useArticles'
import { useTags } from 'hooks/useTags'
import { generateStaticParams } from './generateStaticParams'
import { TagDetailHeader } from 'ui/components/blogs/features/tags/TagDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'

interface TagPageParams {
  params: {
    id: string
  }
}

export default async function TagPage({ params: { id } }: TagPageParams) {
  const { getArticlesByTagId } = useArticles()
  const { getTagById } = useTags()
  const { tag } = await getTagById(id)
  const { articles, totalPageCount } = await getArticlesByTagId(id)

  return (
    <>
      <TagDetailHeader tag={tag} />
      <div className="mt-5">
        <ArticleCardList articles={articles} />
      </div>
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={TOP_PAGE_NUM}
        currentPagePattern={PAGE_PATTERN.TAGS}
        tagId={id}
      />
    </>
  )
}

export { generateStaticParams }
