import type { Meta, StoryObj } from '@storybook/react'
import { H1 } from './H1'

const meta: Meta<typeof H1> = {
  component: H1,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof H1>

export const Primary: Story = {
  args: {
    children: 'H1',
  },
}
