import { CategoryDetailHeaderProps } from '../CategoryDetailHeader.types'

export const categoryMockChildren: CategoryDetailHeaderProps['category'] = {
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
    parent: [
      {
        id: 'typescript',
        createdAt: '2023-11-30',
        updatedAt: '2023-11-30',
        publishedAt: '2023-11-30',
        revisedAt: '2023-11-30',
        name: 'TypeScript',
        relation: {
          fieldId: '',
          isParent: false,
          children: [],
          parent: [],
        },
        blogs: [],
      },
    ],
  },
  blogs: [],
}
