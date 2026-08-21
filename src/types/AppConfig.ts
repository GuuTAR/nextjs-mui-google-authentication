import { ServiceAccount } from 'firebase-admin'
import { FirebaseOptions } from 'firebase/app'

export type ClientAppConfig = {
  firebaseConfig: FirebaseOptions
  backend: { apiTimeout: number; backendUrl: string }
  demo: { demoUser: string; demoPassword: string; demoUid: string }
}

export type ServerAppConfig = {
  firebaseAdminConfig: string | ServiceAccount
  userSessionLifetimeDays: number
}
