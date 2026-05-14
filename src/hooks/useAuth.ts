import { useEffect, useMemo, useState } from 'react'
import { Auth } from 'firebase/auth'

import { firebaseClient } from '@/libs/firebase-client'

import { configService } from '@/services/configService'

type UseAuthResult = {
  isAuthEnabled: boolean
  userEmail: string
}

export default function useAuth(): UseAuthResult {
  const [userEmail, setUserEmail] = useState<string>('')

  useEffect(() => {
    // If auth is not enabled, we don't need to set up the listener
    const firebaseAuth: Auth | undefined = firebaseClient.getAuth()
    if (!firebaseAuth) return

    // Set up the listener for auth state changes
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setUserEmail(user?.email || '')
    })

    // Clean up the listener on unmount
    return () => unsubscribe()
  }, [])

  const isAuthEnabled: boolean = useMemo(() => {
    return configService.getConfig().isEnableFirebaseAuth
  }, [])

  return { isAuthEnabled, userEmail }
}
