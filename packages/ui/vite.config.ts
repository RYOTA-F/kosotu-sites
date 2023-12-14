import react from '@vitejs/plugin-react'
import path from 'path'

export default {
  plugins: [react()],
  test: {
    global: true,
    environment: 'happy-dom',
    setupFiles: './src/setup/vitest.ts',
  },
  resolve: {
    alias: {
      logic: path.resolve(__dirname, '../logic/src'),
    },
  },
}
