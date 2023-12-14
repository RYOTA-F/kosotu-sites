import { API } from 'const/microCms'
import { MicroCmsTagUsecase } from 'usecase/microCMS/tag'

/**
 * タグ取得用カスタムフック
 */
export const useTags = () => {
  /**
   * IDを指定してタグを一件取得
   */
  const getTagById = async (id: string) => {
    const { tag } = await new MicroCmsTagUsecase({
      apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
      baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
      tagEndpoint: API.TAG.END_POINT,
    }).getTagById({ id })

    return {
      tag,
    }
  }

  return {
    getTagById,
  }
}
