'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

import { useAppData } from '@/providers/AppDataProvider'

import * as Styles from './style'

const CircularProgress = dynamic(() => import('@mui/material').then((m) => ({ default: m.CircularProgress })), {
  ssr: false,
})

type Props = {
  children: ReactNode
}

export default function Rendering({ children }: Props) {
  const { isDataLoaded } = useAppData()

  if (!isDataLoaded)
    return (
      <Styles.LoadingStack>
        <CircularProgress color="primary" />
      </Styles.LoadingStack>
    )

  return children
}
