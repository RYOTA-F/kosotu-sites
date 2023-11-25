import React from 'react'
import type { Preview, StoryFn } from '@storybook/react'
import './reset.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export const decorators = [(Story: StoryFn) => <Story />]

export default preview
