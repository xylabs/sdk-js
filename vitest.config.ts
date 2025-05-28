import dotenv from 'dotenv'
import { defineConfig } from 'vitest/config'

dotenv.config()

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    poolOptions: { forks: { execArgv: ['--expose-gc'] } },
  },
})
