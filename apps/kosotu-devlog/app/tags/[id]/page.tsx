import { API, MAX_ARTICEL_COUNT, API_KEY, BASE_ENDPOINT } from 'const'
import { useArticles } from 'hook/blogs/articles/useArticles'
import { useTags } from 'hook/blogs/tags/useTags'
import { TagDetailHeader } from 'ui/components/blogs/features/tags/TagDetailHeader'
import { ArticleCardList } from 'ui/components/blogs/features/articles/ArticleCardList'
import {
  Pagination,
  PAGE_PATTERN,
  TOP_PAGE_NUM,
} from 'ui/components/blogs/common/Pagination'
import { generateStaticParams } from './generateStaticParams'

interface TagPageParams {
  params: {
    id: string
  }
}

export default async function TagPage({ params: { id } }: TagPageParams) {
  const { getArticlesByTagId } = useArticles({
    apiKey: API_KEY,
    baseEndpint: BASE_ENDPOINT,
    blogEndpoint: API.BLOG.END_POINT,
    maxPageArticleCount: MAX_ARTICEL_COUNT,
  })
  const { getTagById } = useTags({
    apiKey: API_KEY,
    baseEndpint: BASE_ENDPOINT,
    tagEndpoint: API.TAG.END_POINT,
  })
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
