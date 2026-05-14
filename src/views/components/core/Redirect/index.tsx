'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type Props = {
  path: string
}

export default function Redirect({ path }: Props) {
  const router: AppRouterInstance = useRouter()

  useEffect(() => {
    router.push(path)
  }, [path, router])

  return <></>
}
