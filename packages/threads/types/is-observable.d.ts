/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'is-observable' {
  import { Observable } from 'observable-fns'

  function isObservable(thing: any): thing is Observable<any>
  export = isObservable
}
