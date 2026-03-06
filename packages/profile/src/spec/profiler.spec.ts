import {
  describe, expect, it,
} from 'vitest'

import {
  createProfiler, profile, profileReport,
} from '../profiler.ts'

describe('profiler', () => {
  it('creates an empty profiler', () => {
    const profiler = createProfiler()
    expect(profiler).toEqual({})
  })

  it('records profile entries', () => {
    const profiler = createProfiler()
    profile(profiler, 'step1')
    expect(profiler['step1']).toBeDefined()
    expect(profiler['step1'].length).toBe(1)
  })

  it('records multiple timestamps for the same name', () => {
    const profiler = createProfiler()
    profile(profiler, 'step1')
    profile(profiler, 'step1')
    expect(profiler['step1'].length).toBe(2)
  })

  it('generates a report with durations', () => {
    const profiler = createProfiler()
    profile(profiler, 'step1')
    profile(profiler, 'step1')
    const report = profileReport(profiler)
    expect(report['step1']).toBeGreaterThanOrEqual(0)
    expect(report['-all-']).toBeGreaterThanOrEqual(0)
  })

  it('returns empty report for empty profiler', () => {
    const profiler = createProfiler()
    const report = profileReport(profiler)
    expect(report).toEqual({})
  })

  it('handles multiple named entries in report', () => {
    const profiler = createProfiler()
    profile(profiler, 'step1')
    profile(profiler, 'step2')
    profile(profiler, 'step1')
    profile(profiler, 'step2')
    const report = profileReport(profiler)
    expect(report['step1']).toBeGreaterThanOrEqual(0)
    expect(report['step2']).toBeGreaterThanOrEqual(0)
    expect(report['-all-']).toBeGreaterThanOrEqual(0)
  })

  it('lowest tracks the earliest start time', () => {
    const profiler: Record<string, number[]> = {
      early: [1000, 2000],
      late: [3000, 4000],
    }
    const report = profileReport(profiler)
    expect(report['early']).toBe(1000)
    expect(report['late']).toBe(1000)
    expect(report['-all-']).toBe(3000)
  })

  it('updates lowest when a later entry has an earlier start', () => {
    // Process entries in order: first has a high start, second has a lower start
    // This ensures line 21 (lowest = start) is hit on the second iteration
    const profiler: Record<string, number[]> = {
      second: [5000, 6000],
      first: [2000, 3000],
    }
    const report = profileReport(profiler)
    expect(report['second']).toBe(1000)
    expect(report['first']).toBe(1000)
    expect(report['-all-']).toBe(4000)
  })

  it('skips entries with empty readings array', () => {
    // When readings.at(0) returns undefined (empty array), the entry should be skipped
    const profiler: Record<string, number[]> = {
      empty: [],
      valid: [1000, 2000],
    }
    const report = profileReport(profiler)
    expect(report['empty']).toBeUndefined()
    expect(report['valid']).toBe(1000)
    expect(report['-all-']).toBe(1000)
  })

  it('skips all entries when all have empty readings', () => {
    const profiler: Record<string, number[]> = {
      a: [],
      b: [],
    }
    const report = profileReport(profiler)
    expect(report['a']).toBeUndefined()
    expect(report['b']).toBeUndefined()
    // highest remains 0, so -all- should not be set
    expect(report['-all-']).toBeUndefined()
  })

  it('handles single reading entry (start equals end)', () => {
    const profiler: Record<string, number[]> = { single: [5000] }
    const report = profileReport(profiler)
    // at(0) === at(-1) for single element array, so duration is 0
    expect(report['single']).toBe(0)
    expect(report['-all-']).toBe(0)
  })
})
