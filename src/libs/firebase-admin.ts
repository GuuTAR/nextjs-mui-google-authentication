import { App, cert, getApps, initializeApp } from 'firebase-admin/app'
import { Auth, getAuth } from 'firebase-admin/auth'

import { AppConfig } from '@/types/AppConfig'

import { configService } from '@/services/configService'

class FirebaseAdminClient {
  private isActive: boolean
  private app: App | undefined

  constructor(config: AppConfig) {
    // Initialize Firebase Admin SDK only if Firebase Auth is enabled in the configuration
    this.isActive = config.isEnableFirebaseAuth
    if (!this.isActive) return

    // Initialize Firebase Admin SDK with the provided configuration
    this.app = getApps().length > 0 ? getApps()[0] : initializeApp({ credential: cert(config.firebaseAdminConfig) })
  }

  public isEnableFirebaseAuth = (): boolean => {
    return this.isActive
  }

  public getAuth = (): Auth | undefined => {
    if (!this.isActive) return
    return getAuth(this.app)
  }
}

export const firebaseAdminClient = new FirebaseAdminClient(configService.getConfig())
