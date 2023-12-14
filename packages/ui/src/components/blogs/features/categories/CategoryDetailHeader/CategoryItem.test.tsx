import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CategoryDetailHeader, ARIA_LABEL } from '.'
import { categoryMockChildren } from './__mocks__'

describe('CategoryDetailHeader', () => {
  beforeEach(() => {
    render(<CategoryDetailHeader category={categoryMockChildren} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.CATEGORY_DETAIL_HEADER)
    expect(element).not.toBeNull()
  })
})
