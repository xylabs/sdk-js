import { playwright } from '@vitest/browser-playwright'
import { config } from 'dotenv'
import { defineConfig } from 'vitest/config'

config({ quiet: true })

const coverageConfig = {
  provider: 'v8' as const,
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
    '**/events/src/model/**',
  ],
}

export default defineConfig({
  test: {
    coverage: coverageConfig,
    globals: true,
    watch: false,
    projects: [
      {
        // Runs shared tests (spec/*.spec.ts) and node-only tests (spec/node/**/*.spec.ts)
        test: {
          name: 'node',
          environment: 'node',
          include: ['packages/*/src/spec/**/*.spec.ts'],
          exclude: ['**/spec/browser/**'],
        },
      },
      {
        // Runs shared tests (spec/*.spec.ts) and browser-only tests (spec/browser/**/*.spec.ts)
        // To make a test browser-compatible, keep it in spec/ root (runs in both)
        // or put it in spec/browser/ (browser only). Node-only tests go in spec/node/.
        optimizeDeps: {
          esbuildOptions: {
            // Suppress "Module buffer has been externalized for browser compatibility" from bn.js
            plugins: [{
              name: 'buffer-external',
              setup(build) {
                build.onResolve({ filter: /^buffer$/ }, () => ({ external: true }))
              },
            }],
          },
        },
        test: {
          name: 'browser',
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              { browser: 'chromium' },
            ],
          },
          include: ['packages/*/src/spec/**/*.spec.ts'],
          exclude: ['**/spec/node/**'],
        },
      },
    ],
  },
})
