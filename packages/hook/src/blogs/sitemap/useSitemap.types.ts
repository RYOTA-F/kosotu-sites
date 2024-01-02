import { Sitemap } from 'type/microCMS'

export interface UseSitemapParams {
  apiKey: string
  baseEndpint: string
  blogEndpoint: string
  categoryEndpoint: string
}

export interface GetSitemapsResponse {
  sitemaps: Sitemap[]
}
