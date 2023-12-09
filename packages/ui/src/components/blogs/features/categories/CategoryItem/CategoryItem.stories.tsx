import type { Meta, StoryObj } from '@storybook/react'
import { CategoryItem } from './CategoryItem'
import { categoryMockParent, categoryMockChildren } from './__mocks__'

const meta: Meta<typeof CategoryItem> = {
  component: CategoryItem,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof CategoryItem>

export const Parent: Story = {
  args: {
    category: categoryMockParent,
  },
}

export const Children: Story = {
  args: {
    category: categoryMockChildren,
  },
}
