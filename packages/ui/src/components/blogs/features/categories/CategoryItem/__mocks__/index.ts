import { CategoryItemProps } from '../index'

export const categoryMockChildren: CategoryItemProps['category'] = {
  id: 'react',
  createdAt: '2023-11-30',
  updatedAt: '2023-11-30',
  publishedAt: '2023-11-30',
  revisedAt: '2023-11-30',
  name: 'React',
  relation: {
    fieldId: '',
    isParent: false,
    children: [],
    parent: [],
  },
  blogs: [],
}

export const categoryMockParent: CategoryItemProps['category'] = {
  id: 'frotnend',
  name: 'フロントエンド',
}
