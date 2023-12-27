import { Blog, Category, Sitemap } from 'type/microCMS'

export interface CreateSitemapDataLogicArgs {
  blogs: Blog[]
  categories: Category[]
}

export interface CreateSitemapDataLogicResponse {
  sitemaps: Sitemap[]
}
