import type { Meta, StoryObj } from '@storybook/react'
import { SitemapItem } from './SitemapItem'

const meta: Meta<typeof SitemapItem> = {
  component: SitemapItem,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof SitemapItem>

export const Top: Story = {
  args: {
    type: 'top',
    label: 'Top',
    url: '/',
  },
}

export const Parent: Story = {
  args: {
    type: 'parent',
    label: 'Parent',
    url: '/',
  },
}

export const Children: Story = {
  args: {
    type: 'children',
    label: 'Children',
    url: '/',
  },
}

export const Blog: Story = {
  args: {
    type: 'blog',
    label: 'Blog',
    url: '/',
  },
}
