import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  outDir: 'dist/neutral',
  format: ['esm'],
  entry: [
    './src/observable.ts',
    './src/observable-promise.ts',
    './src/master/implementation.ts',
    './src/master/register.ts',
    './src/master/spawn.ts',
    './src/master/thread.ts',
    './src/types/messages.ts',
  ],
  outExtension: () => ({ js: '.mjs' }),
  splitting: false,
  sourcemap: true,
  clean: true,
})
