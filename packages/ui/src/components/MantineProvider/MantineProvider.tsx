import { MantineProvider as ManProvider } from '@mantine/core'
import { MantineProviderProps } from '.'

export function MantineProvider({ children }: MantineProviderProps) {
  return <ManProvider>{children}</ManProvider>
}
