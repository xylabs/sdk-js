import { config } from 'dotenv'
import { defineConfig } from 'vitest/config'

config({ quiet: true })

export default defineConfig({
  test: {
    globals: true,
    watch: false,
    poolOptions: { forks: { execArgv: ['--expose-gc'] } },
  },
})
