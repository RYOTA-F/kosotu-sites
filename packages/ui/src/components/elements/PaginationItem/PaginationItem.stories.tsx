import type { Meta, StoryObj } from '@storybook/react'
import { PaginationItem } from './PaginationItem'

const meta: Meta<typeof PaginationItem> = {
  component: PaginationItem,
  decorators: [
    (Story) => (
      <div style={{ height: '36px', width: '36px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof PaginationItem>

export const Primary: Story = {
  args: {
    pageNumber: 2,
    isCurrentPage: true,
    pathName: '',
  },
}
