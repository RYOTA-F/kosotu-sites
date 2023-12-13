import cheerio from 'cheerio'
import hljs from 'highlight.js' // 11.7.0でないと動かない SyntaxError: Invalid regular expression: /(?!-)([!#\$%&*+.\\/<=>?@\\\\^~-]|(?!([(),;\\[\\]\`|{}]|[_:"']))(\\p{S}|\\p{P}))--+|--+(?!-)([!#\$%&*+.\\/<=>?@\\\\^~-]|(?!([(),;\\[\\]\`|{}]|[_:"']))(\\p{S}|\\p{P}))/: Invalid escape
import { Blog, BlogCardData } from 'type/microCMS'
import { TWITTER, CLASS_NAME, NO_IMAGE_PATH } from './convertBody.const'

/**
 * 投稿本文をパースするロジック
 */
export class PerseArticleBodyLogic {
  constructor(private readonly articleBody: Blog['body']) {}

  /**
   * パースを実行
   */
  async execute() {
    // @ts-ignore
    const $ = cheerio.load(this.articleBody, { _useHtmlParser2: true })

    // コードブロックをパース
    this.parseCodeBlock($)

    // ブログカードにパース
    await this.parseBlogCard($)

    return { body: $.html() }
  }

  /**
   * コードブロックをパース
   */
  // @ts-ignore
  private parseCodeBlock($: cheerio.Root) {
    // @ts-ignore
    $('pre code').each((_, element) => {
      const result = hljs.highlightAuto($(element).text())
      $(element).html(result.value)
      $(element).addClass('hljs')
    })
  }

  /**
   * ブログカードにパース
   */
  // @ts-ignore
  private async parseBlogCard($: cheerio.Root) {
    // ブログカード情報を取得
    const blogCardDatas = await this.getBlogCardDatas()

    // @ts-ignore
    $('a').each((i, element) => {
      $(element).replaceWith(this.getBlogCardDom(blogCardDatas[i]))
    })
  }

  /**
   * ブログカード情報を取得
   */
  private async getBlogCardDatas() {
    // @ts-ignore
    const $ = cheerio.load(this.articleBody, { _useHtmlParser2: true })

    const convertLinks = $('a')
      .toArray()
      .map((data) => {
        // urlをhttps://~形式に
        const url =
          // @ts-ignore
          data.attribs.href.indexOf('http') === -1 &&
          process.env.NEXT_PUBLIC_DOMEIN
            ? // @ts-ignore
              `${process.env.NEXT_PUBLIC_DOMEIN}${data.attribs.href}`
            : // @ts-ignore
              data.attribs.href
        return { url: url }
      })

    const temps = await Promise.all(
      convertLinks.map(async (link) => {
        const metas = await fetch(link.url as string)
          .then((res) => res.text())
          .then((text) => {
            const $ = cheerio.load(text)
            const metas = $('meta').toArray()
            const metaData: BlogCardData = {
              url: link.url,
              title: '',
              description: '',
              image: '',
              site: '',
            }
            for (let i = 0; i < metas.length; i++) {
              // タイトル
              if (
                // @ts-ignore
                metas[i].attribs?.property === 'og:title' ||
                // @ts-ignore
                metas[i].attribs?.name === 'twitter:title'
              )
                // @ts-ignore
                metaData.title = metas[i].attribs.content
              // 説明
              // @ts-ignore
              if (metas[i].attribs?.property === 'og:description')
                // @ts-ignore
                metaData.description = metas[i].attribs.content
              // 画像
              if (
                // @ts-ignore
                metas[i].attribs?.property === 'og:image' ||
                // @ts-ignore
                metas[i].attribs?.name === 'twitter:image'
              )
                // @ts-ignore
                metaData.image = metas[i].attribs.content
              // サイト名
              // @ts-ignore
              if (metas[i].attribs?.property === 'og:site_name')
                // @ts-ignore
                metaData.site = metas[i].attribs.content
            }
            return metaData
          })
          .catch((e) => {
            return e as Error
          })
        return metas
      })
    )

    return temps.filter((temp) => temp !== undefined) as BlogCardData[]
  }

  /**
   * ブログカードのDomを取得
   */
  private getBlogCardDom(blogCardData: BlogCardData) {
    // Twitterリンク
    if (
      blogCardData?.url?.includes(TWITTER.URL) &&
      !blogCardData?.url?.includes(TWITTER.CARD_LINK)
    ) {
      return this.getBlogCardTwitterDom(blogCardData)
    }

    // データが正常に取得できない場合
    if (!blogCardData.title && !blogCardData.description) {
      return this.getBlogCardNoDataDom(blogCardData)
    }

    // デフォルト
    return this.getBlogCardDefaultDom(blogCardData)
  }

  /**
   * TwitterリンクのDomを取得
   */
  private getBlogCardTwitterDom = (blogCardData: BlogCardData) => {
    // prettier-ignore
    return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.TWITTER}">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#1d9bf0" stroke="#1d9bf0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label={TWITTER_SVG_ARIA_LABEL}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
      <span class="${CLASS_NAME.TWITTER}__content">
        <span class="${CLASS_NAME.TWITTER}__description">@${blogCardData.url.replace(TWITTER.URL,'')}</span>
      </span>
      <span class="${CLASS_NAME.TWITTER}__site">${TWITTER.SITE_NAME}</span>
    </a>
  `
  }

  /**
   * データが正常に取得できない場合のDomを取得
   */
  private getBlogCardNoDataDom(blogCardData: BlogCardData) {
    const image =
      blogCardData.image && blogCardData.image.charAt(0) !== '/'
        ? blogCardData.image
        : NO_IMAGE_PATH
    const site = `${blogCardData.site || ''}`

    return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.BASE}">
      <img src="${image}" class="${CLASS_NAME.BASE}__img" />
      <span class="${CLASS_NAME.BASE}__content">
        <span class="${CLASS_NAME.BASE}__description">${blogCardData.url}</span>
      </span>
      <span class="${CLASS_NAME.BASE}__site">${site}</span>
    </a>
  `
  }

  /**
   * デフォルトのDomを取得
   */
  private getBlogCardDefaultDom(blogCardData: BlogCardData) {
    const image =
      blogCardData.image && blogCardData.image.charAt(0) !== '/'
        ? blogCardData.image
        : NO_IMAGE_PATH
    const title = `${blogCardData.title || ''}`
    const description = `${blogCardData.description || ''}`
    const site = `${blogCardData.site || ''}`

    return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.BASE}">
      <img src="${image}" class="${CLASS_NAME.BASE}__img" />
      <span class="${CLASS_NAME.BASE}__content">
        <span class="${CLASS_NAME.BASE}__title">${title}</span>
        <span class="${CLASS_NAME.BASE}__description">${description}</span>
      </span>
      <span class="${CLASS_NAME.BASE}__site">${site}</span>
    </a>
  `
  }
}
