import { CategoryListProps } from '../CategoryList.types'

export const categoriesMock: CategoryListProps['categories'] = [
  {
    id: 'react',
    createdAt: '2022-01-01T00:00:00',
    updatedAt: '2022-01-01T00:00:00',
    publishedAt: '2022-01-01T00:00:00',
    revisedAt: '2022-01-01T00:00:00',
    name: 'React',
    relation: {
      fieldId: '',
      isParent: false,
      children: [],
      parent: [],
    },
    blogs: [],
  },
]
