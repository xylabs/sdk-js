import { defineConfig } from 'tsup'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  bundle: true,
  cjsInterop: true,
  clean: false,
  dts: {
    entry: ['src/cjsIndex.ts', 'src/esmIndex.ts'],
  },
  entry: ['src/cjsIndex.ts', 'src/esmIndex.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  splitting: false,
  tsconfig: 'tsconfig.build.json',
})
