import {
  MicroCmsTagUsecaseGetTagsResponse,
  MicroCmsTagUsecaseGetTagByIdParams,
  MicroCmsTagUsecaseGetTagByIdResponse,
} from './tagUsecase.types'

/**
 * MicroCMSタグの取得クラス
 */
export class MicroCmsTagUsecase {
  constructor(
    private apiKey: string,
    private baseEndpint: string,
    private TagEndpoint: string
  ) {}

  /**
   * タグ一覧を取得
   */
  async getTags(): Promise<MicroCmsTagUsecaseGetTagsResponse> {
    const limit = 9999

    const res = await fetch(
      `${this.baseEndpint}${this.TagEndpoint}?limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
        },
      }
    )

    const tags = await res.json()

    return {
      tags: tags.contents,
    }
  }

  /**
   * IDを指定してタグを一件取得
   */
  async getTagById({
    id,
  }: MicroCmsTagUsecaseGetTagByIdParams): Promise<MicroCmsTagUsecaseGetTagByIdResponse> {
    const res = await fetch(`${this.baseEndpint}${this.TagEndpoint}/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': this.apiKey,
      },
    })

    const tag = await res.json()

    return {
      tag,
    }
  }
}
