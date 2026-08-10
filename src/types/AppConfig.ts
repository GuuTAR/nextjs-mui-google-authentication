import { ServiceAccount } from 'firebase-admin'
import { FirebaseOptions } from 'firebase/app'

export type AppConfig = {
  isEnableFirebaseAuth: boolean
  firebaseConfig: FirebaseOptions
  firebaseAdminConfig: string | ServiceAccount
  userSessionLifetimeDays: number
  apiTimeout: number
  backendUrl: string
  demoUser: string
  demoPassword: string
  demoUid: string
}
