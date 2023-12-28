import {
  MicroCmsTagUsecaseArgs,
  MicroCmsTagUsecaseGetTagsResponse,
  MicroCmsTagUsecaseGetTagByIdParams,
  MicroCmsTagUsecaseGetTagByIdResponse,
} from './tagUsecase.types'

/**
 * MicroCMSタグの取得 Usecase
 */
export class MicroCmsTagUsecase {
  private readonly apiKey: MicroCmsTagUsecaseArgs['apiKey']
  private readonly baseEndpint: MicroCmsTagUsecaseArgs['baseEndpint']
  private readonly tagEndpoint: MicroCmsTagUsecaseArgs['tagEndpoint']

  constructor(private readonly args: MicroCmsTagUsecaseArgs) {
    this.apiKey = this.args.apiKey
    this.baseEndpint = this.args.baseEndpint
    this.tagEndpoint = this.args.tagEndpoint
  }

  /**
   * タグ一覧を取得
   */
  async getTags(): Promise<MicroCmsTagUsecaseGetTagsResponse> {
    const limit = 9999

    const res = await fetch(
      `${this.baseEndpint}${this.tagEndpoint}?limit=${limit}`,
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
    const res = await fetch(`${this.baseEndpint}${this.tagEndpoint}/${id}`, {
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
