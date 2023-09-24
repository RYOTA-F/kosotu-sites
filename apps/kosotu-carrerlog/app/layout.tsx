import 'public/globals.css'
import { METADATA } from 'const/metadata'

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
      <body>{children}</body>
    </html>
  )
}
