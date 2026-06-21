import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth'

import { firebaseClient } from '@/libs/firebase-client'

import { LOGOUT_FAILURE_MESSAGE, LOGOUT_SUCCESS_MESSAGE } from '@/lang/logout'
import {
  AUTH_UNAVAILABLE_MESSAGE,
  LOGIN_FAILURE_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  SESSION_CREATE_FAILURE_MESSAGE,
} from '@/lang/login'
import { ALERT_COLOR } from '@/enum/global'

import { authApi } from '@/api/authApi'

import { configService } from '@/services/configService'

import { useAppData } from '@/providers/AppDataProvider'

type UseAuthResult = {
  isAuthEnabled: boolean
  userEmail: string
  userDisplayName: string
  userPhotoURL: string
  handleLogin: () => Promise<void>
  handleLogout: () => Promise<void>
}

export default function useAuth(): UseAuthResult {
  const router = useRouter()

  const { language, handleShowNotification } = useAppData()

  const [userEmail, setUserEmail] = useState<string>('')
  const [userDisplayName, setUserDisplayName] = useState<string>('')
  const [userPhotoURL, setUserPhotoURL] = useState<string>('')

  useEffect(() => {
    // If auth is not enabled, we don't need to set up the listener
    const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
    if (!firebaseAuth) return

    // Set up the listener for auth state changes
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setUserEmail(user?.email || '')
      setUserDisplayName(user?.displayName || '')
      setUserPhotoURL(user?.photoURL || '')
    })

    // Clean up the listener on unmount
    return () => unsubscribe()
  }, [])

  const isAuthEnabled: boolean = useMemo(() => {
    return configService.getConfig().isEnableFirebaseAuth
  }, [])

  const handleLogin = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider()

      if (isAuthEnabled) {
        const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
        if (!firebaseAuth) {
          handleShowNotification({
            message: AUTH_UNAVAILABLE_MESSAGE[language],
            severity: ALERT_COLOR.ERROR,
          })
          return
        }

        const result: UserCredential = await signInWithPopup(firebaseAuth, provider)
        const idToken: string = await result.user.getIdToken()

        const isSessionSet: boolean = await authApi.setSession(idToken)
        if (!isSessionSet) {
          handleShowNotification({
            message: SESSION_CREATE_FAILURE_MESSAGE[language],
            severity: ALERT_COLOR.ERROR,
          })
          return
        }
      }
      handleShowNotification({
        message: LOGIN_SUCCESS_MESSAGE[language],
        severity: ALERT_COLOR.SUCCESS,
      })
      router.push('/')
    } catch (error) {
      console.error(error)
      handleShowNotification({
        message: LOGIN_FAILURE_MESSAGE[language],
        severity: ALERT_COLOR.ERROR,
      })
      return
    }
  }, [isAuthEnabled, handleShowNotification, language, router])

  const handleLogout = useCallback(async () => {
    try {
      if (isAuthEnabled) {
        const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
        if (!firebaseAuth) {
          handleShowNotification({
            message: AUTH_UNAVAILABLE_MESSAGE[language],
            severity: ALERT_COLOR.ERROR,
          })
          return
        }

        const isSuccess: boolean = await authApi.logout()
        if (!isSuccess) {
          handleShowNotification({
            message: LOGOUT_FAILURE_MESSAGE[language],
            severity: ALERT_COLOR.ERROR,
          })
          return
        }
      }
      handleShowNotification({
        message: LOGOUT_SUCCESS_MESSAGE[language],
        severity: ALERT_COLOR.SUCCESS,
      })
      router.push('/login')
    } catch (error) {
      console.error(error)
      handleShowNotification({
        message: LOGOUT_FAILURE_MESSAGE[language],
        severity: ALERT_COLOR.ERROR,
      })
      return
    }
  }, [handleShowNotification, isAuthEnabled, language, router])

  return { isAuthEnabled, userEmail, userDisplayName, userPhotoURL, handleLogin, handleLogout }
}
