import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { FirebaseOptions } from 'firebase/app'

import { BackendConfig } from '@/types/BackendConfig'
import { DemoConfig } from '@/types/DemoConfig'
import { ResponseData } from '@/types/ResponseData'
import { STATUS_CODE } from '@/enum/global'

export class ConfigAPI {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create()
  }

  public getBackendConfig = async (): Promise<BackendConfig> => {
    try {
      const result: AxiosResponse<ResponseData<BackendConfig>> =
        await this.api.get<ResponseData<BackendConfig>>('/api/config/backend')
      if (result.status === STATUS_CODE.OK) {
        return (
          result.data.body ?? {
            backendUrl: '',
            apiTimeout: 5000,
          }
        )
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in GET /api/config/backend:', (error as Error).message)
      return {
        backendUrl: '',
        apiTimeout: 5000,
      }
    }
  }

  public getDemoConfig = async (): Promise<DemoConfig> => {
    try {
      const result: AxiosResponse<ResponseData<DemoConfig>> =
        await this.api.get<ResponseData<DemoConfig>>('/api/config/demo')
      if (result.status === STATUS_CODE.OK) {
        return (
          result.data.body ?? {
            demoUid: '',
            demoUser: '',
            demoPassword: '',
          }
        )
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in GET /api/config/demo:', (error as Error).message)
      return {
        demoUid: '',
        demoUser: '',
        demoPassword: '',
      }
    }
  }

  public getFirebaseConfig = async (): Promise<FirebaseOptions> => {
    try {
      const result: AxiosResponse<ResponseData<FirebaseOptions>> =
        await this.api.get<ResponseData<FirebaseOptions>>('/api/config/firebase')
      if (result.status === STATUS_CODE.OK) {
        return (
          result.data.body ?? {
            apiKey: '',
            authDomain: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
            appId: '',
            measurementId: '',
          }
        )
      }
      throw new Error(`Unexpected status code: ${result.status}`)
    } catch (error) {
      console.error('Error in GET /api/config/firebase:', (error as Error).message)
      return {
        apiKey: '',
        authDomain: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: '',
      }
    }
  }
}
