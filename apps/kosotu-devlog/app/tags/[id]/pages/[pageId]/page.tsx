import { API, MAX_ARTICEL_COUNT } from 'const/microCms'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { useTags } from 'hook/blogs/tags/useTags'
import { generateStaticParams } from './generateStaticParams'
import { TagDetailHeader } from 'ui/components/blogs/features/tags/TagDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import { Pagination, PAGE_PATTERN } from 'ui/components/blogs/common/Pagination'

interface TagPagesPageParams {
  params: {
    id: string
    pageId: string
  }
}

export default async function TagPagesPage({
  params: { id, pageId },
}: TagPagesPageParams) {
  const { getArticlesByTagId } = useArticles({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { getTagById } = useTags({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    tagEndpoint: API.TAG.END_POINT,
  })
  const { tag } = await getTagById(id)
  const { articles, totalPageCount } = await getArticlesByTagId(id, pageId)

  return (
    <>
      <TagDetailHeader tag={tag} />
      <div className="mt-5">
        <ArticleCardList articles={articles} />
      </div>
      <Pagination
        totalPage={totalPageCount}
        currentPageNumber={Number(pageId)}
        currentPagePattern={PAGE_PATTERN.TAG_PAGES}
        tagId={id}
      />
    </>
  )
}

export { generateStaticParams }
