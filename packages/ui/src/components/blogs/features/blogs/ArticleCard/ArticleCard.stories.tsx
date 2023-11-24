import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCard } from './ArticleCard'
import { articleCardMock } from './__mocks__'

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '260px', width: '460px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ArticleCard>

export const Primary: Story = {
  args: {
    ...articleCardMock,
  },
}
