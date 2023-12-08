import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CategoryList, ARIA_LABEL } from '.'
import { categoriesMock } from './__mocks__'

describe('CategoryList', () => {
  beforeEach(() => {
    render(<CategoryList categories={categoriesMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.CATEGORY_LIST)
    expect(element).not.toBeNull()
  })
})
