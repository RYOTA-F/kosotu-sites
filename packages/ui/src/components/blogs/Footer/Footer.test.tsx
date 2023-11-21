import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Footer, ARIA_LABEL } from '.'
import { siteNameMock, menuListMock } from './__mocks__'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer siteName={siteNameMock} menuList={menuListMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.FOOTER)
    expect(element).not.toBeNull()
  })
})
