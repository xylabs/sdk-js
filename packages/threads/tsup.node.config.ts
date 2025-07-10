import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  target: 'node22',
  outDir: 'dist/node',
  format: ['esm'],
  entry: [
    './src/master/implementation.node.ts',
    './src/worker/worker.node.ts',
    './src/master/index-node.ts',
    './src/index-node.ts',
    './src/master/pool-node.ts',
  ],
  outExtension: () => ({ js: '.mjs' }),
  splitting: false,
  sourcemap: true,
  clean: true,
})
