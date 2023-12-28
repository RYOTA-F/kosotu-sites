import path from 'path'

export default {
  plugins: [],
  test: {
    global: true,
    environment: 'happy-dom',
    setupFiles: './src/setup/vitest.ts',
  },
  resolve: {
    alias: {
      usecase: path.resolve(__dirname, './src'),
    },
  },
}
