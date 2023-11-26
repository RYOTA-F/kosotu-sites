import { generateStaticParams } from './generateStaticParams'

interface ArticlePageParams {
  params: {
    id: string
  }
}

export default async function ArticlePage({
  params: { id },
}: ArticlePageParams) {
  return <>ArticlePage</>
}

export { generateStaticParams }
