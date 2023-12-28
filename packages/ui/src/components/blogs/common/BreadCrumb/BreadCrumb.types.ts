import { Blog, Category, Tag } from 'type/microCMS'

export interface BreadCrumbProps {
  articles: Blog[]
  tags: Tag[]
  categories: Category[]
}
