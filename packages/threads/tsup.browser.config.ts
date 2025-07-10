import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  outDir: 'dist/browser',
  format: ['esm'],
  entry: [
    './src/master/implementation.browser.ts',
    './src/worker/worker.browser.ts',
    './src/master/index-browser.ts',
    './src/index-browser.ts',
    './src/master/pool-browser.ts',
  ],
  outExtension: () => ({ js: '.mjs' }),
  splitting: false,
  sourcemap: true,
  clean: true,
})
