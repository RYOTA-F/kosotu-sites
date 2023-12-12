import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { CategoryLabel, ARIA_LABEL } from '.'

describe('CategoryLabel', () => {
  beforeEach(() => {
    render(<CategoryLabel name="React" />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.CATEGORY_LABEL)
    expect(element).not.toBeNull()
  })
})
