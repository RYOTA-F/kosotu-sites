import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  component: Label,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof Label>

export const Primary: Story = {
  args: {
    children: 'Label',
  },
}
