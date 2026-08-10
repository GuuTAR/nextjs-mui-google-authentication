'use client'

import Image from 'next/image'

import { useUserData } from '@/providers/UserDataProvider'

import styles from './page.module.css'

export default function HomePage() {
  const { userEmail, handleLogout } = useUserData()

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
