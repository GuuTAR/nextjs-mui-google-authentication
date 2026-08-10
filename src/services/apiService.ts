import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { configService } from '@/services/configService'

export class ApiService {
  private api: AxiosInstance

  constructor({ backendUrl, apiTimeout }: { apiTimeout: number; backendUrl?: string }) {
    this.api = axios.create({
      baseURL: backendUrl,
      timeout: apiTimeout,
    })
  }

  public get = <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.api.get<T>(url)
  }

  public post = <T, U>(url: string, body?: U): Promise<AxiosResponse<T>> => {
    return this.api.post<T>(url, body)
  }

  public put = <T, U>(url: string, body: U): Promise<AxiosResponse<T>> => {
    return this.api.put<T>(url, body)
  }

  public delete = <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.api.delete<T>(url)
  }
}

export const createApiService = (): ApiService => {
  const { backendUrl, apiTimeout } = configService.getConfig()
  return new ApiService({ apiTimeout, backendUrl })
}

export const createLocalApiService = (): ApiService => {
  const { apiTimeout } = configService.getConfig()
  return new ApiService({ apiTimeout })
}
