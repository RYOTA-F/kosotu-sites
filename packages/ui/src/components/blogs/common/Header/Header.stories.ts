import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'
import {
  siteNameMock,
  catchPhraseMock,
  twitterUrlMock,
  globalMenuMock,
} from './__mocks__'

const meta: Meta<typeof Header> = {
  component: Header,
}
export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {
    siteName: siteNameMock,
    catchPhrase: catchPhraseMock,
    twitterUrl: twitterUrlMock,
    globalMenu: globalMenuMock,
  },
}
