import { ArticleDetailHeaderProps } from '../ArticleDetailHeader.types'

export const articleDetailHeaderPropsBlogMock: ArticleDetailHeaderProps['article'] =
  {
    id: 'test',
    title: 'テストタイトル',
    image: {
      url: 'https://placehold.jp/1920x1080.png',
      height: 1080,
      width: 1920,
    },
    description: 'description',
    body: 'body',
    createdAt: '2023-11-22',
    updatedAt: '2023-11-22',
    publishedAt: '2023-11-22',
    revisedAt: '2023-11-22',
    categories: [
      {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        publishedAt: 'publishedAt',
        revisedAt: 'revisedAt',
        name: 'name',
        relation: {
          fieldId: 'hogehoge',
          isParent: false,
          children: [],
          parent: [],
        },
        blogs: [],
      },
    ],
    tags: [
      {
        id: 'id',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        publishedAt: 'publishedAt',
        revisedAt: 'revisedAt',
        name: 'name',
        blogs: [],
      },
    ],
  }

export const articleDetailHeaderPropsWelcomeMessageMock: ArticleDetailHeaderProps['welcomeMessage'] =
  'Welcome'

export const articleDetailHeaderPropsThanksMessageMock: ArticleDetailHeaderProps['thanksMessage'] =
  'Thanks'
