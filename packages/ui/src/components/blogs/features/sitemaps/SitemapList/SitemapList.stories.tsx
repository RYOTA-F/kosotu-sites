import type { Meta, StoryObj } from '@storybook/react'
import { SitemapList } from './SitemapList'
import { sitemapMock } from './__mocks__'

const meta: Meta<typeof SitemapList> = {
  component: SitemapList,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof SitemapList>

export const Top: Story = {
  args: {
    sitemap: sitemapMock,
    topText: 'Top',
    topUrl: '/',
  },
}
