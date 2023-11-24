export interface ProfileInfoProps {
  profilePath: string
  image: ProfileInfoImage
  author: ProfileInfoAuthor
  descriptions: ProfileInfoDescription[]
  twitter: ProfileInfoTwitter
}

export interface ProfileInfoImage {
  path: string
  alt: string
  width: number
  height: number
}

export interface ProfileInfoAuthor {
  name: string
  copy: string
}

export interface ProfileInfoDescription {
  label: string
  items: string[]
}

export interface ProfileInfoTwitter {
  url: string
  height?: number
  width?: number
  color?: string
}
