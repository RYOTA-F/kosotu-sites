import { API } from 'const'
import { TagPathsLogic } from 'logic/blogs/tags/tagPaths'
import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'

export async function generateStaticParams() {
  const { tags } = await new MicroCmsTagUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    tagEndpoint: API.TAG.END_POINT,
  }).getTags()

  return new TagPathsLogic({ tags }).execute()
}
