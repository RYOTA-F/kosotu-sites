import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TagItem, ARIA_LABEL } from '.'
import { tagItemMock } from './__mocks__'

describe('TagItem', () => {
  beforeEach(() => {
    render(<TagItem tag={tagItemMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.TAG_ITEM)
    expect(element).not.toBeNull()
  })
})
