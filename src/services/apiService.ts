import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class ApiService {
  private api: AxiosInstance

  constructor(backendUrl: string, apiTimeout: number, authToken?: string) {
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

export const createApiService = (backendUrl: string, apiTimeout: number, authToken?: string): ApiService => {
  return new ApiService(backendUrl, apiTimeout, authToken)
}

export const createLocalApiService = (apiTimeout: number, authToken?: string): ApiService => {
  return new ApiService('/', apiTimeout, authToken)
}
