import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { AccordionMenu, ARIA_LABEL } from './'
import { accordionMenuMock } from './__mocks__'

describe('Footer', () => {
  beforeEach(() => {
    render(<AccordionMenu {...accordionMenuMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.ACCORDION_MENU)
    expect(element).not.toBeNull()
  })
})
