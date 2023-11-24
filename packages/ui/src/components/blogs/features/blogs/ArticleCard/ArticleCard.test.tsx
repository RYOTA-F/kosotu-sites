import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ArticleCard, ARIA_LABEL } from './'
import { articleCardMock } from './__mocks__'

describe('ArticleCard', () => {
  beforeEach(() => {
    render(<ArticleCard {...articleCardMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.ARTICLE_CARD)
    expect(element).not.toBeNull()
  })
})
