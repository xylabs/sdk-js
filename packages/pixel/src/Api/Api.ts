import { isUndefined } from '@xylabs/typeof'
import axios from 'axios'

import type { UserEvent } from './UserEvent.ts'

const apiBaseUri: Record<string, string> = {
  beta: 'https://pixel.xylabs.com',
  local: 'http://localhost:3030',
  prod: 'https://pixel.xylabs.com',
}

export class PixelApi {
  private endPoint: string

  /* baseUri can either be a preset (prod, beta, local), or a specific uri */
  constructor(baseUri = 'prod') {
    this.endPoint = isUndefined(apiBaseUri[baseUri]) ? baseUri : `${apiBaseUri[baseUri]}/t/event/queue`
  }

  async trackEvents(events: UserEvent[]) {
    return (await axios.post(this.endPoint, events)).data
  }
}
