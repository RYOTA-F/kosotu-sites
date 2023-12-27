export interface Sitemap {
  id: string
  name: string
  url: string
  children: ChildrenCategories[]
}

export interface ChildrenCategories {
  id: string
  name: string
  url: string
  parent: string
  blogs: {
    title: string
    url: string
    category: string
  }[]
}

export interface SitemapListProps {
  sitemap: Sitemap[]
  topText: string
  topUrl: string
}
