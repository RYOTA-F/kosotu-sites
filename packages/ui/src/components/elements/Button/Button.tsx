import { ButtonProps } from './Button.type'
import { Button as MuiButton } from '@mui/material'

export function Button({ children, onClick }: ButtonProps) {
  return <MuiButton onClick={onClick}>{children}</MuiButton>
}
