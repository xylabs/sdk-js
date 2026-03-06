import {
  describe, expect, it, vi,
} from 'vitest'

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
  writeFile: vi.fn(),
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

vi.mock('@xylabs/ts-scripts-yarn3', () => ({
  yarnWorkspaces: vi.fn(),
}))

import { readFile, writeFile } from 'node:fs/promises'
import { yarnWorkspaces } from '@xylabs/ts-scripts-yarn3'

import { generateReadmeFiles } from '../generateReadmeFiles.ts'

describe('generateReadmeFiles', () => {
  it('generates README for a package', async () => {
    const mockReadFile = vi.mocked(readFile)
    const mockWriteFile = vi.mocked(writeFile)
    const mockWorkspaces = vi.mocked(yarnWorkspaces)

    // Template read
    mockReadFile.mockImplementation(async (filePath: any) => {
      if (typeof filePath === 'string' && filePath.endsWith('README.template.md')) {
        return '# {{name}}\n{{description}}\n{{body}}\n{{reference}}\n{{safeName}}'
      }
      if (typeof filePath === 'string' && filePath.endsWith('package.json')) {
        return JSON.stringify({ name: '@xylabs/test', description: 'test pkg' })
      }
      if (typeof filePath === 'string' && filePath.endsWith('README.body.md')) {
        return 'Body content'
      }
      if (typeof filePath === 'string' && filePath.endsWith('README.reference.md')) {
        return 'Reference content'
      }
      throw new Error('File not found')
    })

    mockWorkspaces.mockReturnValue([
      { location: '/tmp/test-pkg' },
    ] as any)
    mockWriteFile.mockResolvedValue(undefined)

    await generateReadmeFiles()

    expect(mockWriteFile).toHaveBeenCalledWith(
      '/tmp/test-pkg/README.md',
      expect.stringContaining('@xylabs/test'),
    )
  })

  it('skips wallet-chrome packages', async () => {
    const mockReadFile = vi.mocked(readFile)
    const mockWriteFile = vi.mocked(writeFile)
    const mockWorkspaces = vi.mocked(yarnWorkspaces)

    mockReadFile.mockImplementation(async (filePath: any) => {
      if (typeof filePath === 'string' && filePath.endsWith('README.template.md')) {
        return '# {{name}}'
      }
      throw new Error('File not found')
    })

    mockWorkspaces.mockReturnValue([
      { location: '/tmp/wallet-chrome-ext' },
    ] as any)
    mockWriteFile.mockClear()
    mockWriteFile.mockResolvedValue(undefined)

    await generateReadmeFiles()

    // writeFile should not have been called for the wallet-chrome package
    const writeFileCalls = mockWriteFile.mock.calls.filter(
      (call: any) => typeof call[0] === 'string' && call[0].includes('wallet-chrome'),
    )
    expect(writeFileCalls).toHaveLength(0)
  })

  it('handles errors gracefully', async () => {
    const mockReadFile = vi.mocked(readFile)
    const mockWorkspaces = vi.mocked(yarnWorkspaces)
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    mockReadFile.mockImplementation(async (filePath: any) => {
      if (typeof filePath === 'string' && filePath.endsWith('README.template.md')) {
        return '# {{name}}'
      }
      throw new Error('read error')
    })

    mockWorkspaces.mockReturnValue([
      { location: '/tmp/bad-pkg' },
    ] as any)

    await generateReadmeFiles()

    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Skipped'), expect.any(String))
    warnSpy.mockRestore()
  })

  it('falls back to generateTypeDoc when no README.reference.md exists', async () => {
    const mockReadFile = vi.mocked(readFile)
    const mockWriteFile = vi.mocked(writeFile)
    const mockWorkspaces = vi.mocked(yarnWorkspaces)

    let callCount = 0
    mockReadFile.mockImplementation(async (filePath: any) => {
      if (typeof filePath === 'string' && filePath.endsWith('README.template.md')) {
        return '# {{name}}\n{{reference}}'
      }
      if (typeof filePath === 'string' && filePath.endsWith('package.json')) {
        return JSON.stringify({ name: '@xylabs/test2', description: 'test' })
      }
      if (typeof filePath === 'string' && filePath.endsWith('README.body.md')) {
        throw new Error('not found')
      }
      if (typeof filePath === 'string' && filePath.endsWith('README.reference.md')) {
        throw new Error('not found')
      }
      throw new Error('File not found')
    })

    mockWorkspaces.mockReturnValue([
      { location: '/tmp/no-ref-pkg' },
    ] as any)
    mockWriteFile.mockResolvedValue(undefined)

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    await generateReadmeFiles()

    // Should have attempted to write
    expect(mockWriteFile).toHaveBeenCalled()

    logSpy.mockRestore()
    warnSpy.mockRestore()
    errorSpy.mockRestore()
  })
})
