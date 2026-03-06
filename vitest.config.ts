import { config } from 'dotenv'
import { defineConfig } from 'vitest/config'

config({ quiet: true })

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary'],
      reportsDirectory: './coverage',
      include: ['packages/*/src/**/*.ts'],
      exclude: [
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.bench.ts',
        '**/spec/**',
        '**/index.ts',
        '**/*.d.ts',
        '**/threads/src/master/**',
        '**/threads/src/worker/**',
      ],
    },
    globals: true,
    watch: false,
  },
})
