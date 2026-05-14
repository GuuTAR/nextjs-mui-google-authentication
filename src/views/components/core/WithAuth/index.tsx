import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { DecodedIdToken } from 'firebase-admin/auth'

import { configService } from '@/services/configService'
import { authService } from '@/services/authService'

type Props = {
  children: ReactNode
  redirectPath?: string
}

export default async function WithAuth({ children, redirectPath = '/login' }: Props) {
  const isAuthEnabled: boolean = configService.getConfig().isEnableFirebaseAuth
  if (!isAuthEnabled) {
    return <>{children}</>
  }

  const user: DecodedIdToken | undefined = await authService.getCurrentUserFromSession()
  if (!user) {
    redirect(redirectPath)
  }

  return <>{children}</>
}
