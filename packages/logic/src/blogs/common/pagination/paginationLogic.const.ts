export const TOP_PAGE_NUM = 1 as const

export const PAGE_PATTERN = {
  ROOT: '/',
  PAGES: '/pages/',
  CATEGORIES: '/categories/',
  CATEGORY_PAGES: '/categories/:id/pages/[:pageId]',
  TAGS: '/tags/',
  TAG_PAGES: '/tags/:id/pages/[:pageId]',
} as const

export type PagePattern = (typeof PAGE_PATTERN)[keyof typeof PAGE_PATTERN]
