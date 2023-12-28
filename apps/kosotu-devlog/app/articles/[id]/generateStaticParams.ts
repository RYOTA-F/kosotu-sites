import { API, FULL_ARTICEL_COUNT, OFFSET_ZERO } from 'const/microCms'
import { ArticlePathsLogic } from 'logic/blogs/articles/articlePaths/articlePaths'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'

export async function generateStaticParams() {
  const { blogs } = await new MicroCmsBlogUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
  }).getBlogs({
    limit: false,
    offset: OFFSET_ZERO,
    maxArticleCount: FULL_ARTICEL_COUNT,
  })

  return new ArticlePathsLogic({ blogs }).execute()
}
