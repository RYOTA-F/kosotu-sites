import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'
import { UseTags } from './useTags.types'

/**
 * タグ取得用カスタムフック
 */
export const useTags: UseTags = ({ apiKey, baseEndpint, tagEndpoint }) => {
  /**
   * IDを指定してタグを一件取得
   */
  const getTagById = async (id: string) => {
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
