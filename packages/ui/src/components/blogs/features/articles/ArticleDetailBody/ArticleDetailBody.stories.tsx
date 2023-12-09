import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailBody } from './ArticleDetailBody'

const meta: Meta<typeof ArticleDetailBody> = {
  component: ArticleDetailBody,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ArticleDetailBody>

export const Primary: Story = {
  args: {},
}
