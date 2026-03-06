import {
  describe, expect, it, vi,
} from 'vitest'

vi.mock('node:fs/promises', () => ({
  rm: vi.fn().mockResolvedValue(undefined),
  writeFile: vi.fn().mockResolvedValue(undefined),
}))

vi.mock('node:fs', () => ({
  existsSync: vi.fn(),
  mkdirSync: vi.fn(),
  readdirSync: vi.fn(),
  readFileSync: vi.fn(),
}))

vi.mock('node:child_process', () => ({
  execSync: vi.fn(),
}))

import { execSync } from 'node:child_process'
import {
  existsSync, mkdirSync, readdirSync, readFileSync,
} from 'node:fs'
import { rm } from 'node:fs/promises'

import { generateTypeDoc } from '../generateTypeDoc.ts'

describe('generateTypeDoc', () => {
  it('generates markdown from typedoc output', async () => {
    const mockExistsSync = vi.mocked(existsSync)
    const mockMkdirSync = vi.mocked(mkdirSync)
    const mockExecSync = vi.mocked(execSync)
    const mockReaddirSync = vi.mocked(readdirSync)
    const mockReadFileSync = vi.mocked(readFileSync)

    mockExistsSync.mockImplementation((p: any) => {
      if (typeof p === 'string' && p.includes('README.md')) return true
      return false // temp dir doesn't exist yet
    })
    mockExecSync.mockReturnValue(Buffer.from(''))
    mockReaddirSync.mockReturnValue([
      { name: 'README.md', isDirectory: () => false },
      { name: 'module.md', isDirectory: () => false },
    ] as any)
    mockReadFileSync.mockImplementation((p: any) => {
      if (typeof p === 'string' && p.endsWith('README.md')) {
        return '# Main\nSome content'
      }
      return '# Module\nModule content with [link](other.md)'
    })

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const result = await generateTypeDoc('/tmp/pkg', ['src/index.ts'])

    expect(result).toContain('## Reference')
    expect(result).toContain('module')
    expect(mockMkdirSync).toHaveBeenCalled()

    logSpy.mockRestore()
  })

  it('returns error message when typedoc fails', async () => {
    const mockExistsSync = vi.mocked(existsSync)
    const mockExecSync = vi.mocked(execSync)

    mockExistsSync.mockReturnValue(true)
    mockExecSync.mockImplementation(() => { throw new Error('typedoc failed') })

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = await generateTypeDoc('/tmp/pkg', ['src/index.ts'])

    expect(result).toContain('Reference generation failed')

    logSpy.mockRestore()
    errorSpy.mockRestore()
  })

  it('handles cleanup failure gracefully', async () => {
    const mockExistsSync = vi.mocked(existsSync)
    const mockExecSync = vi.mocked(execSync)
    const mockRm = vi.mocked(rm)
    const mockReaddirSync = vi.mocked(readdirSync)

    mockExistsSync.mockReturnValue(true)
    mockExecSync.mockReturnValue(Buffer.from(''))
    mockReaddirSync.mockReturnValue([])
    mockRm.mockRejectedValue(new Error('cleanup failed'))

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const result = await generateTypeDoc('/tmp/pkg', ['src/index.ts'])

    expect(result).toContain('## Reference')
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('clean up'), expect.any(String))

    logSpy.mockRestore()
    warnSpy.mockRestore()
  })

  it('processes subdirectories recursively', async () => {
    const mockExistsSync = vi.mocked(existsSync)
    const mockExecSync = vi.mocked(execSync)
    const mockReaddirSync = vi.mocked(readdirSync)
    const mockReadFileSync = vi.mocked(readFileSync)

    mockExistsSync.mockReturnValue(false)
    mockExecSync.mockReturnValue(Buffer.from(''))

    let callIdx = 0
    mockReaddirSync.mockImplementation(() => {
      callIdx++
      if (callIdx === 1) {
        return [
          { name: 'subdir', isDirectory: () => true },
          { name: 'file.md', isDirectory: () => false },
        ] as any
      }
      // Subdirectory contents
      return [
        { name: 'child.md', isDirectory: () => false },
      ] as any
    })

    mockReadFileSync.mockImplementation(() => '# Title\nContent with [link](ref.md)')

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const result = await generateTypeDoc('/tmp/pkg', ['src/index.ts'])

    expect(result).toContain('## Reference')
    expect(result).toContain('subdir')

    logSpy.mockRestore()
  })

  it('skips spec directories in subdirectory processing', async () => {
    const mockExistsSync = vi.mocked(existsSync)
    const mockExecSync = vi.mocked(execSync)
    const mockReaddirSync = vi.mocked(readdirSync)
    const mockReadFileSync = vi.mocked(readFileSync)

    mockExistsSync.mockReturnValue(false)
    mockExecSync.mockReturnValue(Buffer.from(''))

    mockReaddirSync.mockReturnValue([
      { name: 'spec', isDirectory: () => true },
      { name: 'file.md', isDirectory: () => false },
      { name: 'not-markdown.txt', isDirectory: () => false },
    ] as any)

    mockReadFileSync.mockReturnValue('# Title\nContent')

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const result = await generateTypeDoc('/tmp/pkg', ['src/index.ts'])

    expect(result).not.toContain('spec')

    logSpy.mockRestore()
  })

  it('handles processDirectory error gracefully', async () => {
    const mockExistsSync = vi.mocked(existsSync)
    const mockExecSync = vi.mocked(execSync)
    const mockReaddirSync = vi.mocked(readdirSync)

    mockExistsSync.mockReturnValue(false)
    mockExecSync.mockReturnValue(Buffer.from(''))
    mockReaddirSync.mockImplementation(() => { throw new Error('dir error') })

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const result = await generateTypeDoc('/tmp/pkg', ['src/index.ts'])

    expect(result).toContain('## Reference')

    logSpy.mockRestore()
    warnSpy.mockRestore()
  })
})
