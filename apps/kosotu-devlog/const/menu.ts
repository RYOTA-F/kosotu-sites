import { GOOGLE_FORM } from './contact'
import { PAGE } from './page'

export const SUB_MENU = {
  PRIVACY_POLICY: {
    label: 'プライバシーポリシー',
    url: PAGE.PRIVACY_POLICY,
  },
  TERMS_OF_SERVICE: {
    label: '免責事項',
    url: PAGE.DISCLAIMER,
  },
  CONCACT: {
    label: 'お問合せ',
    url: GOOGLE_FORM.URL,
  },
} as const

export const SUB_MENU_LIST = Object.values(SUB_MENU)

export const dymmyMenu = [
  {
    label: 'フロントエンド',
    url: '/categories/frontend',
    children: [
      {
        label: 'React',
        url: '/categories/react',
      },
      {
        label: 'Vue.js',
        url: '/categories/vue',
      },
    ],
  },
  {
    label: 'サイトマップ',
    url: '/sitemap',
    children: [],
  },
  {
    label: 'プロフィール',
    url: '/profile',
    children: [],
  },
]
