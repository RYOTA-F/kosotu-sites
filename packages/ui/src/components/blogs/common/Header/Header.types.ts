import { GlobalMenu } from 'type/microCMS'

export interface HeaderProps {
  siteName: string
  catchPhrase: string
  twitterUrl?: string
  globalMenu: GlobalMenu[]
}
