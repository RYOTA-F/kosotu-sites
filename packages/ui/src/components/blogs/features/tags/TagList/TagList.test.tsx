import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TagList, ARIA_LABEL } from '.'
import { tagsMock } from './__mocks__'

describe('TagList', () => {
  beforeEach(() => {
    render(<TagList tags={tagsMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.TAG_LIST)
    expect(element).not.toBeNull()
  })
})
