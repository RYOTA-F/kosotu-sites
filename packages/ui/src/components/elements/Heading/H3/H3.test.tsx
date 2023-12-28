import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { H3 } from './H3'
import { ARIA_LABEL } from '../const'

describe('H3', () => {
  beforeEach(() => {
    render(<H3>React</H3>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.H3)
    expect(element).not.toBeNull()
  })
})
