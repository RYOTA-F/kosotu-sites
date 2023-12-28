export const PAGE_TYPE = {
  ROOT: '/',
  ARTICLE: '/articles/',
  CATEGORY: '/categories/',
  TAG: '/tags/',
  PROFILE: '/profile',
  SITE_MAP: '/sitemap',
  PRIVACY_POLICY: '/privacy-policy',
  DISCLAIMER: '/disclaimer',
} as const

export const PAGE_NAME = {
  PROFILE: 'プロフィール',
  SITE_MAP: 'サイトマップ',
  PRIVACY_POLICY: 'プライバシーポリシー',
  DISCLAIMER: '免責事項',
} as const

export const EMPTY_STRING = '' as const
