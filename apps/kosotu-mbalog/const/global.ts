import { TWITTER } from './twitter'

export const SITE_NAME = '高卒MBAlog' as const
export const SITE_DESCRIPTION = 'MBA学習ログ | 経営学の情報を発信' as const
export const SITE_URL = 'https://kosotumba.com/' as const
export const SITE_IMAGE =
  'https://images.microcms-assets.io/assets/9ce39a4925994f49a2825429de9e3959/75edbf3f3069441faf4dc921b5404193/ryota.webp' as const

export const PROFILE_INFO_IMAGE = {
  path: '/images/ryota.webp',
  alt: 'profile image',
  width: 120,
  height: 120,
} as const

export const PROFILE_INFO_AUTHOR = {
  name: 'RYOTA',
  copy: 'MBA取得中の高卒',
} as const

export const PROFILE_INFO_DESCRIPTION = [
  {
    label: 'キャリア',
    items: ['NCプログラマ', '人材系営業マン', 'Web系エンジニア'],
  },
  {
    label: 'スキル',
    items: ['Node.js', 'TypeScript', 'React', 'Next.js', 'AWS'],
  },
  {
    label: '資格',
    items: ['キャリアコンサルティング技能士', '上級SNSエキスパート'],
  },
  {
    label: 'その他',
    items: ['MBAプログラム受講中', 'エンジニアコミュニティ主催', 'ブログ運営'],
  },
]

export const PROFILE_INFO_TWITTER = {
  url: TWITTER.URL,
  height: 20,
  width: 20,
}

export const PROFILE_INFO = {
  IMAGE: PROFILE_INFO_IMAGE,
  DESCRIPTION: PROFILE_INFO_DESCRIPTION,
  TWITTER: PROFILE_INFO_TWITTER,
  AUTHOR: PROFILE_INFO_AUTHOR,
} as const
