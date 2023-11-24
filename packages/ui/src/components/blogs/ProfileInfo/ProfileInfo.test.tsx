import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { ProfileInfo, ARIA_LABEL } from '.'
import {
  profilePathMock,
  profileImageMock,
  profileAuthorMock,
  profileDescriptionsMock,
  profileTwitterMock,
} from './__mocks__'

describe('ProfileInfo', () => {
  beforeEach(() => {
    render(
      <ProfileInfo
        profilePath={profilePathMock}
        image={profileImageMock}
        author={profileAuthorMock}
        descriptions={profileDescriptionsMock}
        twitter={profileTwitterMock}
      />
    )
  })

  test('描画される', () => {
    const element = screen.getByLabelText(ARIA_LABEL.PROFILE_INFO)
    expect(element).not.toBeNull()
  })
})
