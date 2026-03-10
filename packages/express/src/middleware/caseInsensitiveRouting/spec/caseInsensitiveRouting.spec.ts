import type { Express } from 'express-serve-static-core'
import {
  describe, expect, it, vi,
} from 'vitest'

import { disableCaseSensitiveRouting, enableCaseSensitiveRouting } from '../caseInsensitiveRouting.ts'

describe('caseInsensitiveRouting', () => {
  const createMockApp = () => ({
    enable: vi.fn(),
    disable: vi.fn(),
  })

  describe('enableCaseSensitiveRouting', () => {
    it('should call app.enable with the correct setting', () => {
      const app = createMockApp()
      enableCaseSensitiveRouting(app as unknown as Express)
      expect(app.enable).toHaveBeenCalledWith('case sensitive routing')
    })
  })

  describe('disableCaseSensitiveRouting', () => {
    it('should call app.disable with the correct setting', () => {
      const app = createMockApp()
      disableCaseSensitiveRouting(app as unknown as Express)
      expect(app.disable).toHaveBeenCalledWith('case sensitive routing')
    })
  })
})
