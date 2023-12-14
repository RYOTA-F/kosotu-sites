import { API, MAX_ARTICEL_COUNT } from 'const/microCms'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog/blogUsecase'
import { MicroCmsTagUsecase } from 'usecase/microCMS/tag/tagUsecase'
import { PagePathsLogic, PAGE_TYPE } from 'logic/blogs/articles/pagePaths'
import { PaginationLogic } from 'logic/blogs/articles/pagination'

export async function generateStaticParams() {
  const { tags } = await new MicroCmsTagUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    tagEndpoint: API.CATEGORY.END_POINT,
  }).getTags()

  // ページパス生成
  const paths = await Promise.all(
    tags.map(async (tag) => {
      // カテゴリ毎の記事総数
      const { totalCount } = await new MicroCmsBlogUsecase({
        apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
        baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
        blogEndpoint: API.BLOG.END_POINT,
      }).getBlogs({
        limit: false,
        offset: 0,
        maxArticleCount: 9999,
        tagId: tag.id,
      })

      // カテゴリ毎のページ数
      const totalPageCount = new PaginationLogic({
        articleCount: totalCount,
        maxPageCount: MAX_ARTICEL_COUNT,
      }).execute()

      // カテゴリ×ページ数のパス
      const pagePaths = new PagePathsLogic({
        totalPage: totalPageCount,
        type: PAGE_TYPE.CATEGORY,
        slug: tag.id,
      }).execute()

      return pagePaths
    })
  )

  return paths.flat()
}
