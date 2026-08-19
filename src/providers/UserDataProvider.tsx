import { useRouter } from 'next/navigation'
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth'

import { firebaseClient } from '@/libs/firebase-client'

import { ALERT_COLOR } from '@/enum/global'

import { DISPLAY_DEMO_USER } from '@/data/demo'
import {
  AUTH_UNAVAILABLE_MESSAGE,
  LOGIN_FAILURE_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_FAILURE_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  SESSION_CREATE_FAILURE_MESSAGE,
} from '@/lang/auth'

import { AuthAPI } from '@/api/authApi'

import { createLocalApiService } from '@/services/apiService'
import { configService } from '@/services/configService'

import { useAppData } from '@/providers/AppDataProvider'

export type UserDataContextType = {
  userId?: string
  userToken?: string
  userEmail?: string
  userDisplayName?: string
  userPhotoURL?: string
  isDemoUser: boolean
  handleLogin: () => Promise<void>
  handleDemoLogin: () => Promise<void>
  handleLogout: () => Promise<void>
}

const UserDataContext = createContext<UserDataContextType>({} as UserDataContextType)

type Props = {
  children: ReactNode
}

export const UserDataProvider = ({ children }: Props) => {
  const router = useRouter()

  const { language, handleShowNotification } = useAppData()

  const [userId, setUserId] = useState<string | undefined>(undefined)
  const [userToken, setUserToken] = useState<string | undefined>(undefined)
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
  const [userDisplayName, setUserDisplayName] = useState<string | undefined>(undefined)
  const [userPhotoURL, setUserPhotoURL] = useState<string | undefined>(undefined)

  const isDemoUser: boolean = useMemo(() => {
    return userId === configService.getConfig().demoUid
  }, [userId])

  const authApi: AuthAPI = useMemo(() => {
    return new AuthAPI(createLocalApiService())
  }, [])

  useEffect(() => {
    const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
    if (!firebaseAuth) return

    const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
      const _isDemoUser: boolean = user?.uid === configService.getConfig().demoUid

      setUserId(user?.uid || '')
      setUserToken((await user?.getIdToken()) || '')
      setUserEmail(_isDemoUser ? DISPLAY_DEMO_USER.email : user?.email || '')
      setUserDisplayName(_isDemoUser ? DISPLAY_DEMO_USER.displayName : user?.displayName || '')
      setUserPhotoURL(_isDemoUser ? DISPLAY_DEMO_USER.photoURL : user?.photoURL || '')
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        return
      }
    }

    fetchUserData()
  }, [userId])

  const handleLogin = useCallback(async () => {
    try {
      const provider = new GoogleAuthProvider()

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

      const isSessionSet: boolean = await authApi.login(idToken)
      if (!isSessionSet) {
        handleShowNotification({
          message: SESSION_CREATE_FAILURE_MESSAGE[language],
          severity: ALERT_COLOR.ERROR,
        })
        return
      }
      setUserId(result.user.uid)

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
  }, [handleShowNotification, authApi, language, router])

  const handleDemoLogin = useCallback(async () => {
    try {
      const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
      if (!firebaseAuth) {
        handleShowNotification({
          message: AUTH_UNAVAILABLE_MESSAGE[language],
          severity: ALERT_COLOR.ERROR,
        })
        return
      }

      const result: UserCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        configService.getConfig().demoUser,
        configService.getConfig().demoPassword,
      )
      const idToken: string = await result.user.getIdToken()

      const isSessionSet: boolean = await authApi.login(idToken)
      if (!isSessionSet) {
        handleShowNotification({
          message: SESSION_CREATE_FAILURE_MESSAGE[language],
          severity: ALERT_COLOR.ERROR,
        })
        return
      }
      setUserId(result.user.uid)

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
    }
  }, [handleShowNotification, authApi, language, router])

  const handleLogout = useCallback(async () => {
    try {
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
      router.push('/login')

      await signOut(firebaseAuth)
      setUserId('')

      handleShowNotification({
        message: LOGOUT_SUCCESS_MESSAGE[language],
        severity: ALERT_COLOR.SUCCESS,
      })
    } catch (error) {
      console.error(error)
      handleShowNotification({
        message: LOGOUT_FAILURE_MESSAGE[language],
        severity: ALERT_COLOR.ERROR,
      })
      return
    }
  }, [handleShowNotification, authApi, language, router])

  return (
    <UserDataContext.Provider
      value={{
        userId,
        userEmail,
        userDisplayName,
        userPhotoURL,
        isDemoUser,
        userToken,
        handleLogin,
        handleDemoLogin,
        handleLogout,
      }}
    >
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserData = () => useContext(UserDataContext)
