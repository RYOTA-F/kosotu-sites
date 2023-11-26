export const PAGE_TYPE = {
  HOME: 'home',
  CATEGORY: 'category',
  TAG: 'tag',
} as const

export type PagePathsLogicType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE]
