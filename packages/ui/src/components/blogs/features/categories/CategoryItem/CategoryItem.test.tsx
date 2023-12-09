import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CategoryItem, ARIA_LABEL } from '.'
import { categoryMockChildren } from './__mocks__'

describe('CategoryItem', () => {
  beforeEach(() => {
    render(<CategoryItem category={categoryMockChildren} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.CATEGORY_ITEM)
    expect(element).not.toBeNull()
  })
})
