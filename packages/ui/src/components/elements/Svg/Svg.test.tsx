import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import {
  ChevronRightSvg,
  CHEVRON_RIGHT_SVG_ARIA_LABEL,
  FolderSvg,
  FOLDER_SVG_ARIA_LABEL,
  HomeSvg,
  HOME_SVG_ARIA_LABEL,
  TagSvg,
  TAG_SVG_ARIA_LABEL,
  TimeSvg,
  TIME_SVG_ARIA_LABEL,
  ListSvg,
  LIST_SVG_ARIA_LABEL,
  TwitterSvg,
  TWITTER_SVG_ARIA_LABEL,
} from './Svg'

describe('Svg', () => {
  describe('ChevronRightSvg', () => {
    test('描画される', () => {
      render(<ChevronRightSvg />)
      const element = screen.getByLabelText(CHEVRON_RIGHT_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })

  describe('FolderSvg', () => {
    test('描画される', () => {
      render(<FolderSvg />)
      const element = screen.getByLabelText(FOLDER_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })

  describe('HomeSvg', () => {
    test('描画される', () => {
      render(<HomeSvg />)
      const element = screen.getByLabelText(HOME_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })

  describe('TagSvg', () => {
    test('描画される', () => {
      render(<TagSvg />)
      const element = screen.getByLabelText(TAG_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })

  describe('TimeSvg', () => {
    test('描画される', () => {
      render(<TimeSvg />)
      const element = screen.getByLabelText(TIME_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })

  describe('ListSvg', () => {
    test('描画される', () => {
      render(<ListSvg />)
      const element = screen.getByLabelText(LIST_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })

  describe('TwitterSvg', () => {
    test('描画される', () => {
      render(<TwitterSvg />)
      const element = screen.getByLabelText(TWITTER_SVG_ARIA_LABEL)
      expect(element).not.toBeNull()
    })
  })
})
