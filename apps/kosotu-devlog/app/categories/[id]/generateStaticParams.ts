import { API } from 'const/microCms'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'
import { CategoryPathsLogic } from 'logic/blogs/categories/categoryPaths'

export async function generateStaticParams() {
  const { categories } = await new MicroCmsCategoryUsecase({
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    baseEndpint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    categoryEndpoint: API.CATEGORY.END_POINT,
  }).getCategories()

  return new CategoryPathsLogic({ categories }).execute()
}
