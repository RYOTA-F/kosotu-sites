import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { List, ARIA_LABEL } from '.'

describe('List', () => {
  beforeEach(() => {
    render(<List list={['item1', 'item2', 'item3']} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.LIST)
    expect(element).not.toBeNull()
  })
})
