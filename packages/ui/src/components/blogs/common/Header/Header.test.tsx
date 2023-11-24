import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Header, ARIA_LABEL } from '.'
import {
  siteNameMock,
  catchPhraseMock,
  twitterUrlMock,
  globalMenuMock,
} from './__mocks__'

describe('Header', () => {
  beforeEach(() => {
    render(
      <Header
        siteName={siteNameMock}
        catchPhrase={catchPhraseMock}
        twitterUrl={twitterUrlMock}
        globalMenu={globalMenuMock}
      />
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.HEADER)
    expect(element).not.toBeNull()
  })
})
