import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

import { configService } from '@/services/configService'

export class FirebaseClient {
  private app: FirebaseApp | undefined

  constructor() {
    configService.getFirebaseClientConfig().then((firebaseConfig) => {
      this.app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
    })
  }

  public getAuth = (): Auth | undefined => {
    if (!this.app) return
    return getAuth(this.app)
  }
}

export const firebaseClient = new FirebaseClient()
