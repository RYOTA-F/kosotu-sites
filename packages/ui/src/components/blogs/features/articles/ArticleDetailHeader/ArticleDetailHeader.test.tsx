import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ArticleDetailHeader, ARIA_LABEL } from '.'
import {
  articleDetailHeaderPropsBlogMock,
  articleDetailHeaderPropsWelcomeMessageMock,
  articleDetailHeaderPropsThanksMessageMock,
} from './__mocks__'

describe('ArticleDetailHeader', () => {
  beforeEach(() => {
    render(
      <ArticleDetailHeader
        article={articleDetailHeaderPropsBlogMock}
        welcomeMessage={articleDetailHeaderPropsWelcomeMessageMock}
        thanksMessage={articleDetailHeaderPropsThanksMessageMock}
      />
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.ARTICLE_DETAIL_HEADER)
    expect(element).not.toBeNull()
  })
})
