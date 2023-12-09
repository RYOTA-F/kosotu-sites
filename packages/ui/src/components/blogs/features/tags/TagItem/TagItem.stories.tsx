import type { Meta, StoryObj } from '@storybook/react'
import { TagItem } from './TagItem'
import { tagItemMock } from './__mocks__'

const meta: Meta<typeof TagItem> = {
  component: TagItem,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof TagItem>

export const Primary: Story = {
  args: {
    tag: tagItemMock,
  },
}
