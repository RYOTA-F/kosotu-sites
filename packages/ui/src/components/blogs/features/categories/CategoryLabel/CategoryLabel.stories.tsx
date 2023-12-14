import type { Meta, StoryObj } from '@storybook/react'
import { CategoryLabel } from './CategoryLabel'

const meta: Meta<typeof CategoryLabel> = {
  component: CategoryLabel,
}
export default meta

type Story = StoryObj<typeof CategoryLabel>

export const Primary: Story = {
  args: {
    name: 'React',
  },
}
