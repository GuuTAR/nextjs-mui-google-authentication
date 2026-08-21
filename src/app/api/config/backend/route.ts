import { STATUS_CODE } from '@/enum/global'

import { utilService } from '@/services/utilService'

export async function GET() {
  try {
    return utilService.responseBody(STATUS_CODE.OK, {
      message: 'Get backend config data successful',
      body: {
        backendUrl: process.env.BACKEND_URL || '',
        apiTimeout: parseInt(process.env.API_TIMEOUT || '5000'),
      },
    })
  } catch (error) {
    console.error('Error in POST /api/config/backend:', (error as Error).message)
    return utilService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}
