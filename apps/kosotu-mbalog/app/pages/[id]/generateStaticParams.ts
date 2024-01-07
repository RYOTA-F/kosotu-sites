import {
  API,
  MAX_ARTICEL_COUNT,
  OFFSET_ZERO,
  API_KEY,
  API_BASE_ENDPOINT,
} from 'const'
import { PagePathsLogic, PAGE_TYPE } from 'logic/blogs/articles/pagePaths'
import { PaginationLogic } from 'logic/blogs/articles/pagination'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'

export async function generateStaticParams() {
  const { totalCount } = await new MicroCmsBlogUsecase({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    blogEndpoint: API.BLOG.END_POINT,
  }).getBlogs({
    limit: true,
    offset: OFFSET_ZERO,
    maxArticleCount: MAX_ARTICEL_COUNT,
  })

  const totalPageCount = new PaginationLogic({
    articleCount: totalCount,
    maxPageCount: MAX_ARTICEL_COUNT,
  }).execute()

  return new PagePathsLogic({
    totalPage: totalPageCount,
    type: PAGE_TYPE.HOME,
  }).execute()
}
