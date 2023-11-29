import { API, MAX_ARTICEL_COUNT, OFFSET_ZERO } from 'const/microCms'
import { MicroCmsUsecaseBlog } from 'usecase/microCMS/blog'
import { PagePathsLogic, PAGE_TYPE } from 'logic/blogs/articles/pagePaths'
import { PaginationLogic } from 'logic/blogs/articles/pagination'

export async function generateStaticParams() {
  const { totalCount } = await new MicroCmsUsecaseBlog(
    process.env.NEXT_PUBLIC_API_KEY || '',
    process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    API.BLOG.END_POINT
  ).getBlogs({
    limit: true,
    offset: OFFSET_ZERO,
    maxArticleCount: MAX_ARTICEL_COUNT,
  })

  const totalPageCount = new PaginationLogic(
    totalCount,
    MAX_ARTICEL_COUNT
  ).execute()

  return new PagePathsLogic(totalPageCount, PAGE_TYPE.HOME).execute()
}