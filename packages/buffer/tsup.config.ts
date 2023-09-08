import { defineConfig } from 'tsup'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  bundle: true,
  cjsInterop: true,
  clean: true,
  dts: {
    entry: ['src/index.ts', 'src/nodeIndex.ts'],
  },
  entry: ['src/index.ts', 'src/nodeIndex.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  splitting: false,
  tsconfig: 'tsconfig.build.json',
})
