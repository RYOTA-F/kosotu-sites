import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Label } from './Label'
import { ARIA_LABEL } from './Label.const'

describe('Label', () => {
  beforeEach(() => {
    render(<Label>React</Label>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.LABEL)
    expect(element).not.toBeNull()
  })
})
