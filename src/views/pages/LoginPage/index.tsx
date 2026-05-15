'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth'
import { Button, Typography } from '@mui/material'
import { useNotifications } from '@toolpad/core/useNotifications'

import { firebaseClient } from '@/libs/firebase-client'

import { authApi } from '@/api/authApi'

import useAuth from '@/hooks/useAuth'

import { GoogleLoginButton, LoginContainer, LoginPageStyle } from './style'

export default function LoginPage() {
  const router: AppRouterInstance = useRouter()
  const { isAuthEnabled } = useAuth()
  const notifications = useNotifications()

  const handleLogin = useCallback(async () => {
    const provider = new GoogleAuthProvider()

    if (isAuthEnabled) {
      const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
      if (!firebaseAuth) {
        notifications.show('Auth is not available!', {
          autoHideDuration: 3000,
          severity: 'error',
        })
        return
      }

      // Sign in with Google and get the ID token
      const result: UserCredential = await signInWithPopup(firebaseAuth, provider)
      const idToken: string = await result.user.getIdToken()

      // Send the ID token to the backend to create a session
      const isSessionSet: boolean = await authApi.setSession(idToken)
      if (!isSessionSet) {
        notifications.show('Session creation failed!', {
          autoHideDuration: 3000,
          severity: 'error',
        })
        return
      }
    }
    notifications.show('Login successful!', {
      autoHideDuration: 3000,
      severity: 'success',
    })
    router.push('/')
  }, [isAuthEnabled, notifications, router])

  return (
    <LoginPageStyle>
      <LoginContainer>
        <Typography variant="h6" align="center" color="textPrimary">
          Sign in to Your Account
        </Typography>
        {isAuthEnabled ? (
          <GoogleLoginButton variant="outlined" onClick={handleLogin}>
            <Image src="/icons/google.svg" alt="Google Icon" width={24} height={24} />
            <Typography variant="body2" align="center" color="textPrimary">
              Sign in with Google
            </Typography>
          </GoogleLoginButton>
        ) : (
          <Button variant="outlined" onClick={handleLogin}>
            <Typography variant="body2" align="center" color="textPrimary">
              Sign in with no authentication
            </Typography>
          </Button>
        )}
      </LoginContainer>
    </LoginPageStyle>
  )
}
