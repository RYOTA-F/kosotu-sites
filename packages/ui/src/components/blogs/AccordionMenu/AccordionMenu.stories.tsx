import type { Meta, StoryObj } from '@storybook/react'
import { AccordionMenu } from './AccordionMenu'
import { accordionMenuMock } from './__mocks__'

const meta: Meta<typeof AccordionMenu> = {
  component: AccordionMenu,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '72px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof AccordionMenu>

export const Primary: Story = {
  args: {
    ...accordionMenuMock,
  },
}
