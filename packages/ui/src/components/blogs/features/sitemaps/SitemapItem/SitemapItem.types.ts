import { SITEMAP_TYPE } from './SitemapItem.const'

export type SitemapType = (typeof SITEMAP_TYPE)[keyof typeof SITEMAP_TYPE]

export interface SitemapItemProps {
  type: SitemapType
  label: string
  url: string
}
