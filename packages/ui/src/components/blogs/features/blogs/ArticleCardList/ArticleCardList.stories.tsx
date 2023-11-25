import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCardList } from './ArticleCardList'
import { articleCardListMock } from './__mocks__'

const meta: Meta<typeof ArticleCardList> = {
  component: ArticleCardList,
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', marginTop: '5%' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ArticleCardList>

export const Primary: Story = {
  args: {
    articles: articleCardListMock,
  },
}
