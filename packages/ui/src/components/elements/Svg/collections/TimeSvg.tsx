import { DEFAULT_PROPS } from '../Svg.const'
import { SvgDefaultProps } from '../Svg.types'

export const TIME_SVG_ARIA_LABEL = 'timeSvg' as const

export function TimeSvg({
  width = 40,
  height = 40,
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
      aria-label={TIME_SVG_ARIA_LABEL}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
