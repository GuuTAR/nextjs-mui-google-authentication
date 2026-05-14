'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { authApi } from '@/api/authApi'

import useAuth from '@/hooks/useAuth'

import styles from './page.module.css'

export default function HomePage() {
  const router: AppRouterInstance = useRouter()
  const { isAuthEnabled, userEmail } = useAuth()

  const handleLogout = useCallback(async () => {
    if (!isAuthEnabled) {
      router.push('/login')
      return
    }

    const isSuccess: boolean = await authApi.logout()
    // TODO: Handle logout failure case (e.g., show error message)
    if (!isSuccess) {
      return
    }
    router.push('/login')
  }, [isAuthEnabled, router])

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
