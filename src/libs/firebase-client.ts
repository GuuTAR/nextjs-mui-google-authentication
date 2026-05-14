import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

import { AppConfig } from '@/types/types'

import { configService } from '@/services/configService'

class FirebaseClient {
  private isActive: boolean
  private app: FirebaseApp | undefined

  constructor(config: AppConfig) {
    // Initialize Firebase SDK only if Firebase Auth is enabled in the configuration
    this.isActive = config.isEnableFirebaseAuth
    if (!this.isActive) return

    // Initialize Firebase SDK with the provided configuration
    this.app = getApps().length > 0 ? getApp() : initializeApp(config.firebaseConfig)
  }

  public isEnableFirebaseAuth = (): boolean => {
    return this.isActive
  }

  public getAuth = (): Auth | undefined => {
    if (!this.isActive) return
    return getAuth(this.app)
  }
}

export const firebaseClient = new FirebaseClient(configService.getConfig())
