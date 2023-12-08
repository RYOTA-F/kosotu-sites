import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { TableOfContents, ARIA_LABEL } from '.'
import { tableOfContentsMock } from './__mocks__'

describe('TableOfContents', () => {
  beforeEach(() => {
    render(<TableOfContents tableOfContents={tableOfContentsMock} />)
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.TABLE_OF_CONTENTS)
    expect(element).not.toBeNull()
  })
})
