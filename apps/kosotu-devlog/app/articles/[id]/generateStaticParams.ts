import {
  API,
  FULL_ARTICEL_COUNT,
  OFFSET_ZERO,
  API_KEY,
  BASE_ENDPOINT,
} from 'const'
import { ArticlePathsLogic } from 'logic/blogs/articles/articlePaths/articlePaths'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'

export async function generateStaticParams() {
  const { blogs } = await new MicroCmsBlogUsecase({
    apiKey: API_KEY,
    baseEndpint: BASE_ENDPOINT,
    blogEndpoint: API.BLOG.END_POINT,
  }).getBlogs({
    limit: false,
    offset: OFFSET_ZERO,
    maxArticleCount: FULL_ARTICEL_COUNT,
  })

  return new ArticlePathsLogic({ blogs }).execute()
}
