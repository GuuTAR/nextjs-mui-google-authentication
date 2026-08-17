import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { configService } from '@/services/configService'

export class ApiService {
  private api: AxiosInstance

  constructor(backendUrl: string, authToken?: string) {
    const { apiTimeout } = configService.getConfig()

    if (!authToken) {
      this.api = axios.create({
        baseURL: backendUrl,
        timeout: apiTimeout,
      })
    } else {
      this.api = axios.create({
        baseURL: backendUrl,
        timeout: apiTimeout,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
    }
  }

  public get = <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.api.get<T>(url)
  }

  public post = <T, U>(url: string, body?: U): Promise<AxiosResponse<T>> => {
    return this.api.post<T>(url, body)
  }

  public put = <T, U>(url: string, body?: U): Promise<AxiosResponse<T>> => {
    return this.api.put<T>(url, body)
  }

  public patch = <T, U>(url: string, body?: U): Promise<AxiosResponse<T>> => {
    return this.api.patch<T>(url, body)
  }

  public delete = <T>(url: string): Promise<AxiosResponse<T>> => {
    return this.api.delete<T>(url)
  }
}

export const createApiService = (authToken?: string): ApiService => {
  const { backendUrl } = configService.getConfig()

  return new ApiService(backendUrl, authToken)
}

export const createLocalApiService = (authToken?: string): ApiService => {
  return new ApiService('/', authToken)
}
