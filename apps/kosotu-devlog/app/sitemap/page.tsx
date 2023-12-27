import { H1 } from 'ui/components/elements/Heading'
import { SitemapList } from 'ui/components/blogs/features/sitemaps/SitemapList/SitemapList'
import { useSitemap } from 'hooks/useSitemap'
import { SITEMAP } from './sitemap.const'

export default async function SitemapPage() {
  const { getSitemaps } = useSitemap()
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
