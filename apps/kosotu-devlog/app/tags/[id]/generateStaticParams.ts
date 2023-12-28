import { API, API_KEY, BASE_ENDPOINT } from 'const'
import { TagPathsLogic } from 'logic/blogs/tags/tagPaths'
import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'

export async function generateStaticParams() {
  const { tags } = await new MicroCmsTagUsecase({
    apiKey: API_KEY,
    baseEndpint: BASE_ENDPOINT,
    tagEndpoint: API.TAG.END_POINT,
  }).getTags()

  return new TagPathsLogic({ tags }).execute()
}
