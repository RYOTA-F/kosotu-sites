import { API } from 'const'
import { useSitemap } from 'hook/blogs/sitemap/useSitemap'
import { H1 } from 'ui/components/elements/Heading'
import { SitemapList } from 'ui/components/blogs/features/sitemaps/SitemapList/SitemapList'
import { SITEMAP } from './sitemap.const'

export default async function SitemapPage() {
  const { getSitemaps } = useSitemap({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    blogEndpoint: API.BLOG.END_POINT,
    categoryEndpoint: API.CATEGORY.END_POINT,
  })
  const { sitemaps } = await getSitemaps()

  return (
    <>
      <H1>{SITEMAP.TITLE}</H1>
      <SitemapList
        sitemap={sitemaps}
        topText={SITEMAP.TOP_TEXT}
        topUrl={SITEMAP.TOP_URL}
      />
    </>
  )
}
