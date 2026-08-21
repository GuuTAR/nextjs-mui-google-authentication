import { App, cert, getApps, initializeApp } from 'firebase-admin/app'
import { Auth, getAuth } from 'firebase-admin/auth'

import { ServerAppConfig } from '@/types/AppConfig'

import { configService } from '@/services/configService'

class FirebaseAdminClient {
  private app: App | undefined

  constructor(config: ServerAppConfig) {
    const { firebaseAdminConfig } = config

    if (typeof firebaseAdminConfig === 'string') return
    if (!firebaseAdminConfig.projectId || !firebaseAdminConfig.privateKey || !firebaseAdminConfig.clientEmail) return

    this.app = getApps().length > 0 ? getApps()[0] : initializeApp({ credential: cert(config.firebaseAdminConfig) })
  }

  public getAuth = (): Auth | undefined => {
    if (!this.app) return
    return getAuth(this.app)
  }
}

export const firebaseAdminClient = new FirebaseAdminClient(configService.getServerConfig())
