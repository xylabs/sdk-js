import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { DefaultJsonBodyParserOptions, getJsonBodyParserOptions } from '../jsonBodyParser.ts'

describe('jsonBodyParser', () => {
  describe('getJsonBodyParserOptions', () => {
    it('returns default options if none supplied', () => {
      // Act
      const result = getJsonBodyParserOptions()
      // Assert
      expect(result).toEqual(DefaultJsonBodyParserOptions)
    })
    it('returns merged options if options supplied', () => {
      // Arrange
      const options = { limit: '1mb' }
      // Act
      const result = getJsonBodyParserOptions(options)
      // Assert
      expect(result).toEqual({ ...DefaultJsonBodyParserOptions, ...options })
    })
  })
})
