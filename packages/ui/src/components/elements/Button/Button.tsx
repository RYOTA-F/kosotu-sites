import { ButtonProps } from './Button.type'

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
