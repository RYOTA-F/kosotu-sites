export const sitemapMock = [
  {
    id: 'parent1',
    name: 'Parent1',
    url: '/parent1',
    children: [
      {
        id: 'children1',
        name: 'Children1',
        url: 'children1',
        parent: 'parent1',
        blogs: [
          { title: 'Blog1', url: '/blogs1', category: 'children1' },
          { title: 'Blog2', url: '/blogs2', category: 'children1' },
        ],
      },
    ],
  },
  {
    id: 'parent2',
    name: 'Parent2',
    url: '/parent2',
    children: [
      {
        id: 'children2',
        name: 'Children2',
        url: 'children2',
        parent: 'parent2',
        blogs: [
          { title: 'Blog3', url: '/blogs3', category: 'children2' },
          { title: 'Blog4', url: '/blogs4', category: 'children2' },
        ],
      },
      {
        id: 'children3',
        name: 'Children3',
        url: 'children3',
        parent: 'parent3',
        blogs: [
          { title: 'Blog5', url: '/blogs5', category: 'children3' },
          { title: 'Blog6', url: '/blogs6', category: 'children3' },
        ],
      },
    ],
  },
]
