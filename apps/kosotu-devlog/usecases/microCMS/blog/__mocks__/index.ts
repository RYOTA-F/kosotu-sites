import type { IGetBlogsResponse } from '../index'
import { blogsMock } from './blogs'

export const getBlogsMock: IGetBlogsResponse = {
  blogs: blogsMock,
  totalPage: 3,
}

export * from './blogs'
