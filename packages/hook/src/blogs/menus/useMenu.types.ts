import { GlobalMenu } from 'type/microCMS'

export interface UseMenuParams {
  apiKey: string
  baseEndpint: string
  categoryEndpoint: string
}

export interface GetGlobalMenuResponse {
  globalMenu: GlobalMenu[]
}
