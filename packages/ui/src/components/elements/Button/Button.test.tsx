import { vi, describe, test, expect, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import { Button } from '.'

describe('Button', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('children', () => {
    test('正常に描画される', () => {
      const children = 'test'
      render(<Button>{children}</Button>)
      const buttonElement = screen.getByText(children)

      expect(buttonElement).toBe(buttonElement)
    })
  })

  describe('onClick', () => {
    test('クリックすると発火する', async () => {
      const children = 'click'
      const handleClickMock = vi.fn()
      render(<Button onClick={handleClickMock}>{children}</Button>)
      const buttonElement = screen.getByText(children)

      await user.click(buttonElement)
      expect(handleClickMock).toHaveBeenCalledTimes(1)
    })
  })
})
