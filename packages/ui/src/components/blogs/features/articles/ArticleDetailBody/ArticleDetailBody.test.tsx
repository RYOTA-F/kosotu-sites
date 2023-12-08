import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ArticleDetailBody, ARIA_LABEL } from '.'

describe('ArticleDetailBody', () => {
  beforeEach(() => {
    render(<ArticleDetailBody articleBody="" />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.ARTICLE_DETAIL_BODY)
    expect(element).not.toBeNull()
  })
})
