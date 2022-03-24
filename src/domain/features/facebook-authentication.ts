import { AccessToken } from '../models'
import { AuthenticationError } from '../errors'

export interface FacebookAuthentication {
  execute: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

namespace FacebookAuthentication{
  export type Params = {
    token: string
  }

  export type Result = AccessToken | AuthenticationError
}
