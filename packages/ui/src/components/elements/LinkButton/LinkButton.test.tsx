import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { LinkButton } from './LinkButton'
import { ARIA_LABEL } from './LinkButton.const'

describe('LinkButton', () => {
  beforeEach(() => {
    render(<LinkButton href="/">button</LinkButton>)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.LINK_BUTTON)
    expect(element).not.toBeNull()
  })
})
