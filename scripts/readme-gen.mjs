#!/usr/bin/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { generateReadmeFiles } from '@xylabs/readme-gen'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const templatePath = path.join(__dirname, 'README.template.md')

generateReadmeFiles(templatePath).catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Error generating README files:', error)
  process.exit(1)
})
