import type { IGetBlogsResponse } from '../index'
import { blogsMock } from './blogs'

export const getBlogsMock: IGetBlogsResponse = {
  blogs: blogsMock,
  totalCount: 3,
}

export * from './blogs'
