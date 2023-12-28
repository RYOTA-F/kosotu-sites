import cheerio from 'cheerio'
import { TableOfContents } from 'type/microCMS'
import {
  TableOfContentsLogicArgs,
  TableOfContentsLogicResponse,
} from './tableOfContentsLogic.types'

/**
 * 目次に変換する Logic
 */
export class TableOfContentsLogic {
  private readonly blogBody: TableOfContentsLogicArgs['blogBody']

  constructor(private readonly args: TableOfContentsLogicArgs) {
    this.blogBody = this.args.blogBody
  }

  /**
   * 目次変換を実行
   */
  execute(): TableOfContentsLogicResponse {
    // @ts-ignore
    const $ = cheerio.load(this.blogBody, { _useHtmlParser2: true })

    const tableOfContents: TableOfContents[] = $('h2, h3')
      .toArray()
      // @ts-ignore
      .map((element: cheerio.Element) => ({
        // @ts-ignore
        id: element.attribs.id,
        // @ts-ignore
        text: element.children[0].data,
        // @ts-ignore
        type: element.name,
      }))

    return { tableOfContents }
  }
}
