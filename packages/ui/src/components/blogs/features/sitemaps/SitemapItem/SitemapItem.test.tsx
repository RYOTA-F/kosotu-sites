import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { SitemapItem, ARIA_LABEL } from '.'

describe('SitemapItem', () => {
  beforeEach(() => {
    render(<SitemapItem type="top" label="Top" url="/" />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.SITEMAP)
    expect(element).not.toBeNull()
  })
})
