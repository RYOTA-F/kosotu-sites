// const
import { SITE_NAME, CHATCH_PHRASE } from 'const/global'
import { SUB_MENU_LIST, dymmyMenu } from 'const/menu'
import { METADATA } from 'const/metadata'
// components
import { Header } from 'ui/components/blogs/Header'
import { Footer } from 'ui/components/blogs/Footer'
// styles
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
          // TODO: fetchに変更
          globalMenu={dymmyMenu}
        />
        {children}
        <Footer siteName={SITE_NAME} menuList={SUB_MENU_LIST} />
      </body>
    </html>
  )
}

export const metadata = METADATA
