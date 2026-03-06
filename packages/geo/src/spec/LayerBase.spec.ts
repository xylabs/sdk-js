import {
  describe, expect, it, vi,
} from 'vitest'

vi.mock('mapbox-gl', () => ({
  default: {},
}))

import { LayerBase } from '../LayerBase.ts'

interface MockLayer {
  id: string
  source: string
  type: string
}

class TestLayer extends LayerBase<MockLayer> {
  buildLayer(): MockLayer {
    return { id: this.id, source: this.source, type: 'fill' }
  }
}

const createMockMap = () => ({
  getLayer: vi.fn(),
  removeLayer: vi.fn(),
  addLayer: vi.fn(),
})

describe('LayerBase', () => {
  describe('constructor', () => {
    it('sets id and source', () => {
      const layer = new TestLayer('test-id', 'test-source')
      expect(layer.id).toBe('test-id')
      expect(layer.source).toBe('test-source')
    })
  })

  describe('buildLayer', () => {
    it('returns a layer object with id, source, and type', () => {
      const layer = new TestLayer('my-layer', 'my-source')
      const built = layer.buildLayer()
      expect(built).toEqual({ id: 'my-layer', source: 'my-source', type: 'fill' })
    })
  })

  describe('update', () => {
    it('adds the layer when show is true and no existing layer', () => {
      const mockMap = createMockMap()
      mockMap.getLayer.mockReturnValue(undefined)

      const layer = new TestLayer('layer-1', 'source-1')
      layer.update(mockMap as never, true)

      expect(mockMap.getLayer).toHaveBeenCalledWith('layer-1')
      expect(mockMap.removeLayer).not.toHaveBeenCalled()
      expect(mockMap.addLayer).toHaveBeenCalledWith({ id: 'layer-1', source: 'source-1', type: 'fill' })
    })

    it('removes existing layer before adding when show is true', () => {
      const mockMap = createMockMap()
      mockMap.getLayer.mockReturnValue({ id: 'layer-1' })

      const layer = new TestLayer('layer-1', 'source-1')
      layer.update(mockMap as never, true)

      expect(mockMap.removeLayer).toHaveBeenCalledWith('layer-1')
      expect(mockMap.addLayer).toHaveBeenCalledWith({ id: 'layer-1', source: 'source-1', type: 'fill' })
    })

    it('removes existing layer and does not add when show is false', () => {
      const mockMap = createMockMap()
      mockMap.getLayer.mockReturnValue({ id: 'layer-1' })

      const layer = new TestLayer('layer-1', 'source-1')
      layer.update(mockMap as never, false)

      expect(mockMap.removeLayer).toHaveBeenCalledWith('layer-1')
      expect(mockMap.addLayer).not.toHaveBeenCalled()
    })

    it('does nothing when show is false and no existing layer', () => {
      const mockMap = createMockMap()
      mockMap.getLayer.mockReturnValue(undefined)

      const layer = new TestLayer('layer-1', 'source-1')
      layer.update(mockMap as never, false)

      expect(mockMap.removeLayer).not.toHaveBeenCalled()
      expect(mockMap.addLayer).not.toHaveBeenCalled()
    })

    it('defaults show to true', () => {
      const mockMap = createMockMap()
      mockMap.getLayer.mockReturnValue(undefined)

      const layer = new TestLayer('layer-1', 'source-1')
      layer.update(mockMap as never)

      expect(mockMap.addLayer).toHaveBeenCalled()
    })
  })
})
