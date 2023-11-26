import { TWITTER } from 'const/twitter'

export const SITE_NAME = '高卒Devlog' as const

export const CHATCH_PHRASE =
  'Web開発ログ | エンジニアに役立つ情報 | 開発の中での気づきを発信' as const

export const PROFILE_INFO_IMAGE = {
  path: '/images/ryota.webp',
  alt: 'profile image',
  width: 120,
  height: 120,
} as const

export const PROFILE_INFO_AUTHOR = {
  name: 'RYOTA',
  copy: '高卒Webエンジニア',
} as const

export const PROFILE_INFO_DESCRIPTION = [
  {
    label: 'キャリア',
    items: ['NCプログラマ', '人材系営業マン', 'Web系エンジニア'],
  },
  {
    label: 'スキル',
    items: [
      'TypeScript',
      'React',
      'Next.js',
      'Vue.js',
      'Node.js',
      'Ruby',
      'AWS',
    ],
  },
  {
    label: '資格',
    items: ['キャリアコンサルティング技能士', '上級SNSエキスパート'],
  },
  {
    label: 'その他',
    items: ['TSLab 運営', 'Developers Guild 運営', '高卒Devlog運営'],
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
