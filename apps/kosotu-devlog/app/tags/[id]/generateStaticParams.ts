import { API } from 'const/microCms'
import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'
import { TagPathsLogic } from 'logic/blogs/tags/tagPaths'

export async function generateStaticParams() {
  const { tags } = await new MicroCmsTagUsecase(
    process.env.NEXT_PUBLIC_API_KEY || '',
    process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    API.TAG.END_POINT
  ).getTags()

  return new TagPathsLogic(tags).execute()
}
