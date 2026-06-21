import { NextRequest } from 'next/server'

import { STATUS_CODE } from '@/enum/global'

import { apiService } from '@/services/apiService'
import { configService } from '@/services/configService'
import { authService } from '@/services/authService'

export async function POST(request: NextRequest) {
  try {
    // Get the ID token from the request body
    const { idToken } = await request.json()

    // Create a user session using the ID token and set the session cookie
    const isCreated: boolean = await authService.createUserSession(
      idToken,
      configService.getConfig().userSessionLifetimeDays,
    )
    if (!isCreated) {
      return apiService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: 'Failed to create user session' })
    }

    return apiService.responseBody(STATUS_CODE.OK)
  } catch (error) {
    console.error('Error in POST /api/auth/session:', (error as Error).message)
    return apiService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}
