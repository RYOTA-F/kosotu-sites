export interface Menu {
  label: string
  url: string
}

export interface GlobalMenu {
  label: string
  url: string
  children: Menu[]
}
