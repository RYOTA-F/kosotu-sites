import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TagDetailHeader, ARIA_LABEL } from '.'
import { tagMockChildren } from './__mocks__'

describe('TagDetailHeader', () => {
  beforeEach(() => {
    render(<TagDetailHeader tag={tagMockChildren} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.TAG_DETAIL_HEADER)
    expect(element).not.toBeNull()
  })
})
