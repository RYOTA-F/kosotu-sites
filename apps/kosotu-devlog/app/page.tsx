import { useBlogs } from '../hooks/useBlogs'
import { ArticleCardList } from 'ui/components/blogs/features/blogs/ArticleCardList'

export default async function Index() {
  const { getBlogs } = useBlogs()
  const { articles } = await getBlogs()

  return <ArticleCardList articles={articles} />
}
