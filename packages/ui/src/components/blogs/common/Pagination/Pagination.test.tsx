import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Pagination, ARIA_LABEL } from '.'

describe('Pagination', () => {
  beforeEach(() => {
    render(<Pagination currentPage={2} totalPage={10} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.PAGINATION)
    expect(element).not.toBeNull()
  })
})
