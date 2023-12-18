import type { Meta, StoryObj } from '@storybook/react'
import { H2 } from './H2'

const meta: Meta<typeof H2> = {
  component: H2,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof H2>

export const Primary: Story = {
  args: {
    children: 'H2',
  },
}
