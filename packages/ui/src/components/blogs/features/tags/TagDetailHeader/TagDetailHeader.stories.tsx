import type { Meta, StoryObj } from '@storybook/react'
import { TagDetailHeader } from './TagDetailHeader'
import { tagMockChildren } from './__mocks__'

const meta: Meta<typeof TagDetailHeader> = {
  component: TagDetailHeader,
}
export default meta

type Story = StoryObj<typeof TagDetailHeader>

export const Primary: Story = {
  args: {
    tag: tagMockChildren,
  },
}
