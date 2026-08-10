import { DemoUser } from '@/types/DemoUser'

import { configService } from '@/services/configService'

export const DISPLAY_DEMO_USER: DemoUser = {
  displayName: 'Demo User',
  email: configService.getConfig().demoUser,
  photoURL: '',
}
