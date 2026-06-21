import { AppConfig } from '@/types/AppConfig'

class ConfigService {
  private config: AppConfig

  constructor() {
    this.config = this.initialization()
  }

  private initialization = (): AppConfig => {
    return {
      isEnableFirebaseAuth: JSON.parse(process.env.NEXT_PUBLIC_ENABLE_FIREBASE_AUTH || '0'),
      userSessionLifetimeDays: parseInt(process.env.USER_SESSION_LIFETIME_DAYS || '7'),
      apiTimeout: parseInt(process.env.API_TIMEOUT || '5000'),
      firebaseConfig: {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
      },
      firebaseAdminConfig: {
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || '',
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
          ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n')
          : '',
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL || '',
      },
    }
  }

  public getConfig = (): AppConfig => {
    return this.config
  }
}

export const configService = new ConfigService()
