import { MAX_BLOG_COUNT } from '../../const/microCms'

/**
 * ページ数の合計を取得
 */
export const getTotalPage = (totalCount: number) => {
  return Math.ceil(totalCount / MAX_BLOG_COUNT)
}
