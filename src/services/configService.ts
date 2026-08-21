import { FirebaseOptions } from 'firebase/app'

import { ServerAppConfig } from '@/types/AppConfig'
import { BackendConfig } from '@/types/BackendConfig'
import { DemoConfig } from '@/types/DemoConfig'

import { ConfigAPI } from '@/api/configApi'

class ConfigService {
  private configApi: ConfigAPI

  constructor() {
    this.configApi = new ConfigAPI()
  }

  public getBeckendConfig = async (): Promise<BackendConfig> => {
    return await this.configApi.getBackendConfig()
  }

  public getDemoConfig = async (): Promise<DemoConfig> => {
    return await this.configApi.getDemoConfig()
  }

  public getFirebaseClientConfig = async (): Promise<FirebaseOptions> => {
    return await this.configApi.getFirebaseConfig()
  }

  public getServerConfig = (): ServerAppConfig => {
    return {
      firebaseAdminConfig: {
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || '',
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
          ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n')
          : '',
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL || '',
      },
      userSessionLifetimeDays: parseInt(process.env.FIREBASE_ADMIN_SESSION_LIFETIME_DAYS || '7'),
    }
  }
}

export const configService = new ConfigService()
