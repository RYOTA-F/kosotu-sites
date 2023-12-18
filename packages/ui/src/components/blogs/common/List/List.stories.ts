import type { Meta, StoryObj } from '@storybook/react'
import { List } from './List'

const meta: Meta<typeof List> = {
  component: List,
}
export default meta

type Story = StoryObj<typeof List>

export const Primary: Story = {
  args: {
    list: ['Item 1', 'Item 2', 'Item 3'],
  },
}
