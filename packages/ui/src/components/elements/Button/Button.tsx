import { Button as ManButton } from '@mantine/core'
import { ButtonProps, ARIA_LABEL } from '.'

export function Button({ children, onClick }: ButtonProps) {
  return (
    <ManButton aria-label={ARIA_LABEL.BUTTON} onClick={onClick}>
      {children}
    </ManButton>
  )
}
