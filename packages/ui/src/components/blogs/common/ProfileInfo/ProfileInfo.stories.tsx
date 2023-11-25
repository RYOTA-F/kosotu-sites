import type { Meta, StoryObj } from '@storybook/react'
import { ProfileInfo } from './ProfileInfo'
import {
  profilePathMock,
  profileImageMock,
  profileAuthorMock,
  profileDescriptionsMock,
  profileTwitterMock,
} from './__mocks__'

const meta: Meta<typeof ProfileInfo> = {
  component: ProfileInfo,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ProfileInfo>

export const Primary: Story = {
  args: {
    profilePath: profilePathMock,
    image: profileImageMock,
    author: profileAuthorMock,
    descriptions: profileDescriptionsMock,
    twitter: profileTwitterMock,
  },
}
