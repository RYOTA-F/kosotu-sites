import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { siteNameMock, menuListMock } from './__mocks__'

const meta: Meta<typeof Footer> = {
  component: Footer,
}
export default meta

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {
    siteName: siteNameMock,
    menuList: menuListMock,
  },
}
