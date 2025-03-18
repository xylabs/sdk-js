import { expect, test } from 'vitest'

import {
  spawn, Thread, Worker,
} from '../src/index.ts'

test('can use worker returning an observable subject', async () => {
  const captured: Array<{ max: number; min: number }> = []

  const minmax = await spawn(new Worker('./workers/minmax.ts'))
  minmax.values().subscribe(values => captured.push(values))

  await minmax.push(2)
  await minmax.push(3)
  await minmax.push(4)
  await minmax.push(1)
  await minmax.push(5)
  await minmax.finish()

  await Thread.terminate(minmax)

  expect(captured).toEqual([
    { max: 2, min: 2 },
    { max: 3, min: 2 },
    { max: 4, min: 2 },
    { max: 4, min: 1 },
    { max: 5, min: 1 },
  ])
})
