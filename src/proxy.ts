import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
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
