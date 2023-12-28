import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'
import {
  UseTagsParams,
  GetTagByIdParams,
  GetTagByIdResponse,
} from './useTags.types'

/**
 * タグ取得用 Custom Hooks
 */
export const useTags = ({
  apiKey,
  baseEndpint,
  tagEndpoint,
}: UseTagsParams) => {
  /**
   * IDを指定してタグを一件取得
   */
  const getTagById = async ({
    id,
  }: GetTagByIdParams): Promise<GetTagByIdResponse> => {
    const { tag } = await new MicroCmsTagUsecase({
      apiKey,
      baseEndpint,
      tagEndpoint,
    }).getTagById({ id })

    return {
      tag,
    }
  }

  return {
    getTagById,
  }
}
