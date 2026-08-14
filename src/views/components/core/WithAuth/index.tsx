import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { DecodedIdToken } from 'firebase-admin/auth'

import { authService } from '@/services/authService'

type Props = {
  children: ReactNode
  redirectPath?: string
}

export default async function WithAuth({ children, redirectPath = '/login' }: Props) {
  const user: DecodedIdToken | undefined = await authService.getCurrentUserFromSession()
  if (!user) {
    redirect(redirectPath)
  }

  return <>{children}</>
}
