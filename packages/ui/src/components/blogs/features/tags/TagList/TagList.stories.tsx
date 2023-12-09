import type { Meta, StoryObj } from '@storybook/react'
import { TagList } from './TagList'
import { tagsMock } from './__mocks__'

const meta: Meta<typeof TagList> = {
  component: TagList,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof TagList>

export const Primary: Story = {
  args: {
    tags: tagsMock,
  },
}
