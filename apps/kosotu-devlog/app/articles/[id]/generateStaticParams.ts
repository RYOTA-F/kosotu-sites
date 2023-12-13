import { API, FULL_ARTICEL_COUNT, OFFSET_ZERO } from 'const/microCms'
import { MicroCmsBlogUsecase } from 'usecase/microCMS/blog'
import { ArticlePathsLogic } from 'logic/blogs/articles/articlePaths/articlePaths'

export async function generateStaticParams() {
  const { blogs } = await new MicroCmsBlogUsecase(
    process.env.NEXT_PUBLIC_API_KEY || '',
    process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    API.BLOG.END_POINT
  ).getBlogs({
    limit: false,
    offset: OFFSET_ZERO,
    maxArticleCount: FULL_ARTICEL_COUNT,
  })

  return new ArticlePathsLogic(blogs).execute()
}
