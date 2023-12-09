import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ArticleCardList, ARIA_LABEL } from '.'
import { articleCardListMock } from './__mocks__'

describe('ArticleCardList', () => {
  beforeEach(() => {
    render(<ArticleCardList articles={articleCardListMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.ARTICLE_CARD_LIST)
    expect(element).not.toBeNull()
  })
})
