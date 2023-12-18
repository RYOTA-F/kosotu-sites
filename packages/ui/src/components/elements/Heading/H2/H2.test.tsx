import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { H2 } from './H2'
import { ARIA_LABEL } from '../const'

describe('H2', () => {
  beforeEach(() => {
    render(<H2>React</H2>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.H2)
    expect(element).not.toBeNull()
  })
})
