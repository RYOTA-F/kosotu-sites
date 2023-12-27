import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { SitemapList, ARIA_LABEL } from '.'
import { sitemapMock } from './__mocks__'

describe('SitemapList', () => {
  beforeEach(() => {
    render(<SitemapList sitemap={sitemapMock} topText="" topUrl="" />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.SITEMAP_LIST)
    expect(element).not.toBeNull()
  })
})
