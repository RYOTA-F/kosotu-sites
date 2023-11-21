import { DEFAULT_PROPS } from '../Svg.const'
import { SvgDefaultProps } from '../Svg.types'

export const HOME_SVG_ARIA_LABEL = 'homeSvg' as const

export function HomeSvg({
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
      aria-label={HOME_SVG_ARIA_LABEL}
    >
      <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
      <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
    </svg>
  )
}
