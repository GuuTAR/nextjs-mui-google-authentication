import { AxiosResponse } from 'axios'

import { STATUS_CODE } from '@/enum/global'

import { ApiService } from '@/services/apiService'

export class AuthAPI {
  private api: ApiService

  constructor(apiService: ApiService) {
    this.api = apiService
  }

  public login = async (idToken: string): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.post<undefined, { idToken: string }>('/api/auth/session', {
        idToken,
      })
      return result.status === STATUS_CODE.OK
    } catch (error) {
      console.error('Error in POST /api/auth/session:', (error as Error).message)
      return false
    }
  }

  public logout = async (): Promise<boolean> => {
    try {
      const result: AxiosResponse = await this.api.post<undefined, undefined>('/api/auth/logout')
      return result.status === STATUS_CODE.OK
    } catch (error) {
      console.error('Error in POST /api/auth/logout:', (error as Error).message)
      return false
    }
  }
}
