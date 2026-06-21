import { AxiosResponse } from 'axios'

import { STATUS_CODE } from '@/enum/global'

import { ApiService, apiService } from '@/services/apiService'

class AuthAPI {
  private api: ApiService

  constructor(apiService: ApiService) {
    this.api = apiService
  }

  public setSession = async <T>(idToken: string): Promise<boolean> => {
    const result: AxiosResponse = await this.api.post<T, { idToken: string }>('/api/auth/session', { idToken })
    if (result.status === STATUS_CODE.OK) {
      return true
    }
    return false
  }

  public logout = async <T>(): Promise<boolean> => {
    const result: AxiosResponse = await this.api.post<T, undefined>('/api/auth/logout')
    if (result.status === STATUS_CODE.OK) {
      return true
    }
    return false
  }
}

export const authApi = new AuthAPI(apiService)
