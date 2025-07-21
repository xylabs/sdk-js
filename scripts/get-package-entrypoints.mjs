/* eslint-disable no-console */
import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

/**
 * Extracts entry points from a package.json file
 * @param {string} packageLocation - Path to the package directory
 * @returns {Promise<string[]>} - Array of entry point file paths
 */
async function getPackageEntryPoints(packageLocation) {
  try {
    const pkgJsonPath = path.join(packageLocation, 'package.json')
    const pkgJson = JSON.parse(await readFile(pkgJsonPath, 'utf8'))

    const entryPoints = []
    const srcPath = path.join(packageLocation, 'src')

    // Default entry point for all packages
    const defaultEntryPoint = path.join(srcPath, 'index.ts')
    if (existsSync(defaultEntryPoint)) {
      entryPoints.push(defaultEntryPoint)
    }

    // Check exports field for entry points
    if (pkgJson.exports) {
      const exportPaths = extractExportPaths(pkgJson.exports)

      for (const exportPath of exportPaths) {
        // Convert from dist path to source path (if applicable)
        const sourcePath = convertDistToSrc(exportPath, packageLocation)
        if (existsSync(sourcePath)) {
          entryPoints.push(sourcePath)
        }
      }
    }

    // Check main, module, types fields
    const mainFields = ['main', 'module', 'types']
    for (const field of mainFields) {
      if (pkgJson[field]) {
        const sourcePath = convertDistToSrc(pkgJson[field], packageLocation)
        if (existsSync(sourcePath) && !entryPoints.includes(sourcePath)) {
          entryPoints.push(sourcePath)
        }
      }
    }

    // If no entry points found, fall back to all TypeScript files
    if (entryPoints.length === 0) {
      return []
    }

    return [...new Set(entryPoints)] // Remove duplicates
  } catch (error) {
    console.warn(`Error extracting entry points from package.json: ${error.message}`)
    return []
  }
}

/**
 * Recursively extracts paths from exports field
 * @param {object|string} exportsObj - The exports field object or string
 * @returns {string[]} - Array of export paths
 */
function extractExportPaths(exportsObj) {
  const paths = []

  if (typeof exportsObj === 'string') {
    paths.push(exportsObj)
  } else if (typeof exportsObj === 'object') {
    for (const key in exportsObj) {
      if (key === 'types' && typeof exportsObj[key] === 'string') {
        paths.push(exportsObj[key])
      } else if (typeof exportsObj[key] === 'object') {
        paths.push(...extractExportPaths(exportsObj[key]))
      } else if (typeof exportsObj[key] === 'string') {
        paths.push(exportsObj[key])
      }
    }
  }

  return paths
}

/**
 * Converts a distribution path to source path
 * @param {string} distPath - The path in dist directory
 * @param {string} packageLocation - The package location
 * @returns {string} - The corresponding source path
 */
function convertDistToSrc(distPath, packageLocation) {
  // Remove leading ./
  const cleanPath = distPath.replace(/^\.\//, '')

  // Convert from dist path to src path
  let sourcePath = cleanPath
    .replace(/^dist\//, 'src/')
    .replace(/\.d\.ts$/, '.ts')
    .replace(/\.mjs$/, '.ts')
    .replace(/\.js$/, '.ts')

  // Handle the case where the path might be to a directory
  if (!sourcePath.endsWith('.ts')) {
    sourcePath = path.join(sourcePath, 'index.ts')
  }

  return path.join(packageLocation, sourcePath)
}

export { getPackageEntryPoints }
