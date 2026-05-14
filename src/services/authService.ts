import { cookies } from 'next/headers'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { Auth, DecodedIdToken } from 'firebase-admin/auth'

import { firebaseAdminClient } from '@/libs/firebase-admin'

class AuthService {
  private firebaseAdminAuth: Auth | undefined

  constructor(firebaseAdminAuth: Auth | undefined) {
    this.firebaseAdminAuth = firebaseAdminAuth
  }

  public createUserSession = async (idToken: string, expiresIn: number): Promise<boolean> => {
    try {
      // Ensure Firebase Admin Auth is initialized
      if (!this.firebaseAdminAuth) {
        throw new Error('Firebase Admin Auth is not initialized')
      }

      // Create a session cookie with the provided ID token and expiration time
      const sessionCookie: string = await this.firebaseAdminAuth.createSessionCookie(idToken, {
        expiresIn: expiresIn * 24 * 60 * 60 * 1_000, // Convert days to milliseconds
      })

      // Set the session cookie in the response headers
      const cookieStore: ReadonlyRequestCookies = await cookies()
      /*
       * httpOnly: true - The cookie cannot be accessed via JavaScript, providing protection against XSS attacks.
       * secure: true - The cookie will only be sent over HTTPS connections, ensuring it is encrypted in transit.
       * sameSite: 'lax' - The cookie will only be sent with same-site requests and top-level navigation, providing some protection against CSRF attacks while still allowing the cookie to be sent in most cases.
       * maxAge: expiresIn - The cookie will expire after the specified number of seconds, which should match the expiration time of the session cookie created by Firebase Admin Auth.
       * path: '/' - The cookie will be sent with all requests to the domain, allowing it to be accessible across the entire application.
       */
      cookieStore.set('session', sessionCookie, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: expiresIn,
        path: '/',
      })
      return true
    } catch (error) {
      console.error('Error creating user session:', (error as Error).message)
      return false
    }
  }

  public getCurrentUserFromSession = async (): Promise<DecodedIdToken | undefined> => {
    try {
      // Ensure Firebase Admin Auth is initialized
      if (!this.firebaseAdminAuth) {
        throw new Error('Firebase Admin Auth is not initialized')
      }

      // Retrieve the session cookie from the request headers
      const cookieStore: ReadonlyRequestCookies = await cookies()
      const sessionCookie: RequestCookie | undefined = cookieStore.get('session')
      if (!sessionCookie) {
        throw new Error('No session cookie found')
      }

      // Verify the session cookie and return the decoded ID token
      return await this.firebaseAdminAuth.verifySessionCookie(sessionCookie.value)
    } catch (error) {
      console.error('Error verifying user session:', (error as Error).message)
      return
    }
  }

  public revokeUserSession = async (userId: string): Promise<boolean> => {
    try {
      // Ensure Firebase Admin Auth is initialized
      if (!this.firebaseAdminAuth) {
        throw new Error('Firebase Admin Auth is not initialized')
      }

      // Revoke the user's refresh tokens to invalidate their session
      await this.firebaseAdminAuth.revokeRefreshTokens(userId)
      return true
    } catch (error) {
      console.error('Error revoking user session:', (error as Error).message)
      return false
    }
  }
}

export const authService = new AuthService(firebaseAdminClient.getAuth())
