import cheerio from 'cheerio'
import { IBlog, ITableOfContents } from 'type/microCMS'

/**
 * 目次用ロジック
 */
export class TableOfContentsLogic {
  constructor(private blogBody: IBlog['body']) {}

  /**
   * 目次に変換
   */
  execute() {
    const $ = cheerio.load(this.blogBody, { _useHtmlParser2: true })

    const tableOfContents: ITableOfContents[] = $('h2, h3')
      .toArray()
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
