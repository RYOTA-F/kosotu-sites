import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { H1 } from './H1'
import { ARIA_LABEL } from '../const'

describe('H1', () => {
  beforeEach(() => {
    render(<H1>React</H1>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.H1)
    expect(element).not.toBeNull()
  })
})
