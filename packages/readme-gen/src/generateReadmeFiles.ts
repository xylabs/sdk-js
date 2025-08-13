#!/usr/bin/env node
/* eslint-disable no-console */

// generate-readmes.mjs
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { yarnWorkspaces } from '@xylabs/ts-scripts-yarn3'

import { generateTypeDoc } from './generateTypeDoc.ts'

const dirName = () => path.dirname(fileURLToPath(import.meta.url))
const templatePath = () => path.join(dirName(), 'README.template.md')

function fillTemplate(template: string, data: { [key: string]: string }) {
  const additionalData: { [key: string]: string } = { ...data, safeName: data.name.replaceAll('/', '__').replaceAll('@', '') }
  return template.replaceAll(/{{(.*?)}}/g, (_, key) => additionalData[(key as string).trim()] ?? '')
}

async function tryLoadReadmeBody(location: string) {
  try {
    return await readFile(path.join(location, 'README.body.md'), 'utf8')
  } catch {
    return
  }
}

async function tryLoadReadmeReference(location: string) {
  try {
    return await readFile(path.join(location, 'README.reference.md'), 'utf8')
  } catch {
    return
  }
}

export async function generateReadmeFiles() {
  const template = await readFile(templatePath(), 'utf8')
  const pkgs = yarnWorkspaces()

  for (const { location } of pkgs) {
    try {
      if (location.includes('wallet-chrome')) {
        continue
      }
      const pkgJsonPath = path.join(location, 'package.json')
      const pkg = JSON.parse(await readFile(pkgJsonPath, 'utf8'))
      const body = await tryLoadReadmeBody(location) ?? ''
      const reference = await tryLoadReadmeReference(location) ?? await generateTypeDoc(location, ['src/index*.ts'])
      const readmeContent = fillTemplate(template, {
        ...pkg, body, reference,
      })
      await writeFile(path.join(location, 'README.md'), readmeContent)
      console.log(`✅ Created README.md for ${pkg.name}`)
    } catch (ex) {
      const error = ex as Error
      console.warn(`⚠️ Skipped ${location}:`, error.message)
    }
  }
}
