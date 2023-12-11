import cheerio from 'cheerio'
import { Blog, TableOfContents } from 'type/microCMS'

/**
 * 目次用ロジック
 */
export class TableOfContentsLogic {
  constructor(private blogBody: Blog['body']) {}

  /**
   * 目次に変換
   */
  execute() {
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
