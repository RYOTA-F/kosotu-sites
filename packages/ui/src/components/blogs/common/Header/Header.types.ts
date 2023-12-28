export interface HeaderProps {
  siteName: string
  catchPhrase: string
  twitterUrl?: string
  apiKey: string
  baseEndpint: string
  categoryEndpoint: string
}

export interface GlobalMenu {
  label: string
  url: string
  children: Menu[]
}

export interface Menu {
  label: string
  url: string
}
