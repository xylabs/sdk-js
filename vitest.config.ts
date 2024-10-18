import dotenv from 'dotenv'
import { defineConfig } from 'vitest/config'

dotenv.config()

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.{spec,spec}.?(c|m)[jt]s?(x)'],
    setupFiles: ['./vitest.startup.ts'],
  },
})
