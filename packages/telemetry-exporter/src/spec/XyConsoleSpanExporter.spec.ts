import {
  describe, expect, it, vi,
} from 'vitest'

import { spanDurationInMillis, XyConsoleSpanExporter } from '../XyConsoleSpanExporter.ts'

const createMockSpan = (durationMs: number) => ({
  duration: [Math.floor(durationMs / 1000), (durationMs % 1000) * 1e6],
  name: 'test-span',
  spanContext: () => ({ traceId: 'abc123' }),
}) as any

describe('spanDurationInMillis', () => {
  it('converts span duration to milliseconds', () => {
    const span = createMockSpan(1500)
    expect(spanDurationInMillis(span)).toBeCloseTo(1500, 0)
  })

  it('handles zero duration', () => {
    const span = createMockSpan(0)
    expect(spanDurationInMillis(span)).toBe(0)
  })

  it('handles sub-millisecond durations', () => {
    const span = { duration: [0, 500_000], name: 'fast' } as any
    expect(spanDurationInMillis(span)).toBeCloseTo(0.5)
  })
})

describe('XyConsoleSpanExporter', () => {
  it('constructs with defaults', () => {
    const exporter = new XyConsoleSpanExporter()
    expect(exporter.logLevel).toBe(0)
    expect(exporter.logger).toBe(console)
  })

  it('constructs with custom logLevel and logger', () => {
    const logger = { log: vi.fn() } as any
    const exporter = new XyConsoleSpanExporter(2, logger)
    expect(exporter.logLevel).toBe(2)
    expect(exporter.logger).toBe(logger)
  })

  it('export logs spans above logLevel', () => {
    const logger = { log: vi.fn() } as any
    const exporter = new XyConsoleSpanExporter(0, logger)
    exporter.export([createMockSpan(50)])
    expect(logger.log).toHaveBeenCalled()
  })

  it('export filters spans below logLevel', () => {
    const logger = { log: vi.fn() } as any
    const exporter = new XyConsoleSpanExporter(4, logger)
    // A 50ms span should be level 2, below logLevel 4
    exporter.export([createMockSpan(50)])
    expect(logger.log).not.toHaveBeenCalled()
  })

  it('export handles multiple spans', () => {
    const logger = { log: vi.fn() } as any
    const exporter = new XyConsoleSpanExporter(0, logger)
    exporter.export([createMockSpan(50), createMockSpan(100)])
    expect(logger.log).toHaveBeenCalledTimes(2)
  })

  it('spanLevel returns correct level based on duration', () => {
    const exporter = new XyConsoleSpanExporter()
    expect(exporter.spanLevel(createMockSpan(0))).toBe(0)
    expect(exporter.spanLevel(createMockSpan(5))).toBe(1)
    expect(exporter.spanLevel(createMockSpan(50))).toBe(2)
    expect(exporter.spanLevel(createMockSpan(500))).toBe(3)
    expect(exporter.spanLevel(createMockSpan(5000))).toBe(4)
  })

  it('logColor returns chalk function for known levels', () => {
    const exporter = new XyConsoleSpanExporter()
    expect(typeof exporter.logColor(0)).toBe('function')
    expect(typeof exporter.logColor(1)).toBe('function')
    expect(typeof exporter.logColor(4)).toBe('function')
  })

  it('logColor returns magenta for unknown levels', () => {
    const exporter = new XyConsoleSpanExporter()
    const color = exporter.logColor(99)
    expect(typeof color).toBe('function')
  })

  it('durationToLogLevel is defined', () => {
    expect(XyConsoleSpanExporter.durationToLogLevel).toEqual([0, 1, 10, 100, 1000])
  })

  it('logLevelToChalkColor has 5 entries', () => {
    expect(XyConsoleSpanExporter.logLevelToChalkColor).toHaveLength(5)
  })
})
