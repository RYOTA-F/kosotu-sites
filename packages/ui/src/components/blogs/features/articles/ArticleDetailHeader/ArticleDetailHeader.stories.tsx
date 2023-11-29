import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailHeader } from './ArticleDetailHeader'
import {
  articleDetailHeaderPropsBlogMock,
  articleDetailHeaderPropsWelcomeMessageMock,
  articleDetailHeaderPropsThanksMessageMock,
} from './__mocks__'

const meta: Meta<typeof ArticleDetailHeader> = {
  component: ArticleDetailHeader,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof ArticleDetailHeader>

export const Primary: Story = {
  args: {
    article: articleDetailHeaderPropsBlogMock,
    welcomeMessage: articleDetailHeaderPropsWelcomeMessageMock,
    thanksMessage: articleDetailHeaderPropsThanksMessageMock,
  },
}
