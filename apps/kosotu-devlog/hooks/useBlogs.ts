import { MicroCmsUsecaseBlog } from '../usecases/microCMS/blog'

export const useBlogs = () => {
  /**
   * ブログ一覧取得
   */
  const getBlogs = async () => {
    const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()
    const { blogs, totalPage } = await microCmsUsecaseBlog.getBlogs({
      limit: true,
    })

    const articles = blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      image: blog.image,
    }))

    return { articles, totalPage }
  }

  return {
    getBlogs,
  }
}
