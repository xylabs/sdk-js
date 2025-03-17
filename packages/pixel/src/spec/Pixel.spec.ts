/**
 * @vitest-environment jsdom
 */

import { expect, test } from 'vitest'

import { PixelApi } from '../Api/index.ts'
import { XyPixel } from '../Pixel.ts'

test('all', async () => {
  XyPixel.api = new PixelApi('prod')
  const pixel = XyPixel.init('test')
  pixel.identify('test@test.com')
  await pixel.send('testing')
  const x = 1
  expect(x).toBe(1)
})
