import { cookies } from 'next/headers'

import { STATUS_CODE } from '@/enum/global'

import { authService } from '@/services/authService'
import { utilService } from '@/services/utilService'

export async function POST() {
  try {
    // Get the session cookie from the request
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')
    if (!sessionCookie) {
      return utilService.responseBody(STATUS_CODE.BAD_REQUEST, { message: 'No session cookie found' })
    }

    // Validate the session cookie and get the current user
    const currentUser = await authService.getCurrentUserFromSession()
    if (!currentUser) {
      return utilService.responseBody(STATUS_CODE.BAD_REQUEST, { message: 'Invalid session cookie' })
    }

    // Revoke the user's session
    const isRevoked: boolean = await authService.revokeUserSession(currentUser.uid)
    if (!isRevoked) {
      return utilService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: 'Failed to revoke user session' })
    }

    // Clear the session cookie
    cookieStore.delete('session')

    return utilService.responseBody(STATUS_CODE.OK)
  } catch (error) {
    console.error('Error in POST /api/auth/logout:', (error as Error).message)
    return utilService.responseBody(STATUS_CODE.INTERNAL_SERVER_ERROR, { message: (error as Error).message })
  }
}
