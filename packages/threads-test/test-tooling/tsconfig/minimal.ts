/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  spawn, Thread, Worker,
} from '@xylabs/threads/master'

async function main() {
  const helloWorld = await spawn(new Worker('./workers/hello-world.mjs', {_baseURL: __dirname}))
  await Thread.terminate(helloWorld)
}

main()
