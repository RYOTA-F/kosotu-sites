import { SITE_NAME, SITE_IMAGE, SITE_URL, SITE_DESCRIPTION } from 'const/global'
import Favicon from '/public/images/favicon.ico'

export const METADATA = {
  title: SITE_NAME,
  DESCRIPTION: SITE_DESCRIPTION,
  URL: SITE_URL,
  icons: [{ rel: 'icon', url: Favicon.src }],
  IMAGE: SITE_IMAGE,
} as const
