// const
import { SITE_NAME } from 'const/global'
import { METADATA } from 'const/metadata'
// components
import { Footer } from 'ui/components/blogs/Footer'
// styles
import 'public/globals.css'

export const metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Footer siteName={SITE_NAME} menuList={[]} />
      </body>
    </html>
  )
}
