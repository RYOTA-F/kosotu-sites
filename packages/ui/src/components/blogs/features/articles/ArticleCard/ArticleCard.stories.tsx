import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCard } from './ArticleCard'
import { articleCardMock } from './__mocks__'

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  decorators: [
    (Story) => (
      <div style={{ width: '460px' }}>
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
