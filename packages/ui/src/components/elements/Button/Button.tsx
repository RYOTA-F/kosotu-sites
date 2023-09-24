import { ButtonProps } from './Button.types'
import { Button as MuiButton } from '@mui/material'
import { ARIA_LABEL } from '.'

export function Button({ children, onClick }: ButtonProps) {
  return (
    <MuiButton aria-label={ARIA_LABEL.BUTTON} onClick={onClick}>
      {children}
    </MuiButton>
  )
}
