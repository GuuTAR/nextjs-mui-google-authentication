'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useNotifications } from '@toolpad/core/useNotifications'

import { authApi } from '@/api/authApi'

import useAuth from '@/hooks/useAuth'

import styles from './page.module.css'

export default function HomePage() {
  const router: AppRouterInstance = useRouter()
  const { isAuthEnabled, userEmail } = useAuth()
  const notifications = useNotifications()

  const handleLogout = useCallback(async () => {
    if (!isAuthEnabled) {
      router.push('/login')
      return
    }

    const isSuccess: boolean = await authApi.logout()
    if (!isSuccess) {
      notifications.show('Logout failed!', {
        autoHideDuration: 3000,
        severity: 'error',
      })
    }
    router.push('/login')
  }, [isAuthEnabled, notifications, router])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div className={styles.intro}>
          <h1>Welcome here!</h1>
          <p>{userEmail}</p>
        </div>
        <div className={styles.ctas}>
          <a className={styles.primary} onClick={handleLogout}>
            Logout
          </a>
        </div>
      </main>
    </div>
  )
}
