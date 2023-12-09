import type { Meta, StoryObj } from '@storybook/react'
import { TableOfContents } from './TableOfContents'
import { tableOfContentsMock } from './__mocks__'

const meta: Meta<typeof TableOfContents> = {
  component: TableOfContents,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof TableOfContents>

export const Primary: Story = {
  args: {
    tableOfContents: tableOfContentsMock,
  },
}
