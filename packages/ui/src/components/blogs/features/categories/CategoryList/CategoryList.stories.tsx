import type { Meta, StoryObj } from '@storybook/react'
import { CategoryList } from './CategoryList'
import { categoriesMock } from './__mocks__'

const meta: Meta<typeof CategoryList> = {
  component: CategoryList,
  decorators: [
    (Story) => (
      <div style={{ width: '960px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof CategoryList>

export const Primary: Story = {
  args: {
    categories: categoriesMock,
  },
}
