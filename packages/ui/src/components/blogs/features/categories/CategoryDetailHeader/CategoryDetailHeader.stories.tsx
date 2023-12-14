import type { Meta, StoryObj } from '@storybook/react'
import { CategoryDetailHeader } from './CategoryDetailHeader'
import { categoryMockChildren } from './__mocks__'

const meta: Meta<typeof CategoryDetailHeader> = {
  component: CategoryDetailHeader,
}
export default meta

type Story = StoryObj<typeof CategoryDetailHeader>

export const Primary: Story = {
  args: {
    category: categoryMockChildren,
  },
}
