import {
  API,
  PAGE,
  SITE_NAME,
  CHATCH_PHRASE,
  PROFILE_INFO,
  SUB_MENU_LIST,
  TWITTER,
  METADATA,
} from 'const'
import { Header } from 'ui/components/blogs/common/Header'
import { Footer } from 'ui/components/blogs/common/Footer'
import { ProfileInfo } from 'ui/components/blogs/common/ProfileInfo'
import { useMenu } from 'hook/blogs/menus/useMenu'
import 'public/globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { getGlobalMenu } = useMenu({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    categoryEndpoint: API.CATEGORY.END_POINT,
  })
  const { globalMenu } = await getGlobalMenu()

  return (
    <html lang="ja">
      <body>
        <Header
          siteName={SITE_NAME}
          catchPhrase={CHATCH_PHRASE}
          twitterUrl={TWITTER.URL}
          globalMenu={globalMenu}
        />
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
