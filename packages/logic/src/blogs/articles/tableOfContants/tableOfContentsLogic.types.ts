import { Blog } from 'type/microCMS'
import { TableOfContents } from 'type/microCMS'
export interface TableOfContentsLogicArgs {
  blogBody: Blog['body']
}

export type TableOfContentsLogicResponse = {
  tableOfContents: TableOfContents[]
}
