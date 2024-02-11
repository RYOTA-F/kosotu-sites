import {
  API,
  PAGE,
  SITE_NAME,
  SITE_DESCRIPTION,
  PROFILE_INFO,
  SUB_MENU_LIST,
  TWITTER,
  METADATA,
  API_KEY,
  API_BASE_ENDPOINT,
} from 'const'
import { Header } from 'ui/components/blogs/common/Header'
import { BreadCrumb } from 'ui/components/blogs/common/BreadCrumb'
import { Footer } from 'ui/components/blogs/common/Footer'
import { ProfileInfo } from 'ui/components/blogs/common/ProfileInfo'
import { useBreadCrumb } from 'hook/blogs/breadCrumb/useBreadCrumb'
import { useMenu } from 'hook/blogs/menus/useMenu'
import 'public/globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { getBreadCrumbMasterData } = useBreadCrumb()
  const { getGlobalMenu } = useMenu({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    categoryEndpoint: API.CATEGORY.END_POINT,
  })

  const { blogs, categories, tags } = await getBreadCrumbMasterData({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    blogEndpoint: API.BLOG.END_POINT,
    categoryEndpoint: API.CATEGORY.END_POINT,
    tagEndpoint: API.TAG.END_POINT,
  })
  const { globalMenu } = await getGlobalMenu()

  return (
    <html lang="ja">
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body>
        <Header
          siteName={SITE_NAME}
          catchPhrase={SITE_DESCRIPTION}
          twitterUrl={TWITTER.URL}
          globalMenu={globalMenu}
        />
        <BreadCrumb articles={blogs} categories={categories} tags={tags} />
        <main className="max-w-full overflow-x-hidden">
          <div className="flex justify-between py-[60px] tb:pt-5 px-[5%] tb:block sp:block">
            <div className="min-w-[75%] mr-8 tb:mr-0">{children}</div>
            <aside className="min-w-[25%] tb:w-[80%] tb:mx-auto tb:mt-10">
              <ProfileInfo
                profilePath={PAGE.PROFILE}
                image={PROFILE_INFO.IMAGE}
                author={PROFILE_INFO.AUTHOR}
                descriptions={PROFILE_INFO.DESCRIPTION}
                twitter={PROFILE_INFO.TWITTER}
              />
            </aside>
          </div>
        </main>
        <Footer siteName={SITE_NAME} menuList={SUB_MENU_LIST} />
      </body>
    </html>
  )
}

export const metadata = METADATA
