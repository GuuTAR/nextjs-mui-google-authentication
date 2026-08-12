import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

import { AppConfig } from '@/types/AppConfig'

import { configService } from '@/services/configService'

class FirebaseClient {
  private app: FirebaseApp | undefined

  constructor(config: AppConfig) {
    this.app = getApps().length > 0 ? getApp() : initializeApp(config.firebaseConfig)
  }

  public getAuth = (): Auth | undefined => {
    return getAuth(this.app)
  }
}

export const firebaseClient = new FirebaseClient(configService.getConfig())
