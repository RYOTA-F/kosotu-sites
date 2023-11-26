import { API, MAX_ARTICEL_COUNT, OFFSET_ZERO } from 'const/microCms'
import { MicroCmsUsecaseBlog } from 'usecase/microCMS/blog'
import { ArticlePathsLogic } from 'logic/blogs/articles/articlePaths/articlePaths'

export async function generateStaticParams() {
  const { blogs } = await new MicroCmsUsecaseBlog(
    process.env.NEXT_PUBLIC_API_KEY || '',
    process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    API.BLOG.END_POINT
  ).getBlogs({
    limit: true,
    offset: OFFSET_ZERO,
    maxArticleCount: MAX_ARTICEL_COUNT,
  })

  return new ArticlePathsLogic(blogs).execute()
}
