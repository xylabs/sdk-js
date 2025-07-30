import type { Hex } from '../hex/index.ts'
import { AddressZodTransform } from './AddressZodTransform.ts'
import { AddressZodValidation } from './AddressZodValidation.ts'

// using true instead of unique symbol to avoid conflicts with other versions of library
export type Address = Hex & { readonly __address: true }

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Address {
  export const identify = (value: unknown): value is Address => AddressZodValidation.safeParse(value).success
  export const cast = (value: unknown, assert: boolean = false): Address | undefined => assert
    ? AddressZodValidation.parse(value)
    : AddressZodValidation.safeParse(value).data
  export const from = (value: unknown, assert: boolean = false): Address | undefined => assert
    ? AddressZodTransform.parse(value)
    : AddressZodTransform.safeParse(value).data
  export const toString = (value: Address): string => value as string
}
