import { ProfileInfoProps } from '../ProfileInfo.types'

export const profilePathMock: ProfileInfoProps['profilePath'] = '/profile'

export const profileImageMock: ProfileInfoProps['image'] = {
  path: 'https://placehold.jp/3d4070/ffffff/300x300.png',
  alt: 'テスト画像',
  width: 120,
  height: 120,
}

export const profileAuthorMock: ProfileInfoProps['author'] = {
  name: 'テストユーザー',
  copy: 'テストユーザーのコピーです',
}

export const profileDescriptionsMock: ProfileInfoProps['descriptions'] = [
  {
    label: 'テストラベル',
    items: ['テストアイテム1', 'テストアイテム2'],
  },
  {
    label: 'テストラベル2',
    items: ['テストアイテム3', 'テストアイテム4'],
  },
]

export const profileTwitterMock: ProfileInfoProps['twitter'] = {
  url: 'https://twitter.com/elonmusk',
  height: 20,
  width: 20,
}
