import { App, cert, getApps, initializeApp } from 'firebase-admin/app'
import { Auth, getAuth } from 'firebase-admin/auth'

import { AppConfig } from '@/types/AppConfig'

import { configService } from '@/services/configService'

class FirebaseAdminClient {
  private app: App | undefined

  constructor(config: AppConfig) {
    this.app = getApps().length > 0 ? getApps()[0] : initializeApp({ credential: cert(config.firebaseAdminConfig) })
  }

  public getAuth = (): Auth | undefined => {
    return getAuth(this.app)
  }
}

export const firebaseAdminClient = new FirebaseAdminClient(configService.getConfig())
