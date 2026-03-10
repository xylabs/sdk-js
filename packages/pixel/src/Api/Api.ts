import { isUndefined } from '@xylabs/typeof'
import axios from 'axios'

import type { UserEvent } from './UserEvent.ts'

const apiBaseUri: Record<string, string> = {
  beta: 'https://pixel.xylabs.com',
  local: 'http://localhost:3030',
  prod: 'https://pixel.xylabs.com',
}

/** HTTP client for sending tracking events to the XY Labs pixel API. */
export class PixelApi {
  private endPoint: string

  /* baseUri can either be a preset (prod, beta, local), or a specific uri */
  constructor(baseUri = 'prod') {
    this.endPoint = isUndefined(apiBaseUri[baseUri]) ? baseUri : `${apiBaseUri[baseUri]}/t/event/queue`
  }

  /**
   * Sends an array of user events to the tracking API.
   * @param events - The events to submit
   * @returns The response data from the API
   */
  async trackEvents(events: UserEvent[]) {
    return (await axios.post(this.endPoint, events)).data
  }
}
