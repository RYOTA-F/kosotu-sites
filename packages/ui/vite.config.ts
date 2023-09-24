import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  test: {
    global: true,
    environment: 'happy-dom',
    setupFiles: './src/setup/vitest.ts',
  },
}
