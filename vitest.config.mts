import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': resolve(import.meta.dirname, 'src') } },
  define: {
    'process.env.NODE_ENV': JSON.stringify('testing'),
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.spec.ts'],
    restoreMocks: true,
    // INPUT_DEBOUNCE_DELAY reads process.env.NODE_ENV at runtime; `define` does not
    // reliably replace process.env.* under vitest, so set it in the test env too.
    env: { NODE_ENV: 'testing' },
  },
})
