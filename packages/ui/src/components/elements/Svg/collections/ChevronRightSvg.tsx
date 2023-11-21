import { DEFAULT_PROPS } from '../Svg.const'
import { SvgDefaultProps } from '../Svg.types'

export const CHEVRON_RIGHT_SVG_ARIA_LABEL = 'chevronRightSvg' as const

export function ChevronRightSvg({
  width = 50,
  height = 50,
  color = DEFAULT_PROPS.COLOR,
}: SvgDefaultProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={CHEVRON_RIGHT_SVG_ARIA_LABEL}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
