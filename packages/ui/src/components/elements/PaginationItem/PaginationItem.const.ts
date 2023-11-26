export const ARIA_LABEL = {
  PAGINATION_ITEM: 'paginationItem',
} as const

export const TOP_PAGE_NUM = 1 as const
export const TOP_PATH = '[id]' as const
export const PAGES_PATH = `${TOP_PATH}/[pageId]` as const

export const FIXED_PAGE = {
  PROFILE: 'profile',
  SITE_MAP: 'sitemap',
  PRIVACY_POLICY: 'privacy-policy',
  DISCLAIMER: 'disclaimer',
} as const

export const PAGE = {
  ROOT: '/',
  PAGE: '/pages/',
  ARTICLES: '/articles/',
  CATEGORY: '/categories/',
  TAG: '/tags/',
  PROFILE: `/${FIXED_PAGE.PROFILE}`,
  SITE_MAP: `/${FIXED_PAGE.SITE_MAP}`,
  PRIVACY_POLICY: `/${FIXED_PAGE.PRIVACY_POLICY}`,
  DISCLAIMER: `/${FIXED_PAGE.DISCLAIMER}`,
} as const
