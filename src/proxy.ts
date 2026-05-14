import { NextRequest, NextResponse } from 'next/server'

import { configService } from '@/services/configService'

export function proxy(request: NextRequest) {
  const isAuthEnabled: boolean = configService.getConfig().isEnableFirebaseAuth
  if (!isAuthEnabled) {
    return NextResponse.next()
  }

  // Check for session cookie to determine if the user is authenticated
  const session = request.cookies.get('session')
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Match all routes except for /login, /api, /_next, /icons, /images, and /favicon.ico
  matcher: ['/((?!login|api|_next|icons|images|favicon.ico).*)'],
}
