import { API } from 'const/microCms'
import { PAGE } from 'const/page'
import { SITE_NAME, CHATCH_PHRASE, PROFILE_INFO } from 'const/global'
import { SUB_MENU_LIST } from 'const/menu'
import { TWITTER } from 'const/twitter'
import { METADATA } from 'const/metadata'
import { Header } from 'ui/components/blogs/common/Header'
import { Footer } from 'ui/components/blogs/common/Footer'
import { ProfileInfo } from 'ui/components/blogs/common/ProfileInfo'
import 'public/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header
          siteName={SITE_NAME}
          catchPhrase={CHATCH_PHRASE}
          apiKey={process.env.NEXT_PUBLIC_API_KEY || ''}
          baseEndpint={process.env.NEXT_PUBLIC_API_ENDPOINT || ''}
          categoryEndpoint={API.CATEGORY.END_POINT}
          twitterUrl={TWITTER.URL}
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
