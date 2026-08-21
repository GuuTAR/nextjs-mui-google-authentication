import { STATUS_CODE } from '@/enum/global'

import { utilService } from '@/services/utilService'

export async function GET() {
  try {
    return utilService.responseBody(STATUS_CODE.OK, {
      message: 'Get demo user data successful',
      body: {
        demoUser: process.env.DEMO_USER || '',
        demoPassword: process.env.DEMO_PASSWORD || '',
        demoUid: process.env.DEMO_UID || '',
      },
    })
  } catch (error) {
    console.error('Error in POST /api/config/demo:', (error as Error).message)
    return utilService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}
