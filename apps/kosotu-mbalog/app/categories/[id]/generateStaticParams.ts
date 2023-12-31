import { API, API_KEY, API_BASE_ENDPOINT } from 'const'
import { CategoryPathsLogic } from 'logic/blogs/categories/categoryPaths'
import { MicroCmsCategoryUsecase } from 'usecase/microCMS/category/categoryUsecase'

export async function generateStaticParams() {
  const { categories } = await new MicroCmsCategoryUsecase({
    apiKey: API_KEY,
    baseEndpint: API_BASE_ENDPOINT,
    categoryEndpoint: API.CATEGORY.END_POINT,
  }).getCategories()

  return new CategoryPathsLogic({ categories }).execute()
}
