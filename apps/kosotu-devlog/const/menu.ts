import { GOOGLE_FORM } from './contact'
import { PAGE } from './page'

export const HEADER_MENU = [
  {
    label: 'フロントエンド',
    url: '/categories/frontend',
    children: [
      {
        label: 'TypeScript',
        url: '/categories/typescript',
      },
      {
        label: 'React',
        url: '/categories/react',
      },
    ],
  },
  {
    label: 'バックエンド',
    url: '/categories/backend',
    children: [
      {
        label: 'Node.js(TS)',
        url: '/categories/nodejs',
      },
      {
        label: 'Golang',
        url: '/categories/golang',
      },
      {
        label: 'Python',
        url: '/categories/python',
      },
    ],
  },
  {
    label: 'インフラ',
    url: '/categories/infra',
    children: [
      {
        label: 'AWS',
        url: '/categories/aws',
      },
      {
        label: 'AWS EC2',
        url: '/categories/ec2',
      },
      {
        label: 'AWS Lambda',
        url: '/categories/lambda',
      },
    ],
  },
  {
    label: 'AI',
    url: '/categories/ai',
    children: [
      {
        label: 'ChatGPT',
        url: '/categories/chat-gpt',
      },
    ],
  },
  {
    label: 'イベント',
    url: '/categories/event',
    children: [
      {
        label: 'TSLab',
        url: '/categories/tslab',
      },
      {
        label: 'DevelopersGuild',
        url: '/categories/developers-guild',
      },
    ],
  },
  {
    label: 'エトセトラ',
    url: '/categories/etc',
    children: [
      {
        label: 'ポエム',
        url: '/categories/poem',
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
