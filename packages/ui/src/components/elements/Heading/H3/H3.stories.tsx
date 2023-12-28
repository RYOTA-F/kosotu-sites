import type { Meta, StoryObj } from '@storybook/react'
import { H3 } from './H3'

const meta: Meta<typeof H3> = {
  component: H3,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof H3>

export const Primary: Story = {
  args: {
    children: 'H3',
  },
}
