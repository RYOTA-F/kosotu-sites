export default {
  plugins: [],
  test: {
    global: true,
    environment: 'happy-dom',
    setupFiles: './src/setup/vitest.ts',
  },
}
