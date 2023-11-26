import type { IMicroCmsUsecaseBlog } from '.'
import { API, MAX_ARTICEL_COUNT } from '../../../const/microCms'

export class MicroCmsUsecaseBlogProd implements IMicroCmsUsecaseBlog {
  getBlogs: IMicroCmsUsecaseBlog['getBlogs'] = async (params) => {
    const limit = params?.limit ? MAX_ARTICEL_COUNT : 9999
    const offset = params?.offset ? params?.offset : 0

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}${API.BLOG.END_POINT}?limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
        },
      }
    )

    const blogs = await res.json()

    return {
      blogs: blogs.contents,
      totalCount: blogs.totalCount,
    }
  }

  // getBlogByID: IMicroCmsUsecaseBlog['getBlogByID'] = async (id) => {
  //   // 投稿情報を取得
  //   const { contents } = await client.get<IBlogDetailApiResponse>({
  //     endpoint: API.BLOG.END_POINT,
  //     queries: { ids: id },
  //   })

  //   // 投稿本文をパース
  //   const { body, tableOfContents } = await perseBlogBody(contents[0].body)
  //   // パンくず情報を取得
  //   const breadCrumb = getBreadCrumbDataFromBlog(contents[0])
  //   // SEO情報を取得
  //   const seo = getSeoFromBlog(contents[0])

  //   const blog = {
  //     id: contents[0].id,
  //     title: contents[0].title,
  //     description: contents[0].description,
  //     body,
  //     image: contents[0].image,
  //     createdAt: contents[0].createdAt,
  //     updatedAt: contents[0].updatedAt,
  //     publishedAt: contents[0].publishedAt,
  //     oldPublishedAt: contents[0].oldPublishedAt
  //       ? contents[0].oldPublishedAt
  //       : undefined,
  //     revisedAt: contents[0].revisedAt,
  //     categories: contents[0].categories,
  //     tags: contents[0].tags,
  //   }

  //   return { blog, tableOfContents, breadCrumb, seo }
  // }
}
