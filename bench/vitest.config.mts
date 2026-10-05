import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': resolve(import.meta.dirname, '../src') } },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  test: {
    root: resolve(import.meta.dirname, '..'),
    environment: 'happy-dom',
    include: ['bench/**/*.spec.ts'],
    testTimeout: 600000,
    env: { NODE_ENV: 'production' },
  },
})
