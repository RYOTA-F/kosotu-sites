import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { PaginationItem, ARIA_LABEL } from '.'

describe('PaginationItem', () => {
  beforeEach(() => {
    render(
      <PaginationItem
        pageNumber={2}
        isCurrentPage={true}
        currentPagePattern="/"
      />
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.PAGINATION_ITEM)
    expect(element).not.toBeNull()
  })
})
