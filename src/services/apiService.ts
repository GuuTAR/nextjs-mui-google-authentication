import { NextResponse } from 'next/server'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

import { configService } from '@/services/configService'

export class ApiService {
  private api: AxiosInstance

  constructor(apiTimeout: number) {
    this.api = axios.create({
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

  public responseBody = <T>(statusCode: number, responseData?: { message?: string; body?: T }): NextResponse => {
    return NextResponse.json(
      {
        message: responseData?.message,
        body: responseData?.body,
      },
      {
        status: statusCode,
      },
    )
  }
}

export const apiService = new ApiService(configService.getConfig().apiTimeout)
